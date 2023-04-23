import { user } from "../gen/user/user_pb";
import { FreeCar } from "./request";

export namespace UserService {
    export function getUserInfo(): Promise<user.IGetUserInfoResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: '/user/info',
            respMarshaller: user.GetUserInfoResponse.fromObject,
        })
    }

    export function updateUserInfo(req :user.IUpdateUserRequest): Promise<user.IUpdateUserResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/user/info',
            data: req,
            respMarshaller: user.UpdateUserResponse.fromObject
        })
    }
   
    export function uploadAvatar(): Promise<user.UploadAvatarResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/user/avatar',
            respMarshaller: user.UploadAvatarResponse.fromObject
        })
    }

}
