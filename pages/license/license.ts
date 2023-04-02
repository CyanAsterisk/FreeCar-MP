import { ProfileService } from "../../service/pkg/profile"
import { profile } from "../../service/gen/profile/profile_pb"
import { FreeCar } from "../../service/pkg/request"
import { formatDate } from "../../utils/format"
import { routing } from "../../utils/routing"

Page({
    redirectURL: '',
    profileRefresher: undefined as undefined|NodeJS.Timer,

    data: {
        licNo: '',
        name: '',
        genderIndex: 0,
        genders: ['未知', '男', '女'],
        birthDate: '2000-01-01',
        licImgURL: '',
        state: profile.IdentityStatus[profile.IdentityStatus.UNSUBMITTED],
    },

    renderProfile(p: profile.IProfile) {
        this.renderIdentity(p.identity!)
        this.setData({
            state: profile.IdentityStatus[p.identityStatus||0],
        })
    },

    renderIdentity(i?: profile.IIdentity) {
        this.setData({
            licNo: i?.licNumber||'',
            name: i?.name||'',
            genderIndex: i?.gender||0,
            birthDate: formatDate(i?.birthDateMillis||0),
        })
    },

    onLoad(opt: Record<'redirect', string>) {
        const o: routing.RegisterOpts = opt
        if(o.redirect) {
            this.redirectURL = decodeURIComponent(o.redirect)
        }
        ProfileService.getProfile().then(resp => this.renderProfile(<profile.IProfile>resp.profile))
        ProfileService.getProfilePhoto().then(resp => {
            this.setData({
                licImgURL: resp.url||'',
            })
        })
    },

    onUploadLic() {
        wx.chooseMedia({
            success: async res => {
                if (res.tempFiles.length === 0){
                    return
                }
                this.setData({
                    licImgURL:res.tempFiles[0].tempFilePath
                })
                const photoRes = await ProfileService.createProfilePhoto()
                if (!photoRes!.uploadUrl) {
                    return
                }
                await FreeCar.uploadFile({
                    localPath: res.tempFiles[0].tempFilePath,
                    url: photoRes!.uploadUrl,
                })
                const resp = await ProfileService.completeProfilePhoto()
                this.renderIdentity(resp.identity!)
            }
        })
    },

    onGenderChange(e: any) {
        this.setData({
            genderIndex: parseInt(e.detail.value),
        })
    },

    onBirthDateChange(e: any) {
        this.setData({
            birthDate: e.detail.value,
        })
    },

    onSubmit() {
        ProfileService.submitProfile({
                identity : {
                    licNumber: this.data.licNo,
                    name: this.data.name,
                    gender: this.data.genderIndex,
                    birthDateMillis: Date.parse(this.data.birthDate),
                }
            }
        ).then(p => {
            this.renderProfile(p.profile!)
            this.scheduleProfileRefresher()
        })
    },

    onUnload() {
        this.clearProfileRefresher()
    },

    scheduleProfileRefresher() {
        this.profileRefresher = setInterval(() => {
            ProfileService.getProfile().then(p => {
                this.renderProfile(p.profile!)
                if (p.profile!.identityStatus !== profile.IdentityStatus.PENDING) {
                    this.clearProfileRefresher()
                }
                if (p.profile!.identityStatus === profile.IdentityStatus.VERIFIED) {
                    this.onLicVerified()
                }
            })
        }, 1000)
    },

    clearProfileRefresher() {
        if (this.profileRefresher) {
            clearInterval(this.profileRefresher)
            this.profileRefresher = undefined
        }
    },

    onResubmit() {
        ProfileService.clearProfile().then(p => this.renderProfile(p.profile!))
        ProfileService.clearProfilePhoto().then(() => {
            this.setData({
                licImgURL: '',
            })
        })
    },

    onLicVerified() {
        if (this.redirectURL) {
            wx.redirectTo({
                url: this.redirectURL,
            })
        }
    }
})