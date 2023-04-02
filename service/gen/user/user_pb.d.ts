import * as $protobuf from "protobufjs";
/** Namespace user. */
export namespace user {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo accountId */
        accountId?: (number|null);

        /** UserInfo username */
        username?: (string|null);

        /** UserInfo phoneNumber */
        phoneNumber?: (number|null);

        /** UserInfo avatarUrl */
        avatarUrl?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserInfo);

        /** UserInfo accountId. */
        public accountId: number;

        /** UserInfo username. */
        public username: string;

        /** UserInfo phoneNumber. */
        public phoneNumber: number;

        /** UserInfo avatarUrl. */
        public avatarUrl: string;

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): user.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User accountId */
        accountId?: (number|null);

        /** User username */
        username?: (string|null);

        /** User phoneNumber */
        phoneNumber?: (number|null);

        /** User avatarBlobId */
        avatarBlobId?: (number|null);

        /** User openId */
        openId?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User accountId. */
        public accountId: number;

        /** User username. */
        public username: string;

        /** User phoneNumber. */
        public phoneNumber: number;

        /** User avatarBlobId. */
        public avatarBlobId: number;

        /** User openId. */
        public openId: string;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest code */
        code?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest code. */
        public code: string;

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** LoginResponse token */
        token?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** LoginResponse token. */
        public token: string;

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoRequest. */
    interface IGetUserInfoRequest {
    }

    /** Represents a GetUserInfoRequest. */
    class GetUserInfoRequest implements IGetUserInfoRequest {

        /**
         * Constructs a new GetUserInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserInfoRequest);

        /**
         * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserInfoRequest;

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @param message GetUserInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoResponse. */
    interface IGetUserInfoResponse {

        /** GetUserInfoResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetUserInfoResponse userInfo */
        userInfo?: (user.IUserInfo|null);
    }

    /** Represents a GetUserInfoResponse. */
    class GetUserInfoResponse implements IGetUserInfoResponse {

        /**
         * Constructs a new GetUserInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserInfoResponse);

        /** GetUserInfoResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetUserInfoResponse userInfo. */
        public userInfo?: (user.IUserInfo|null);

        /**
         * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserInfoResponse;

        /**
         * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
         * @param message GetUserInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserRequest. */
    interface IUpdateUserRequest {

        /** UpdateUserRequest username */
        username?: (string|null);

        /** UpdateUserRequest phoneNumber */
        phoneNumber?: (number|null);
    }

    /** Represents an UpdateUserRequest. */
    class UpdateUserRequest implements IUpdateUserRequest {

        /**
         * Constructs a new UpdateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserRequest);

        /** UpdateUserRequest username. */
        public username: string;

        /** UpdateUserRequest phoneNumber. */
        public phoneNumber: number;

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserRequest;

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @param message UpdateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserResponse. */
    interface IUpdateUserResponse {

        /** UpdateUserResponse baseResp */
        baseResp?: (common.IBaseResponse|null);
    }

    /** Represents an UpdateUserResponse. */
    class UpdateUserResponse implements IUpdateUserResponse {

        /**
         * Constructs a new UpdateUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserResponse);

        /** UpdateUserResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /**
         * Creates an UpdateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserResponse;

        /**
         * Creates a plain object from an UpdateUserResponse message. Also converts values to other types if specified.
         * @param message UpdateUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserByIDRequest. */
    interface IUpdateUserByIDRequest {

        /** UpdateUserByIDRequest username */
        username?: (string|null);

        /** UpdateUserByIDRequest phoneNumber */
        phoneNumber?: (number|null);

        /** UpdateUserByIDRequest accountId */
        accountId?: (number|null);
    }

    /** Represents an UpdateUserByIDRequest. */
    class UpdateUserByIDRequest implements IUpdateUserByIDRequest {

        /**
         * Constructs a new UpdateUserByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserByIDRequest);

        /** UpdateUserByIDRequest username. */
        public username: string;

        /** UpdateUserByIDRequest phoneNumber. */
        public phoneNumber: number;

        /** UpdateUserByIDRequest accountId. */
        public accountId: number;

        /**
         * Creates an UpdateUserByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserByIDRequest;

        /**
         * Creates a plain object from an UpdateUserByIDRequest message. Also converts values to other types if specified.
         * @param message UpdateUserByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserByIDResponse. */
    interface IUpdateUserByIDResponse {

        /** UpdateUserByIDResponse baseResp */
        baseResp?: (common.IBaseResponse|null);
    }

    /** Represents an UpdateUserByIDResponse. */
    class UpdateUserByIDResponse implements IUpdateUserByIDResponse {

        /**
         * Constructs a new UpdateUserByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUpdateUserByIDResponse);

        /** UpdateUserByIDResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /**
         * Creates an UpdateUserByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UpdateUserByIDResponse;

        /**
         * Creates a plain object from an UpdateUserByIDResponse message. Also converts values to other types if specified.
         * @param message UpdateUserByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UpdateUserByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadAvatarRequest. */
    interface IUploadAvatarRequest {
    }

    /** Represents an UploadAvatarRequest. */
    class UploadAvatarRequest implements IUploadAvatarRequest {

        /**
         * Constructs a new UploadAvatarRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUploadAvatarRequest);

        /**
         * Creates an UploadAvatarRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadAvatarRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UploadAvatarRequest;

        /**
         * Creates a plain object from an UploadAvatarRequest message. Also converts values to other types if specified.
         * @param message UploadAvatarRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UploadAvatarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadAvatarRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadAvatarResponse. */
    interface IUploadAvatarResponse {

        /** UploadAvatarResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** UploadAvatarResponse uploadUrl */
        uploadUrl?: (string|null);
    }

    /** Represents an UploadAvatarResponse. */
    class UploadAvatarResponse implements IUploadAvatarResponse {

        /**
         * Constructs a new UploadAvatarResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUploadAvatarResponse);

        /** UploadAvatarResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** UploadAvatarResponse uploadUrl. */
        public uploadUrl: string;

        /**
         * Creates an UploadAvatarResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadAvatarResponse
         */
        public static fromObject(object: { [k: string]: any }): user.UploadAvatarResponse;

        /**
         * Creates a plain object from an UploadAvatarResponse message. Also converts values to other types if specified.
         * @param message UploadAvatarResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UploadAvatarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadAvatarResponse to JSON.
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
