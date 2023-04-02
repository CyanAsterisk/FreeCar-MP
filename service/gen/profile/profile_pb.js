import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const profile = $root.profile = (() => {

    /**
     * Namespace profile.
     * @exports profile
     * @namespace
     */
    const profile = {};

    /**
     * Gender enum.
     * @name profile.Gender
     * @enum {number}
     * @property {number} G_NOT_SPECIFIED=0 G_NOT_SPECIFIED value
     * @property {number} MALE=1 MALE value
     * @property {number} FEMALE=2 FEMALE value
     */
    profile.Gender = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "G_NOT_SPECIFIED"] = 0;
        values[valuesById[1] = "MALE"] = 1;
        values[valuesById[2] = "FEMALE"] = 2;
        return values;
    })();

    /**
     * IdentityStatus enum.
     * @name profile.IdentityStatus
     * @enum {number}
     * @property {number} UNSUBMITTED=0 UNSUBMITTED value
     * @property {number} PENDING=1 PENDING value
     * @property {number} VERIFIED=2 VERIFIED value
     */
    profile.IdentityStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSUBMITTED"] = 0;
        values[valuesById[1] = "PENDING"] = 1;
        values[valuesById[2] = "VERIFIED"] = 2;
        return values;
    })();

    profile.Profile = (function() {

        /**
         * Properties of a Profile.
         * @memberof profile
         * @interface IProfile
         * @property {profile.IIdentity|null} [identity] Profile identity
         * @property {profile.IdentityStatus|null} [identityStatus] Profile identityStatus
         */

        /**
         * Constructs a new Profile.
         * @memberof profile
         * @classdesc Represents a Profile.
         * @implements IProfile
         * @constructor
         * @param {profile.IProfile=} [properties] Properties to set
         */
        function Profile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Profile identity.
         * @member {profile.IIdentity|null|undefined} identity
         * @memberof profile.Profile
         * @instance
         */
        Profile.prototype.identity = null;

        /**
         * Profile identityStatus.
         * @member {profile.IdentityStatus} identityStatus
         * @memberof profile.Profile
         * @instance
         */
        Profile.prototype.identityStatus = 0;

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.Profile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.Profile} Profile
         */
        Profile.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.Profile)
                return object;
            let message = new $root.profile.Profile();
            if (object.identity != null) {
                if (typeof object.identity !== "object")
                    throw TypeError(".profile.Profile.identity: object expected");
                message.identity = $root.profile.Identity.fromObject(object.identity);
            }
            switch (object.identityStatus) {
            case "UNSUBMITTED":
            case 0:
                message.identityStatus = 0;
                break;
            case "PENDING":
            case 1:
                message.identityStatus = 1;
                break;
            case "VERIFIED":
            case 2:
                message.identityStatus = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.Profile
         * @static
         * @param {profile.Profile} message Profile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Profile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.identity = null;
                object.identityStatus = options.enums === String ? "UNSUBMITTED" : 0;
            }
            if (message.identity != null && message.hasOwnProperty("identity"))
                object.identity = $root.profile.Identity.toObject(message.identity, options);
            if (message.identityStatus != null && message.hasOwnProperty("identityStatus"))
                object.identityStatus = options.enums === String ? $root.profile.IdentityStatus[message.identityStatus] : message.identityStatus;
            return object;
        };

        /**
         * Converts this Profile to JSON.
         * @function toJSON
         * @memberof profile.Profile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Profile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Profile;
    })();

    profile.Identity = (function() {

        /**
         * Properties of an Identity.
         * @memberof profile
         * @interface IIdentity
         * @property {string|null} [licNumber] Identity licNumber
         * @property {string|null} [name] Identity name
         * @property {profile.Gender|null} [gender] Identity gender
         * @property {number|null} [birthDateMillis] Identity birthDateMillis
         */

        /**
         * Constructs a new Identity.
         * @memberof profile
         * @classdesc Represents an Identity.
         * @implements IIdentity
         * @constructor
         * @param {profile.IIdentity=} [properties] Properties to set
         */
        function Identity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Identity licNumber.
         * @member {string} licNumber
         * @memberof profile.Identity
         * @instance
         */
        Identity.prototype.licNumber = "";

        /**
         * Identity name.
         * @member {string} name
         * @memberof profile.Identity
         * @instance
         */
        Identity.prototype.name = "";

        /**
         * Identity gender.
         * @member {profile.Gender} gender
         * @memberof profile.Identity
         * @instance
         */
        Identity.prototype.gender = 0;

        /**
         * Identity birthDateMillis.
         * @member {number} birthDateMillis
         * @memberof profile.Identity
         * @instance
         */
        Identity.prototype.birthDateMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.Identity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.Identity} Identity
         */
        Identity.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.Identity)
                return object;
            let message = new $root.profile.Identity();
            if (object.licNumber != null)
                message.licNumber = String(object.licNumber);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.gender) {
            case "G_NOT_SPECIFIED":
            case 0:
                message.gender = 0;
                break;
            case "MALE":
            case 1:
                message.gender = 1;
                break;
            case "FEMALE":
            case 2:
                message.gender = 2;
                break;
            }
            if (object.birthDateMillis != null)
                if ($util.Long)
                    (message.birthDateMillis = $util.Long.fromValue(object.birthDateMillis)).unsigned = false;
                else if (typeof object.birthDateMillis === "string")
                    message.birthDateMillis = parseInt(object.birthDateMillis, 10);
                else if (typeof object.birthDateMillis === "number")
                    message.birthDateMillis = object.birthDateMillis;
                else if (typeof object.birthDateMillis === "object")
                    message.birthDateMillis = new $util.LongBits(object.birthDateMillis.low >>> 0, object.birthDateMillis.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Identity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.Identity
         * @static
         * @param {profile.Identity} message Identity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.licNumber = "";
                object.name = "";
                object.gender = options.enums === String ? "G_NOT_SPECIFIED" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.birthDateMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.birthDateMillis = options.longs === String ? "0" : 0;
            }
            if (message.licNumber != null && message.hasOwnProperty("licNumber"))
                object.licNumber = message.licNumber;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.profile.Gender[message.gender] : message.gender;
            if (message.birthDateMillis != null && message.hasOwnProperty("birthDateMillis"))
                if (typeof message.birthDateMillis === "number")
                    object.birthDateMillis = options.longs === String ? String(message.birthDateMillis) : message.birthDateMillis;
                else
                    object.birthDateMillis = options.longs === String ? $util.Long.prototype.toString.call(message.birthDateMillis) : options.longs === Number ? new $util.LongBits(message.birthDateMillis.low >>> 0, message.birthDateMillis.high >>> 0).toNumber() : message.birthDateMillis;
            return object;
        };

        /**
         * Converts this Identity to JSON.
         * @function toJSON
         * @memberof profile.Identity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Identity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Identity;
    })();

    profile.GetProfileRequest = (function() {

        /**
         * Properties of a GetProfileRequest.
         * @memberof profile
         * @interface IGetProfileRequest
         */

        /**
         * Constructs a new GetProfileRequest.
         * @memberof profile
         * @classdesc Represents a GetProfileRequest.
         * @implements IGetProfileRequest
         * @constructor
         * @param {profile.IGetProfileRequest=} [properties] Properties to set
         */
        function GetProfileRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a GetProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.GetProfileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.GetProfileRequest} GetProfileRequest
         */
        GetProfileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.GetProfileRequest)
                return object;
            return new $root.profile.GetProfileRequest();
        };

        /**
         * Creates a plain object from a GetProfileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.GetProfileRequest
         * @static
         * @param {profile.GetProfileRequest} message GetProfileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfileRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetProfileRequest to JSON.
         * @function toJSON
         * @memberof profile.GetProfileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfileRequest;
    })();

    profile.GetProfileResponse = (function() {

        /**
         * Properties of a GetProfileResponse.
         * @memberof profile
         * @interface IGetProfileResponse
         * @property {common.IBaseResponse|null} [baseResp] GetProfileResponse baseResp
         * @property {profile.IProfile|null} [profile] GetProfileResponse profile
         */

        /**
         * Constructs a new GetProfileResponse.
         * @memberof profile
         * @classdesc Represents a GetProfileResponse.
         * @implements IGetProfileResponse
         * @constructor
         * @param {profile.IGetProfileResponse=} [properties] Properties to set
         */
        function GetProfileResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetProfileResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.baseResp = null;

        /**
         * GetProfileResponse profile.
         * @member {profile.IProfile|null|undefined} profile
         * @memberof profile.GetProfileResponse
         * @instance
         */
        GetProfileResponse.prototype.profile = null;

        /**
         * Creates a GetProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.GetProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.GetProfileResponse} GetProfileResponse
         */
        GetProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.GetProfileResponse)
                return object;
            let message = new $root.profile.GetProfileResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.GetProfileResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".profile.GetProfileResponse.profile: object expected");
                message.profile = $root.profile.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.GetProfileResponse
         * @static
         * @param {profile.GetProfileResponse} message GetProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.profile = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.profile.Profile.toObject(message.profile, options);
            return object;
        };

        /**
         * Converts this GetProfileResponse to JSON.
         * @function toJSON
         * @memberof profile.GetProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfileResponse;
    })();

    profile.SubmitProfileRequest = (function() {

        /**
         * Properties of a SubmitProfileRequest.
         * @memberof profile
         * @interface ISubmitProfileRequest
         * @property {profile.IIdentity|null} [identity] SubmitProfileRequest identity
         */

        /**
         * Constructs a new SubmitProfileRequest.
         * @memberof profile
         * @classdesc Represents a SubmitProfileRequest.
         * @implements ISubmitProfileRequest
         * @constructor
         * @param {profile.ISubmitProfileRequest=} [properties] Properties to set
         */
        function SubmitProfileRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmitProfileRequest identity.
         * @member {profile.IIdentity|null|undefined} identity
         * @memberof profile.SubmitProfileRequest
         * @instance
         */
        SubmitProfileRequest.prototype.identity = null;

        /**
         * Creates a SubmitProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.SubmitProfileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.SubmitProfileRequest} SubmitProfileRequest
         */
        SubmitProfileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.SubmitProfileRequest)
                return object;
            let message = new $root.profile.SubmitProfileRequest();
            if (object.identity != null) {
                if (typeof object.identity !== "object")
                    throw TypeError(".profile.SubmitProfileRequest.identity: object expected");
                message.identity = $root.profile.Identity.fromObject(object.identity);
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmitProfileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.SubmitProfileRequest
         * @static
         * @param {profile.SubmitProfileRequest} message SubmitProfileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmitProfileRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.identity = null;
            if (message.identity != null && message.hasOwnProperty("identity"))
                object.identity = $root.profile.Identity.toObject(message.identity, options);
            return object;
        };

        /**
         * Converts this SubmitProfileRequest to JSON.
         * @function toJSON
         * @memberof profile.SubmitProfileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmitProfileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubmitProfileRequest;
    })();

    profile.SubmitProfileResponse = (function() {

        /**
         * Properties of a SubmitProfileResponse.
         * @memberof profile
         * @interface ISubmitProfileResponse
         * @property {common.IBaseResponse|null} [baseResp] SubmitProfileResponse baseResp
         * @property {profile.IProfile|null} [profile] SubmitProfileResponse profile
         */

        /**
         * Constructs a new SubmitProfileResponse.
         * @memberof profile
         * @classdesc Represents a SubmitProfileResponse.
         * @implements ISubmitProfileResponse
         * @constructor
         * @param {profile.ISubmitProfileResponse=} [properties] Properties to set
         */
        function SubmitProfileResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmitProfileResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.SubmitProfileResponse
         * @instance
         */
        SubmitProfileResponse.prototype.baseResp = null;

        /**
         * SubmitProfileResponse profile.
         * @member {profile.IProfile|null|undefined} profile
         * @memberof profile.SubmitProfileResponse
         * @instance
         */
        SubmitProfileResponse.prototype.profile = null;

        /**
         * Creates a SubmitProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.SubmitProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.SubmitProfileResponse} SubmitProfileResponse
         */
        SubmitProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.SubmitProfileResponse)
                return object;
            let message = new $root.profile.SubmitProfileResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.SubmitProfileResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".profile.SubmitProfileResponse.profile: object expected");
                message.profile = $root.profile.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmitProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.SubmitProfileResponse
         * @static
         * @param {profile.SubmitProfileResponse} message SubmitProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmitProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.profile = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.profile.Profile.toObject(message.profile, options);
            return object;
        };

        /**
         * Converts this SubmitProfileResponse to JSON.
         * @function toJSON
         * @memberof profile.SubmitProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmitProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubmitProfileResponse;
    })();

    profile.ClearProfileRequest = (function() {

        /**
         * Properties of a ClearProfileRequest.
         * @memberof profile
         * @interface IClearProfileRequest
         */

        /**
         * Constructs a new ClearProfileRequest.
         * @memberof profile
         * @classdesc Represents a ClearProfileRequest.
         * @implements IClearProfileRequest
         * @constructor
         * @param {profile.IClearProfileRequest=} [properties] Properties to set
         */
        function ClearProfileRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a ClearProfileRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.ClearProfileRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.ClearProfileRequest} ClearProfileRequest
         */
        ClearProfileRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.ClearProfileRequest)
                return object;
            return new $root.profile.ClearProfileRequest();
        };

        /**
         * Creates a plain object from a ClearProfileRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.ClearProfileRequest
         * @static
         * @param {profile.ClearProfileRequest} message ClearProfileRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearProfileRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ClearProfileRequest to JSON.
         * @function toJSON
         * @memberof profile.ClearProfileRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearProfileRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearProfileRequest;
    })();

    profile.ClearProfileResponse = (function() {

        /**
         * Properties of a ClearProfileResponse.
         * @memberof profile
         * @interface IClearProfileResponse
         * @property {common.IBaseResponse|null} [baseResp] ClearProfileResponse baseResp
         * @property {profile.IProfile|null} [profile] ClearProfileResponse profile
         */

        /**
         * Constructs a new ClearProfileResponse.
         * @memberof profile
         * @classdesc Represents a ClearProfileResponse.
         * @implements IClearProfileResponse
         * @constructor
         * @param {profile.IClearProfileResponse=} [properties] Properties to set
         */
        function ClearProfileResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClearProfileResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.ClearProfileResponse
         * @instance
         */
        ClearProfileResponse.prototype.baseResp = null;

        /**
         * ClearProfileResponse profile.
         * @member {profile.IProfile|null|undefined} profile
         * @memberof profile.ClearProfileResponse
         * @instance
         */
        ClearProfileResponse.prototype.profile = null;

        /**
         * Creates a ClearProfileResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.ClearProfileResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.ClearProfileResponse} ClearProfileResponse
         */
        ClearProfileResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.ClearProfileResponse)
                return object;
            let message = new $root.profile.ClearProfileResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.ClearProfileResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".profile.ClearProfileResponse.profile: object expected");
                message.profile = $root.profile.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClearProfileResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.ClearProfileResponse
         * @static
         * @param {profile.ClearProfileResponse} message ClearProfileResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearProfileResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.profile = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.profile.Profile.toObject(message.profile, options);
            return object;
        };

        /**
         * Converts this ClearProfileResponse to JSON.
         * @function toJSON
         * @memberof profile.ClearProfileResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearProfileResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearProfileResponse;
    })();

    profile.GetProfilePhotoRequest = (function() {

        /**
         * Properties of a GetProfilePhotoRequest.
         * @memberof profile
         * @interface IGetProfilePhotoRequest
         */

        /**
         * Constructs a new GetProfilePhotoRequest.
         * @memberof profile
         * @classdesc Represents a GetProfilePhotoRequest.
         * @implements IGetProfilePhotoRequest
         * @constructor
         * @param {profile.IGetProfilePhotoRequest=} [properties] Properties to set
         */
        function GetProfilePhotoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a GetProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.GetProfilePhotoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.GetProfilePhotoRequest} GetProfilePhotoRequest
         */
        GetProfilePhotoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.GetProfilePhotoRequest)
                return object;
            return new $root.profile.GetProfilePhotoRequest();
        };

        /**
         * Creates a plain object from a GetProfilePhotoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.GetProfilePhotoRequest
         * @static
         * @param {profile.GetProfilePhotoRequest} message GetProfilePhotoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfilePhotoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetProfilePhotoRequest to JSON.
         * @function toJSON
         * @memberof profile.GetProfilePhotoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfilePhotoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfilePhotoRequest;
    })();

    profile.GetProfilePhotoResponse = (function() {

        /**
         * Properties of a GetProfilePhotoResponse.
         * @memberof profile
         * @interface IGetProfilePhotoResponse
         * @property {common.IBaseResponse|null} [baseResp] GetProfilePhotoResponse baseResp
         * @property {string|null} [url] GetProfilePhotoResponse url
         */

        /**
         * Constructs a new GetProfilePhotoResponse.
         * @memberof profile
         * @classdesc Represents a GetProfilePhotoResponse.
         * @implements IGetProfilePhotoResponse
         * @constructor
         * @param {profile.IGetProfilePhotoResponse=} [properties] Properties to set
         */
        function GetProfilePhotoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetProfilePhotoResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.GetProfilePhotoResponse
         * @instance
         */
        GetProfilePhotoResponse.prototype.baseResp = null;

        /**
         * GetProfilePhotoResponse url.
         * @member {string} url
         * @memberof profile.GetProfilePhotoResponse
         * @instance
         */
        GetProfilePhotoResponse.prototype.url = "";

        /**
         * Creates a GetProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.GetProfilePhotoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.GetProfilePhotoResponse} GetProfilePhotoResponse
         */
        GetProfilePhotoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.GetProfilePhotoResponse)
                return object;
            let message = new $root.profile.GetProfilePhotoResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.GetProfilePhotoResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a GetProfilePhotoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.GetProfilePhotoResponse
         * @static
         * @param {profile.GetProfilePhotoResponse} message GetProfilePhotoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetProfilePhotoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.url = "";
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this GetProfilePhotoResponse to JSON.
         * @function toJSON
         * @memberof profile.GetProfilePhotoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetProfilePhotoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetProfilePhotoResponse;
    })();

    profile.CreateProfilePhotoRequest = (function() {

        /**
         * Properties of a CreateProfilePhotoRequest.
         * @memberof profile
         * @interface ICreateProfilePhotoRequest
         */

        /**
         * Constructs a new CreateProfilePhotoRequest.
         * @memberof profile
         * @classdesc Represents a CreateProfilePhotoRequest.
         * @implements ICreateProfilePhotoRequest
         * @constructor
         * @param {profile.ICreateProfilePhotoRequest=} [properties] Properties to set
         */
        function CreateProfilePhotoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a CreateProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.CreateProfilePhotoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.CreateProfilePhotoRequest} CreateProfilePhotoRequest
         */
        CreateProfilePhotoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.CreateProfilePhotoRequest)
                return object;
            return new $root.profile.CreateProfilePhotoRequest();
        };

        /**
         * Creates a plain object from a CreateProfilePhotoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.CreateProfilePhotoRequest
         * @static
         * @param {profile.CreateProfilePhotoRequest} message CreateProfilePhotoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateProfilePhotoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CreateProfilePhotoRequest to JSON.
         * @function toJSON
         * @memberof profile.CreateProfilePhotoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateProfilePhotoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateProfilePhotoRequest;
    })();

    profile.CreateProfilePhotoResponse = (function() {

        /**
         * Properties of a CreateProfilePhotoResponse.
         * @memberof profile
         * @interface ICreateProfilePhotoResponse
         * @property {common.IBaseResponse|null} [baseResp] CreateProfilePhotoResponse baseResp
         * @property {string|null} [uploadUrl] CreateProfilePhotoResponse uploadUrl
         */

        /**
         * Constructs a new CreateProfilePhotoResponse.
         * @memberof profile
         * @classdesc Represents a CreateProfilePhotoResponse.
         * @implements ICreateProfilePhotoResponse
         * @constructor
         * @param {profile.ICreateProfilePhotoResponse=} [properties] Properties to set
         */
        function CreateProfilePhotoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateProfilePhotoResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.CreateProfilePhotoResponse
         * @instance
         */
        CreateProfilePhotoResponse.prototype.baseResp = null;

        /**
         * CreateProfilePhotoResponse uploadUrl.
         * @member {string} uploadUrl
         * @memberof profile.CreateProfilePhotoResponse
         * @instance
         */
        CreateProfilePhotoResponse.prototype.uploadUrl = "";

        /**
         * Creates a CreateProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.CreateProfilePhotoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.CreateProfilePhotoResponse} CreateProfilePhotoResponse
         */
        CreateProfilePhotoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.CreateProfilePhotoResponse)
                return object;
            let message = new $root.profile.CreateProfilePhotoResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.CreateProfilePhotoResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.uploadUrl != null)
                message.uploadUrl = String(object.uploadUrl);
            return message;
        };

        /**
         * Creates a plain object from a CreateProfilePhotoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.CreateProfilePhotoResponse
         * @static
         * @param {profile.CreateProfilePhotoResponse} message CreateProfilePhotoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateProfilePhotoResponse.toObject = function toObject(message, options) {
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
         * Converts this CreateProfilePhotoResponse to JSON.
         * @function toJSON
         * @memberof profile.CreateProfilePhotoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateProfilePhotoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateProfilePhotoResponse;
    })();

    profile.CompleteProfilePhotoRequest = (function() {

        /**
         * Properties of a CompleteProfilePhotoRequest.
         * @memberof profile
         * @interface ICompleteProfilePhotoRequest
         */

        /**
         * Constructs a new CompleteProfilePhotoRequest.
         * @memberof profile
         * @classdesc Represents a CompleteProfilePhotoRequest.
         * @implements ICompleteProfilePhotoRequest
         * @constructor
         * @param {profile.ICompleteProfilePhotoRequest=} [properties] Properties to set
         */
        function CompleteProfilePhotoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a CompleteProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.CompleteProfilePhotoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.CompleteProfilePhotoRequest} CompleteProfilePhotoRequest
         */
        CompleteProfilePhotoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.CompleteProfilePhotoRequest)
                return object;
            return new $root.profile.CompleteProfilePhotoRequest();
        };

        /**
         * Creates a plain object from a CompleteProfilePhotoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.CompleteProfilePhotoRequest
         * @static
         * @param {profile.CompleteProfilePhotoRequest} message CompleteProfilePhotoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteProfilePhotoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CompleteProfilePhotoRequest to JSON.
         * @function toJSON
         * @memberof profile.CompleteProfilePhotoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteProfilePhotoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompleteProfilePhotoRequest;
    })();

    profile.CompleteProfilePhotoResponse = (function() {

        /**
         * Properties of a CompleteProfilePhotoResponse.
         * @memberof profile
         * @interface ICompleteProfilePhotoResponse
         * @property {common.IBaseResponse|null} [baseResp] CompleteProfilePhotoResponse baseResp
         * @property {profile.IIdentity|null} [identity] CompleteProfilePhotoResponse identity
         */

        /**
         * Constructs a new CompleteProfilePhotoResponse.
         * @memberof profile
         * @classdesc Represents a CompleteProfilePhotoResponse.
         * @implements ICompleteProfilePhotoResponse
         * @constructor
         * @param {profile.ICompleteProfilePhotoResponse=} [properties] Properties to set
         */
        function CompleteProfilePhotoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompleteProfilePhotoResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.CompleteProfilePhotoResponse
         * @instance
         */
        CompleteProfilePhotoResponse.prototype.baseResp = null;

        /**
         * CompleteProfilePhotoResponse identity.
         * @member {profile.IIdentity|null|undefined} identity
         * @memberof profile.CompleteProfilePhotoResponse
         * @instance
         */
        CompleteProfilePhotoResponse.prototype.identity = null;

        /**
         * Creates a CompleteProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.CompleteProfilePhotoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.CompleteProfilePhotoResponse} CompleteProfilePhotoResponse
         */
        CompleteProfilePhotoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.CompleteProfilePhotoResponse)
                return object;
            let message = new $root.profile.CompleteProfilePhotoResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.CompleteProfilePhotoResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.identity != null) {
                if (typeof object.identity !== "object")
                    throw TypeError(".profile.CompleteProfilePhotoResponse.identity: object expected");
                message.identity = $root.profile.Identity.fromObject(object.identity);
            }
            return message;
        };

        /**
         * Creates a plain object from a CompleteProfilePhotoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.CompleteProfilePhotoResponse
         * @static
         * @param {profile.CompleteProfilePhotoResponse} message CompleteProfilePhotoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteProfilePhotoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.identity = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.identity != null && message.hasOwnProperty("identity"))
                object.identity = $root.profile.Identity.toObject(message.identity, options);
            return object;
        };

        /**
         * Converts this CompleteProfilePhotoResponse to JSON.
         * @function toJSON
         * @memberof profile.CompleteProfilePhotoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteProfilePhotoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CompleteProfilePhotoResponse;
    })();

    profile.ClearProfilePhotoRequest = (function() {

        /**
         * Properties of a ClearProfilePhotoRequest.
         * @memberof profile
         * @interface IClearProfilePhotoRequest
         */

        /**
         * Constructs a new ClearProfilePhotoRequest.
         * @memberof profile
         * @classdesc Represents a ClearProfilePhotoRequest.
         * @implements IClearProfilePhotoRequest
         * @constructor
         * @param {profile.IClearProfilePhotoRequest=} [properties] Properties to set
         */
        function ClearProfilePhotoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a ClearProfilePhotoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.ClearProfilePhotoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.ClearProfilePhotoRequest} ClearProfilePhotoRequest
         */
        ClearProfilePhotoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.ClearProfilePhotoRequest)
                return object;
            return new $root.profile.ClearProfilePhotoRequest();
        };

        /**
         * Creates a plain object from a ClearProfilePhotoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.ClearProfilePhotoRequest
         * @static
         * @param {profile.ClearProfilePhotoRequest} message ClearProfilePhotoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearProfilePhotoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ClearProfilePhotoRequest to JSON.
         * @function toJSON
         * @memberof profile.ClearProfilePhotoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearProfilePhotoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearProfilePhotoRequest;
    })();

    profile.ClearProfilePhotoResponse = (function() {

        /**
         * Properties of a ClearProfilePhotoResponse.
         * @memberof profile
         * @interface IClearProfilePhotoResponse
         * @property {common.IBaseResponse|null} [baseResp] ClearProfilePhotoResponse baseResp
         */

        /**
         * Constructs a new ClearProfilePhotoResponse.
         * @memberof profile
         * @classdesc Represents a ClearProfilePhotoResponse.
         * @implements IClearProfilePhotoResponse
         * @constructor
         * @param {profile.IClearProfilePhotoResponse=} [properties] Properties to set
         */
        function ClearProfilePhotoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClearProfilePhotoResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof profile.ClearProfilePhotoResponse
         * @instance
         */
        ClearProfilePhotoResponse.prototype.baseResp = null;

        /**
         * Creates a ClearProfilePhotoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof profile.ClearProfilePhotoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {profile.ClearProfilePhotoResponse} ClearProfilePhotoResponse
         */
        ClearProfilePhotoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.profile.ClearProfilePhotoResponse)
                return object;
            let message = new $root.profile.ClearProfilePhotoResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".profile.ClearProfilePhotoResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClearProfilePhotoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof profile.ClearProfilePhotoResponse
         * @static
         * @param {profile.ClearProfilePhotoResponse} message ClearProfilePhotoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearProfilePhotoResponse.toObject = function toObject(message, options) {
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
         * Converts this ClearProfilePhotoResponse to JSON.
         * @function toJSON
         * @memberof profile.ClearProfilePhotoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearProfilePhotoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearProfilePhotoResponse;
    })();

    return profile;
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