import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const user = $root.user = (() => {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    const user = {};

    user.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof user
         * @interface IUserInfo
         * @property {number|null} [accountId] UserInfo accountId
         * @property {string|null} [username] UserInfo username
         * @property {number|null} [phoneNumber] UserInfo phoneNumber
         * @property {string|null} [avatarUrl] UserInfo avatarUrl
         */

        /**
         * Constructs a new UserInfo.
         * @memberof user
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {user.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo accountId.
         * @member {number} accountId
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo username.
         * @member {string} username
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.username = "";

        /**
         * UserInfo phoneNumber.
         * @member {number} phoneNumber
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.phoneNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo avatarUrl.
         * @member {string} avatarUrl
         * @memberof user.UserInfo
         * @instance
         */
        UserInfo.prototype.avatarUrl = "";

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserInfo)
                return object;
            let message = new $root.user.UserInfo();
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.phoneNumber != null)
                if ($util.Long)
                    (message.phoneNumber = $util.Long.fromValue(object.phoneNumber)).unsigned = false;
                else if (typeof object.phoneNumber === "string")
                    message.phoneNumber = parseInt(object.phoneNumber, 10);
                else if (typeof object.phoneNumber === "number")
                    message.phoneNumber = object.phoneNumber;
                else if (typeof object.phoneNumber === "object")
                    message.phoneNumber = new $util.LongBits(object.phoneNumber.low >>> 0, object.phoneNumber.high >>> 0).toNumber();
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserInfo
         * @static
         * @param {user.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
                object.username = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.phoneNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phoneNumber = options.longs === String ? "0" : 0;
                object.avatarUrl = "";
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (typeof message.phoneNumber === "number")
                    object.phoneNumber = options.longs === String ? String(message.phoneNumber) : message.phoneNumber;
                else
                    object.phoneNumber = options.longs === String ? $util.Long.prototype.toString.call(message.phoneNumber) : options.longs === Number ? new $util.LongBits(message.phoneNumber.low >>> 0, message.phoneNumber.high >>> 0).toNumber() : message.phoneNumber;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof user.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {number|null} [accountId] User accountId
         * @property {string|null} [username] User username
         * @property {number|null} [phoneNumber] User phoneNumber
         * @property {number|null} [avatarBlobId] User avatarBlobId
         * @property {string|null} [openId] User openId
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User accountId.
         * @member {number} accountId
         * @memberof user.User
         * @instance
         */
        User.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User username.
         * @member {string} username
         * @memberof user.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User phoneNumber.
         * @member {number} phoneNumber
         * @memberof user.User
         * @instance
         */
        User.prototype.phoneNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User avatarBlobId.
         * @member {number} avatarBlobId
         * @memberof user.User
         * @instance
         */
        User.prototype.avatarBlobId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User openId.
         * @member {string} openId
         * @memberof user.User
         * @instance
         */
        User.prototype.openId = "";

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            let message = new $root.user.User();
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.phoneNumber != null)
                if ($util.Long)
                    (message.phoneNumber = $util.Long.fromValue(object.phoneNumber)).unsigned = false;
                else if (typeof object.phoneNumber === "string")
                    message.phoneNumber = parseInt(object.phoneNumber, 10);
                else if (typeof object.phoneNumber === "number")
                    message.phoneNumber = object.phoneNumber;
                else if (typeof object.phoneNumber === "object")
                    message.phoneNumber = new $util.LongBits(object.phoneNumber.low >>> 0, object.phoneNumber.high >>> 0).toNumber();
            if (object.avatarBlobId != null)
                if ($util.Long)
                    (message.avatarBlobId = $util.Long.fromValue(object.avatarBlobId)).unsigned = false;
                else if (typeof object.avatarBlobId === "string")
                    message.avatarBlobId = parseInt(object.avatarBlobId, 10);
                else if (typeof object.avatarBlobId === "number")
                    message.avatarBlobId = object.avatarBlobId;
                else if (typeof object.avatarBlobId === "object")
                    message.avatarBlobId = new $util.LongBits(object.avatarBlobId.low >>> 0, object.avatarBlobId.high >>> 0).toNumber();
            if (object.openId != null)
                message.openId = String(object.openId);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
                object.username = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.phoneNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phoneNumber = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.avatarBlobId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.avatarBlobId = options.longs === String ? "0" : 0;
                object.openId = "";
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (typeof message.phoneNumber === "number")
                    object.phoneNumber = options.longs === String ? String(message.phoneNumber) : message.phoneNumber;
                else
                    object.phoneNumber = options.longs === String ? $util.Long.prototype.toString.call(message.phoneNumber) : options.longs === Number ? new $util.LongBits(message.phoneNumber.low >>> 0, message.phoneNumber.high >>> 0).toNumber() : message.phoneNumber;
            if (message.avatarBlobId != null && message.hasOwnProperty("avatarBlobId"))
                if (typeof message.avatarBlobId === "number")
                    object.avatarBlobId = options.longs === String ? String(message.avatarBlobId) : message.avatarBlobId;
                else
                    object.avatarBlobId = options.longs === String ? $util.Long.prototype.toString.call(message.avatarBlobId) : options.longs === Number ? new $util.LongBits(message.avatarBlobId.low >>> 0, message.avatarBlobId.high >>> 0).toNumber() : message.avatarBlobId;
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {string|null} [code] LoginRequest code
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest code.
         * @member {string} code
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.code = "";

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            let message = new $root.user.LoginRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    user.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof user
         * @interface ILoginResponse
         * @property {common.IBaseResponse|null} [baseResp] LoginResponse baseResp
         * @property {string|null} [token] LoginResponse token
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof user
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {user.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.baseResp = null;

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponse)
                return object;
            let message = new $root.user.LoginResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".user.LoginResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponse
         * @static
         * @param {user.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.token = "";
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof user.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    user.GetUserInfoRequest = (function() {

        /**
         * Properties of a GetUserInfoRequest.
         * @memberof user
         * @interface IGetUserInfoRequest
         */

        /**
         * Constructs a new GetUserInfoRequest.
         * @memberof user
         * @classdesc Represents a GetUserInfoRequest.
         * @implements IGetUserInfoRequest
         * @constructor
         * @param {user.IGetUserInfoRequest=} [properties] Properties to set
         */
        function GetUserInfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetUserInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetUserInfoRequest} GetUserInfoRequest
         */
        GetUserInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetUserInfoRequest)
                return object;
            return new $root.user.GetUserInfoRequest();
        };

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetUserInfoRequest
         * @static
         * @param {user.GetUserInfoRequest} message GetUserInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetUserInfoRequest to JSON.
         * @function toJSON
         * @memberof user.GetUserInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoRequest;
    })();

    user.GetUserInfoResponse = (function() {

        /**
         * Properties of a GetUserInfoResponse.
         * @memberof user
         * @interface IGetUserInfoResponse
         * @property {common.IBaseResponse|null} [baseResp] GetUserInfoResponse baseResp
         * @property {user.IUserInfo|null} [userInfo] GetUserInfoResponse userInfo
         */

        /**
         * Constructs a new GetUserInfoResponse.
         * @memberof user
         * @classdesc Represents a GetUserInfoResponse.
         * @implements IGetUserInfoResponse
         * @constructor
         * @param {user.IGetUserInfoResponse=} [properties] Properties to set
         */
        function GetUserInfoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof user.GetUserInfoResponse
         * @instance
         */
        GetUserInfoResponse.prototype.baseResp = null;

        /**
         * GetUserInfoResponse userInfo.
         * @member {user.IUserInfo|null|undefined} userInfo
         * @memberof user.GetUserInfoResponse
         * @instance
         */
        GetUserInfoResponse.prototype.userInfo = null;

        /**
         * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetUserInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetUserInfoResponse} GetUserInfoResponse
         */
        GetUserInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetUserInfoResponse)
                return object;
            let message = new $root.user.GetUserInfoResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".user.GetUserInfoResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".user.GetUserInfoResponse.userInfo: object expected");
                message.userInfo = $root.user.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetUserInfoResponse
         * @static
         * @param {user.GetUserInfoResponse} message GetUserInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.userInfo = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.user.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this GetUserInfoResponse to JSON.
         * @function toJSON
         * @memberof user.GetUserInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoResponse;
    })();

    user.UpdateUserRequest = (function() {

        /**
         * Properties of an UpdateUserRequest.
         * @memberof user
         * @interface IUpdateUserRequest
         * @property {string|null} [username] UpdateUserRequest username
         * @property {number|null} [phoneNumber] UpdateUserRequest phoneNumber
         */

        /**
         * Constructs a new UpdateUserRequest.
         * @memberof user
         * @classdesc Represents an UpdateUserRequest.
         * @implements IUpdateUserRequest
         * @constructor
         * @param {user.IUpdateUserRequest=} [properties] Properties to set
         */
        function UpdateUserRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserRequest username.
         * @member {string} username
         * @memberof user.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.username = "";

        /**
         * UpdateUserRequest phoneNumber.
         * @member {number} phoneNumber
         * @memberof user.UpdateUserRequest
         * @instance
         */
        UpdateUserRequest.prototype.phoneNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates an UpdateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserRequest} UpdateUserRequest
         */
        UpdateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserRequest)
                return object;
            let message = new $root.user.UpdateUserRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.phoneNumber != null)
                if ($util.Long)
                    (message.phoneNumber = $util.Long.fromValue(object.phoneNumber)).unsigned = false;
                else if (typeof object.phoneNumber === "string")
                    message.phoneNumber = parseInt(object.phoneNumber, 10);
                else if (typeof object.phoneNumber === "number")
                    message.phoneNumber = object.phoneNumber;
                else if (typeof object.phoneNumber === "object")
                    message.phoneNumber = new $util.LongBits(object.phoneNumber.low >>> 0, object.phoneNumber.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserRequest
         * @static
         * @param {user.UpdateUserRequest} message UpdateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.phoneNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phoneNumber = options.longs === String ? "0" : 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (typeof message.phoneNumber === "number")
                    object.phoneNumber = options.longs === String ? String(message.phoneNumber) : message.phoneNumber;
                else
                    object.phoneNumber = options.longs === String ? $util.Long.prototype.toString.call(message.phoneNumber) : options.longs === Number ? new $util.LongBits(message.phoneNumber.low >>> 0, message.phoneNumber.high >>> 0).toNumber() : message.phoneNumber;
            return object;
        };

        /**
         * Converts this UpdateUserRequest to JSON.
         * @function toJSON
         * @memberof user.UpdateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserRequest;
    })();

    user.UpdateUserResponse = (function() {

        /**
         * Properties of an UpdateUserResponse.
         * @memberof user
         * @interface IUpdateUserResponse
         * @property {common.IBaseResponse|null} [baseResp] UpdateUserResponse baseResp
         */

        /**
         * Constructs a new UpdateUserResponse.
         * @memberof user
         * @classdesc Represents an UpdateUserResponse.
         * @implements IUpdateUserResponse
         * @constructor
         * @param {user.IUpdateUserResponse=} [properties] Properties to set
         */
        function UpdateUserResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof user.UpdateUserResponse
         * @instance
         */
        UpdateUserResponse.prototype.baseResp = null;

        /**
         * Creates an UpdateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserResponse} UpdateUserResponse
         */
        UpdateUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserResponse)
                return object;
            let message = new $root.user.UpdateUserResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".user.UpdateUserResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserResponse
         * @static
         * @param {user.UpdateUserResponse} message UpdateUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.baseResp = null;
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            return object;
        };

        /**
         * Converts this UpdateUserResponse to JSON.
         * @function toJSON
         * @memberof user.UpdateUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserResponse;
    })();

    user.UpdateUserByIDRequest = (function() {

        /**
         * Properties of an UpdateUserByIDRequest.
         * @memberof user
         * @interface IUpdateUserByIDRequest
         * @property {string|null} [username] UpdateUserByIDRequest username
         * @property {number|null} [phoneNumber] UpdateUserByIDRequest phoneNumber
         * @property {number|null} [accountId] UpdateUserByIDRequest accountId
         */

        /**
         * Constructs a new UpdateUserByIDRequest.
         * @memberof user
         * @classdesc Represents an UpdateUserByIDRequest.
         * @implements IUpdateUserByIDRequest
         * @constructor
         * @param {user.IUpdateUserByIDRequest=} [properties] Properties to set
         */
        function UpdateUserByIDRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserByIDRequest username.
         * @member {string} username
         * @memberof user.UpdateUserByIDRequest
         * @instance
         */
        UpdateUserByIDRequest.prototype.username = "";

        /**
         * UpdateUserByIDRequest phoneNumber.
         * @member {number} phoneNumber
         * @memberof user.UpdateUserByIDRequest
         * @instance
         */
        UpdateUserByIDRequest.prototype.phoneNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateUserByIDRequest accountId.
         * @member {number} accountId
         * @memberof user.UpdateUserByIDRequest
         * @instance
         */
        UpdateUserByIDRequest.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates an UpdateUserByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserByIDRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserByIDRequest} UpdateUserByIDRequest
         */
        UpdateUserByIDRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserByIDRequest)
                return object;
            let message = new $root.user.UpdateUserByIDRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.phoneNumber != null)
                if ($util.Long)
                    (message.phoneNumber = $util.Long.fromValue(object.phoneNumber)).unsigned = false;
                else if (typeof object.phoneNumber === "string")
                    message.phoneNumber = parseInt(object.phoneNumber, 10);
                else if (typeof object.phoneNumber === "number")
                    message.phoneNumber = object.phoneNumber;
                else if (typeof object.phoneNumber === "object")
                    message.phoneNumber = new $util.LongBits(object.phoneNumber.low >>> 0, object.phoneNumber.high >>> 0).toNumber();
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserByIDRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserByIDRequest
         * @static
         * @param {user.UpdateUserByIDRequest} message UpdateUserByIDRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserByIDRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.phoneNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phoneNumber = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (typeof message.phoneNumber === "number")
                    object.phoneNumber = options.longs === String ? String(message.phoneNumber) : message.phoneNumber;
                else
                    object.phoneNumber = options.longs === String ? $util.Long.prototype.toString.call(message.phoneNumber) : options.longs === Number ? new $util.LongBits(message.phoneNumber.low >>> 0, message.phoneNumber.high >>> 0).toNumber() : message.phoneNumber;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            return object;
        };

        /**
         * Converts this UpdateUserByIDRequest to JSON.
         * @function toJSON
         * @memberof user.UpdateUserByIDRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserByIDRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserByIDRequest;
    })();

    user.UpdateUserByIDResponse = (function() {

        /**
         * Properties of an UpdateUserByIDResponse.
         * @memberof user
         * @interface IUpdateUserByIDResponse
         * @property {common.IBaseResponse|null} [baseResp] UpdateUserByIDResponse baseResp
         */

        /**
         * Constructs a new UpdateUserByIDResponse.
         * @memberof user
         * @classdesc Represents an UpdateUserByIDResponse.
         * @implements IUpdateUserByIDResponse
         * @constructor
         * @param {user.IUpdateUserByIDResponse=} [properties] Properties to set
         */
        function UpdateUserByIDResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserByIDResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof user.UpdateUserByIDResponse
         * @instance
         */
        UpdateUserByIDResponse.prototype.baseResp = null;

        /**
         * Creates an UpdateUserByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UpdateUserByIDResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UpdateUserByIDResponse} UpdateUserByIDResponse
         */
        UpdateUserByIDResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UpdateUserByIDResponse)
                return object;
            let message = new $root.user.UpdateUserByIDResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".user.UpdateUserByIDResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserByIDResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UpdateUserByIDResponse
         * @static
         * @param {user.UpdateUserByIDResponse} message UpdateUserByIDResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserByIDResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.baseResp = null;
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            return object;
        };

        /**
         * Converts this UpdateUserByIDResponse to JSON.
         * @function toJSON
         * @memberof user.UpdateUserByIDResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserByIDResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserByIDResponse;
    })();

    user.UploadAvatarRequest = (function() {

        /**
         * Properties of an UploadAvatarRequest.
         * @memberof user
         * @interface IUploadAvatarRequest
         */

        /**
         * Constructs a new UploadAvatarRequest.
         * @memberof user
         * @classdesc Represents an UploadAvatarRequest.
         * @implements IUploadAvatarRequest
         * @constructor
         * @param {user.IUploadAvatarRequest=} [properties] Properties to set
         */
        function UploadAvatarRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an UploadAvatarRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UploadAvatarRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UploadAvatarRequest} UploadAvatarRequest
         */
        UploadAvatarRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UploadAvatarRequest)
                return object;
            return new $root.user.UploadAvatarRequest();
        };

        /**
         * Creates a plain object from an UploadAvatarRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UploadAvatarRequest
         * @static
         * @param {user.UploadAvatarRequest} message UploadAvatarRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadAvatarRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UploadAvatarRequest to JSON.
         * @function toJSON
         * @memberof user.UploadAvatarRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadAvatarRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadAvatarRequest;
    })();

    user.UploadAvatarResponse = (function() {

        /**
         * Properties of an UploadAvatarResponse.
         * @memberof user
         * @interface IUploadAvatarResponse
         * @property {common.IBaseResponse|null} [baseResp] UploadAvatarResponse baseResp
         * @property {string|null} [uploadUrl] UploadAvatarResponse uploadUrl
         */

        /**
         * Constructs a new UploadAvatarResponse.
         * @memberof user
         * @classdesc Represents an UploadAvatarResponse.
         * @implements IUploadAvatarResponse
         * @constructor
         * @param {user.IUploadAvatarResponse=} [properties] Properties to set
         */
        function UploadAvatarResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadAvatarResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof user.UploadAvatarResponse
         * @instance
         */
        UploadAvatarResponse.prototype.baseResp = null;

        /**
         * UploadAvatarResponse uploadUrl.
         * @member {string} uploadUrl
         * @memberof user.UploadAvatarResponse
         * @instance
         */
        UploadAvatarResponse.prototype.uploadUrl = "";

        /**
         * Creates an UploadAvatarResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UploadAvatarResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UploadAvatarResponse} UploadAvatarResponse
         */
        UploadAvatarResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UploadAvatarResponse)
                return object;
            let message = new $root.user.UploadAvatarResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".user.UploadAvatarResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.uploadUrl != null)
                message.uploadUrl = String(object.uploadUrl);
            return message;
        };

        /**
         * Creates a plain object from an UploadAvatarResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UploadAvatarResponse
         * @static
         * @param {user.UploadAvatarResponse} message UploadAvatarResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadAvatarResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.uploadUrl = "";
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.uploadUrl != null && message.hasOwnProperty("uploadUrl"))
                object.uploadUrl = message.uploadUrl;
            return object;
        };

        /**
         * Converts this UploadAvatarResponse to JSON.
         * @function toJSON
         * @memberof user.UploadAvatarResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadAvatarResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadAvatarResponse;
    })();

    return user;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    common.BaseResponse = (function() {

        /**
         * Properties of a BaseResponse.
         * @memberof common
         * @interface IBaseResponse
         * @property {number|null} [statusCode] BaseResponse statusCode
         * @property {string|null} [statusMsg] BaseResponse statusMsg
         */

        /**
         * Constructs a new BaseResponse.
         * @memberof common
         * @classdesc Represents a BaseResponse.
         * @implements IBaseResponse
         * @constructor
         * @param {common.IBaseResponse=} [properties] Properties to set
         */
        function BaseResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseResponse statusCode.
         * @member {number} statusCode
         * @memberof common.BaseResponse
         * @instance
         */
        BaseResponse.prototype.statusCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BaseResponse statusMsg.
         * @member {string} statusMsg
         * @memberof common.BaseResponse
         * @instance
         */
        BaseResponse.prototype.statusMsg = "";

        /**
         * Creates a BaseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.BaseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.BaseResponse} BaseResponse
         */
        BaseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.BaseResponse)
                return object;
            let message = new $root.common.BaseResponse();
            if (object.statusCode != null)
                if ($util.Long)
                    (message.statusCode = $util.Long.fromValue(object.statusCode)).unsigned = false;
                else if (typeof object.statusCode === "string")
                    message.statusCode = parseInt(object.statusCode, 10);
                else if (typeof object.statusCode === "number")
                    message.statusCode = object.statusCode;
                else if (typeof object.statusCode === "object")
                    message.statusCode = new $util.LongBits(object.statusCode.low >>> 0, object.statusCode.high >>> 0).toNumber();
            if (object.statusMsg != null)
                message.statusMsg = String(object.statusMsg);
            return message;
        };

        /**
         * Creates a plain object from a BaseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.BaseResponse
         * @static
         * @param {common.BaseResponse} message BaseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.statusCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.statusCode = options.longs === String ? "0" : 0;
                object.statusMsg = "";
            }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (typeof message.statusCode === "number")
                    object.statusCode = options.longs === String ? String(message.statusCode) : message.statusCode;
                else
                    object.statusCode = options.longs === String ? $util.Long.prototype.toString.call(message.statusCode) : options.longs === Number ? new $util.LongBits(message.statusCode.low >>> 0, message.statusCode.high >>> 0).toNumber() : message.statusCode;
            if (message.statusMsg != null && message.hasOwnProperty("statusMsg"))
                object.statusMsg = message.statusMsg;
            return object;
        };

        /**
         * Converts this BaseResponse to JSON.
         * @function toJSON
         * @memberof common.BaseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaseResponse;
    })();

    /**
     * Err enum.
     * @name common.Err
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} ParamsErr=1 ParamsErr value
     * @property {number} ServiceErr=2 ServiceErr value
     * @property {number} RPCInteractionErr=10000 RPCInteractionErr value
     * @property {number} InteractionServerErr=10001 InteractionServerErr value
     * @property {number} RPCSocialityErr=20000 RPCSocialityErr value
     * @property {number} SocialityServerErr=20001 SocialityServerErr value
     * @property {number} RPCUserErr=30000 RPCUserErr value
     * @property {number} UserServerErr=30001 UserServerErr value
     * @property {number} UserAlreadyExistErr=30002 UserAlreadyExistErr value
     * @property {number} UserNotFoundErr=30003 UserNotFoundErr value
     * @property {number} AuthorizeFailErr=30004 AuthorizeFailErr value
     * @property {number} RPCVideoErr=40000 RPCVideoErr value
     * @property {number} VideoServerErr=40001 VideoServerErr value
     * @property {number} RPCChatErr=50000 RPCChatErr value
     * @property {number} ChatServerErr=50001 ChatServerErr value
     */
    common.Err = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[1] = "ParamsErr"] = 1;
        values[valuesById[2] = "ServiceErr"] = 2;
        values[valuesById[10000] = "RPCInteractionErr"] = 10000;
        values[valuesById[10001] = "InteractionServerErr"] = 10001;
        values[valuesById[20000] = "RPCSocialityErr"] = 20000;
        values[valuesById[20001] = "SocialityServerErr"] = 20001;
        values[valuesById[30000] = "RPCUserErr"] = 30000;
        values[valuesById[30001] = "UserServerErr"] = 30001;
        values[valuesById[30002] = "UserAlreadyExistErr"] = 30002;
        values[valuesById[30003] = "UserNotFoundErr"] = 30003;
        values[valuesById[30004] = "AuthorizeFailErr"] = 30004;
        values[valuesById[40000] = "RPCVideoErr"] = 40000;
        values[valuesById[40001] = "VideoServerErr"] = 40001;
        values[valuesById[50000] = "RPCChatErr"] = 50000;
        values[valuesById[50001] = "ChatServerErr"] = 50001;
        return values;
    })();

    return common;
})();