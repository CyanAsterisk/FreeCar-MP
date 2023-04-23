import * as $protobuf from "protobufjs";
/** Namespace profile. */
export namespace profile {

    /** Gender enum. */
    enum Gender {
        G_NOT_SPECIFIED = 0,
        MALE = 1,
        FEMALE = 2
    }

    /** IdentityStatus enum. */
    enum IdentityStatus {
        UNSUBMITTED = 0,
        PENDING = 1,
        VERIFIED = 2
    }

    /** Properties of a Profile. */
    interface IProfile {

        /** Profile identity */
        identity?: (profile.IIdentity|null);

        /** Profile identityStatus */
        identityStatus?: (profile.IdentityStatus|null);
    }

    /** Represents a Profile. */
    class Profile implements IProfile {

        /**
         * Constructs a new Profile.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IProfile);

        /** Profile identity. */
        public identity?: (profile.IIdentity|null);

        /** Profile identityStatus. */
        public identityStatus: profile.IdentityStatus;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Profile
         */
        public static fromObject(object: { [k: string]: any }): profile.Profile;

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @param message Profile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Profile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Identity. */
    interface IIdentity {

        /** Identity licNumber */
        licNumber?: (string|null);

        /** Identity name */
        name?: (string|null);

        /** Identity gender */
        gender?: (profile.Gender|null);

        /** Identity birthDateMillis */
        birthDateMillis?: (number|null);
    }

    /** Represents an Identity. */
    class Identity implements IIdentity {

        /**
         * Constructs a new Identity.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IIdentity);

        /** Identity licNumber. */
        public licNumber: string;

        /** Identity name. */
        public name: string;

        /** Identity gender. */
        public gender: profile.Gender;

        /** Identity birthDateMillis. */
        public birthDateMillis: number;

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Identity
         */
        public static fromObject(object: { [k: string]: any }): profile.Identity;

        /**
         * Creates a plain object from an Identity message. Also converts values to other types if specified.
         * @param message Identity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.Identity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Identity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetProfileRequest. */
    interface IGetProfileRequest {
    }

    /** Represents a GetProfileRequest. */
    class GetProfileRequest implements IGetProfileRequest {

        /**
         * Constructs a new GetProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IGetProfileRequest);

        /**
         * Creates a GetProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.GetProfileRequest;

        /**
         * Creates a plain object from a GetProfileRequest message. Also converts values to other types if specified.
         * @param message GetProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.GetProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetProfileResponse. */
    interface IGetProfileResponse {

        /** GetProfileResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetProfileResponse profile */
        profile?: (profile.IProfile|null);
    }

    /** Represents a GetProfileResponse. */
    class GetProfileResponse implements IGetProfileResponse {

        /**
         * Constructs a new GetProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IGetProfileResponse);

        /** GetProfileResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetProfileResponse profile. */
        public profile?: (profile.IProfile|null);

        /**
         * Creates a GetProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.GetProfileResponse;

        /**
         * Creates a plain object from a GetProfileResponse message. Also converts values to other types if specified.
         * @param message GetProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.GetProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubmitProfileRequest. */
    interface ISubmitProfileRequest {

        /** SubmitProfileRequest identity */
        identity?: (profile.IIdentity|null);
    }

    /** Represents a SubmitProfileRequest. */
    class SubmitProfileRequest implements ISubmitProfileRequest {

        /**
         * Constructs a new SubmitProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ISubmitProfileRequest);

        /** SubmitProfileRequest identity. */
        public identity?: (profile.IIdentity|null);

        /**
         * Creates a SubmitProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmitProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.SubmitProfileRequest;

        /**
         * Creates a plain object from a SubmitProfileRequest message. Also converts values to other types if specified.
         * @param message SubmitProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.SubmitProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmitProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubmitProfileResponse. */
    interface ISubmitProfileResponse {

        /** SubmitProfileResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** SubmitProfileResponse profile */
        profile?: (profile.IProfile|null);
    }

    /** Represents a SubmitProfileResponse. */
    class SubmitProfileResponse implements ISubmitProfileResponse {

        /**
         * Constructs a new SubmitProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ISubmitProfileResponse);

        /** SubmitProfileResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** SubmitProfileResponse profile. */
        public profile?: (profile.IProfile|null);

        /**
         * Creates a SubmitProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmitProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.SubmitProfileResponse;

        /**
         * Creates a plain object from a SubmitProfileResponse message. Also converts values to other types if specified.
         * @param message SubmitProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.SubmitProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmitProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearProfileRequest. */
    interface IClearProfileRequest {
    }

    /** Represents a ClearProfileRequest. */
    class ClearProfileRequest implements IClearProfileRequest {

        /**
         * Constructs a new ClearProfileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IClearProfileRequest);

        /**
         * Creates a ClearProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearProfileRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.ClearProfileRequest;

        /**
         * Creates a plain object from a ClearProfileRequest message. Also converts values to other types if specified.
         * @param message ClearProfileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.ClearProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearProfileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearProfileResponse. */
    interface IClearProfileResponse {

        /** ClearProfileResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** ClearProfileResponse profile */
        profile?: (profile.IProfile|null);
    }

    /** Represents a ClearProfileResponse. */
    class ClearProfileResponse implements IClearProfileResponse {

        /**
         * Constructs a new ClearProfileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IClearProfileResponse);

        /** ClearProfileResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** ClearProfileResponse profile. */
        public profile?: (profile.IProfile|null);

        /**
         * Creates a ClearProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearProfileResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.ClearProfileResponse;

        /**
         * Creates a plain object from a ClearProfileResponse message. Also converts values to other types if specified.
         * @param message ClearProfileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.ClearProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearProfileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetProfilePhotoRequest. */
    interface IGetProfilePhotoRequest {
    }

    /** Represents a GetProfilePhotoRequest. */
    class GetProfilePhotoRequest implements IGetProfilePhotoRequest {

        /**
         * Constructs a new GetProfilePhotoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IGetProfilePhotoRequest);

        /**
         * Creates a GetProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProfilePhotoRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.GetProfilePhotoRequest;

        /**
         * Creates a plain object from a GetProfilePhotoRequest message. Also converts values to other types if specified.
         * @param message GetProfilePhotoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.GetProfilePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProfilePhotoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetProfilePhotoResponse. */
    interface IGetProfilePhotoResponse {

        /** GetProfilePhotoResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetProfilePhotoResponse url */
        url?: (string|null);
    }

    /** Represents a GetProfilePhotoResponse. */
    class GetProfilePhotoResponse implements IGetProfilePhotoResponse {

        /**
         * Constructs a new GetProfilePhotoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IGetProfilePhotoResponse);

        /** GetProfilePhotoResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetProfilePhotoResponse url. */
        public url: string;

        /**
         * Creates a GetProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProfilePhotoResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.GetProfilePhotoResponse;

        /**
         * Creates a plain object from a GetProfilePhotoResponse message. Also converts values to other types if specified.
         * @param message GetProfilePhotoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.GetProfilePhotoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProfilePhotoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateProfilePhotoRequest. */
    interface ICreateProfilePhotoRequest {
    }

    /** Represents a CreateProfilePhotoRequest. */
    class CreateProfilePhotoRequest implements ICreateProfilePhotoRequest {

        /**
         * Constructs a new CreateProfilePhotoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ICreateProfilePhotoRequest);

        /**
         * Creates a CreateProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateProfilePhotoRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.CreateProfilePhotoRequest;

        /**
         * Creates a plain object from a CreateProfilePhotoRequest message. Also converts values to other types if specified.
         * @param message CreateProfilePhotoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.CreateProfilePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateProfilePhotoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateProfilePhotoResponse. */
    interface ICreateProfilePhotoResponse {

        /** CreateProfilePhotoResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** CreateProfilePhotoResponse uploadUrl */
        uploadUrl?: (string|null);
    }

    /** Represents a CreateProfilePhotoResponse. */
    class CreateProfilePhotoResponse implements ICreateProfilePhotoResponse {

        /**
         * Constructs a new CreateProfilePhotoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ICreateProfilePhotoResponse);

        /** CreateProfilePhotoResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** CreateProfilePhotoResponse uploadUrl. */
        public uploadUrl: string;

        /**
         * Creates a CreateProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateProfilePhotoResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.CreateProfilePhotoResponse;

        /**
         * Creates a plain object from a CreateProfilePhotoResponse message. Also converts values to other types if specified.
         * @param message CreateProfilePhotoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.CreateProfilePhotoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateProfilePhotoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompleteProfilePhotoRequest. */
    interface ICompleteProfilePhotoRequest {
    }

    /** Represents a CompleteProfilePhotoRequest. */
    class CompleteProfilePhotoRequest implements ICompleteProfilePhotoRequest {

        /**
         * Constructs a new CompleteProfilePhotoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ICompleteProfilePhotoRequest);

        /**
         * Creates a CompleteProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompleteProfilePhotoRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.CompleteProfilePhotoRequest;

        /**
         * Creates a plain object from a CompleteProfilePhotoRequest message. Also converts values to other types if specified.
         * @param message CompleteProfilePhotoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.CompleteProfilePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompleteProfilePhotoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompleteProfilePhotoResponse. */
    interface ICompleteProfilePhotoResponse {

        /** CompleteProfilePhotoResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** CompleteProfilePhotoResponse identity */
        identity?: (profile.IIdentity|null);
    }

    /** Represents a CompleteProfilePhotoResponse. */
    class CompleteProfilePhotoResponse implements ICompleteProfilePhotoResponse {

        /**
         * Constructs a new CompleteProfilePhotoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.ICompleteProfilePhotoResponse);

        /** CompleteProfilePhotoResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** CompleteProfilePhotoResponse identity. */
        public identity?: (profile.IIdentity|null);

        /**
         * Creates a CompleteProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompleteProfilePhotoResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.CompleteProfilePhotoResponse;

        /**
         * Creates a plain object from a CompleteProfilePhotoResponse message. Also converts values to other types if specified.
         * @param message CompleteProfilePhotoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.CompleteProfilePhotoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompleteProfilePhotoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearProfilePhotoRequest. */
    interface IClearProfilePhotoRequest {
    }

    /** Represents a ClearProfilePhotoRequest. */
    class ClearProfilePhotoRequest implements IClearProfilePhotoRequest {

        /**
         * Constructs a new ClearProfilePhotoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IClearProfilePhotoRequest);

        /**
         * Creates a ClearProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearProfilePhotoRequest
         */
        public static fromObject(object: { [k: string]: any }): profile.ClearProfilePhotoRequest;

        /**
         * Creates a plain object from a ClearProfilePhotoRequest message. Also converts values to other types if specified.
         * @param message ClearProfilePhotoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.ClearProfilePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearProfilePhotoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearProfilePhotoResponse. */
    interface IClearProfilePhotoResponse {

        /** ClearProfilePhotoResponse baseResp */
        baseResp?: (common.IBaseResponse|null);
    }

    /** Represents a ClearProfilePhotoResponse. */
    class ClearProfilePhotoResponse implements IClearProfilePhotoResponse {

        /**
         * Constructs a new ClearProfilePhotoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IClearProfilePhotoResponse);

        /** ClearProfilePhotoResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /**
         * Creates a ClearProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearProfilePhotoResponse
         */
        public static fromObject(object: { [k: string]: any }): profile.ClearProfilePhotoResponse;

        /**
         * Creates a plain object from a ClearProfilePhotoResponse message. Also converts values to other types if specified.
         * @param message ClearProfilePhotoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.ClearProfilePhotoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearProfilePhotoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a BaseResponse. */
    interface IBaseResponse {

        /** BaseResponse statusCode */
        statusCode?: (number|null);

        /** BaseResponse statusMsg */
        statusMsg?: (string|null);
    }

    /** Represents a BaseResponse. */
    class BaseResponse implements IBaseResponse {

        /**
         * Constructs a new BaseResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBaseResponse);

        /** BaseResponse statusCode. */
        public statusCode: number;

        /** BaseResponse statusMsg. */
        public statusMsg: string;

        /**
         * Creates a BaseResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseResponse
         */
        public static fromObject(object: { [k: string]: any }): common.BaseResponse;

        /**
         * Creates a plain object from a BaseResponse message. Also converts values to other types if specified.
         * @param message BaseResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.BaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Err enum. */
    enum Err {
        Success = 0,
        ParamsErr = 1,
        ServiceErr = 2,
        RPCInteractionErr = 10000,
        InteractionServerErr = 10001,
        RPCSocialityErr = 20000,
        SocialityServerErr = 20001,
        RPCUserErr = 30000,
        UserServerErr = 30001,
        UserAlreadyExistErr = 30002,
        UserNotFoundErr = 30003,
        AuthorizeFailErr = 30004,
        RPCVideoErr = 40000,
        VideoServerErr = 40001,
        RPCChatErr = 50000,
        ChatServerErr = 50001
    }
}
