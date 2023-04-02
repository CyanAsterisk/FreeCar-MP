import { profile } from "../gen/profile/profile_pb";
import { FreeCar } from "./request";

export namespace ProfileService {
    export function getProfile(): Promise<profile.IGetProfileResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: '/profile',
            respMarshaller: profile.GetProfileResponse.fromObject,
        })
    }

    export function submitProfile(req: profile.ISubmitProfileRequest): Promise<profile.ISubmitProfileResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/profile',
            data: req,
            respMarshaller: profile.SubmitProfileResponse.fromObject,
        })
    }

    export function clearProfile(): Promise<profile.IClearProfileResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'DELETE',
            path: '/profile',
            respMarshaller: profile.ClearProfileResponse.fromObject,
        })
    }

    export function getProfilePhoto(): Promise<profile.IGetProfilePhotoResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: '/profile/photo',
            respMarshaller: profile.GetProfilePhotoResponse.fromObject,
        })
    }

    export function createProfilePhoto(): Promise<profile.ICreateProfilePhotoResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/profile/photo',
            respMarshaller: profile.CreateProfilePhotoResponse.fromObject,
        })
    }

    export function completeProfilePhoto(): Promise<profile.ICompleteProfilePhotoResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/profile/complete',
            respMarshaller: profile.CompleteProfilePhotoResponse.fromObject,
        })
    }

    export function clearProfilePhoto(): Promise<profile.IClearProfilePhotoResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'DELETE',
            path: '/profile/photo',
            respMarshaller: profile.ClearProfilePhotoResponse.fromObject,
        })
    }
}
