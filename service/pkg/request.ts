import camelcaseKeys = require("camelcase-keys")
const decamelizeKeysDeep = require('decamelize-keys-deep');
import { user } from "../gen/user/user_pb"
import {common} from "../gen/common/common_pb"

export namespace FreeCar {
    export const serverAddr = 'https://localhost:8080'
    export const wsAddr = 'ws://localhost:9090'
    const AUTH_ERR = 'AUTH_ERR'

    const authData = {
        token: '',
    }

    export interface RequestOption<REQ, RES> {
        method: 'GET' | 'PUT' | 'POST' | 'DELETE'
        path: string
        data?: REQ
        respMarshaller: (r: object) => RES
    }

    export interface AuthOption {
        attachAuthHeader: boolean
        retryOnAuthError: boolean
    }

    export async function sendRequestWithAuthRetry<REQ, RES>(o: RequestOption<REQ, RES>, a?: AuthOption): Promise<RES> {
        const authOpt = a || {
            attachAuthHeader: true,
            retryOnAuthError: true,
        }
        try {
            return sendRequest(o, authOpt)
        } catch (err) {
            if (err === AUTH_ERR && authOpt.retryOnAuthError) {
                authData.token = ''
                await login()
                return sendRequestWithAuthRetry(o, {
                    attachAuthHeader: authOpt.attachAuthHeader,
                    retryOnAuthError: false,
                })
            } else {
                throw err
            }
        }
    }

    export async function login() {
        const wxResp = await wxLogin()
        const resp = await sendRequest<user.ILoginRequest, user.ILoginResponse>({
            method: 'POST',
            path: '/login/user',
            data: {
                code: wxResp.code,
            },
            respMarshaller: user.LoginResponse.fromObject
        }, {
            attachAuthHeader: false,
            retryOnAuthError: false,
        })
        if (isSuccess(resp.baseResp)) {
            authData.token = resp.token!
        }
    }

    function sendRequest<REQ, RES>(o: RequestOption<REQ, RES>, a: AuthOption): Promise<RES> {
        return new Promise((resolve, reject) => {
            const header: Record<string, any> = {}
            if (a.attachAuthHeader) {
                if (authData.token) {
                    header.authorization = 'Bearer ' + authData.token
                } else {
                    reject(AUTH_ERR)
                    return
                }
            }
            wx.request({
                url: serverAddr + o.path,
                enableHttp2: true,
                method: o.method,
                data:decamelizeKeysDeep(o.data),
                header,
                success: res => {
                    if (res.statusCode === 401) {
                        reject(AUTH_ERR)
                    } else if (res.statusCode >= 400) {
                        reject(res)
                    } else {
                        resolve(o.respMarshaller(
                            camelcaseKeys(res.data as object, {
                                deep: true,
                            })))
                    }
                },
                fail: reject,
            })
        })
    }

    function wxLogin(): Promise<WechatMiniprogram.LoginSuccessCallbackResult> {
        return new Promise((resolve, reject) => {
            wx.login({
                success: resolve,
                fail: reject,
            })
        })
    }

    export interface UploadFileOpts {
        localPath: string
        url: string
    }

    export function uploadFile(o: UploadFileOpts): Promise<void> {
        const data = wx.getFileSystemManager().readFileSync(o.localPath)
        return new Promise((resolve, reject) => {
            wx.request({
                method: 'PUT',
                url: o.url,
                data,
                success: res => {
                    if (res.statusCode >= 400) {
                        reject(res)
                    } else {
                        resolve()
                    }
                },
                fail: reject,
            })
        })
    }
    export function isSuccess(baseResp: common.IBaseResponse | null | undefined): boolean {
        if (baseResp === null || baseResp == undefined) return false;
        else return baseResp.statusCode === common.Err.Success;
    }
}