import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const chat = $root.chat = (() => {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    const chat = {};

    chat.ChatRequest = (function() {

        /**
         * Properties of a ChatRequest.
         * @memberof chat
         * @interface IChatRequest
         * @property {string|null} [content] ChatRequest content
         */

        /**
         * Constructs a new ChatRequest.
         * @memberof chat
         * @classdesc Represents a ChatRequest.
         * @implements IChatRequest
         * @constructor
         * @param {chat.IChatRequest=} [properties] Properties to set
         */
        function ChatRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatRequest content.
         * @member {string} content
         * @memberof chat.ChatRequest
         * @instance
         */
        ChatRequest.prototype.content = "";

        /**
         * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ChatRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ChatRequest} ChatRequest
         */
        ChatRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ChatRequest)
                return object;
            let message = new $root.chat.ChatRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ChatRequest
         * @static
         * @param {chat.ChatRequest} message ChatRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatRequest to JSON.
         * @function toJSON
         * @memberof chat.ChatRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatRequest;
    })();

    chat.ChatResponse = (function() {

        /**
         * Properties of a ChatResponse.
         * @memberof chat
         * @interface IChatResponse
         * @property {common.IBaseResponse|null} [baseResp] ChatResponse baseResp
         * @property {string|null} [content] ChatResponse content
         */

        /**
         * Constructs a new ChatResponse.
         * @memberof chat
         * @classdesc Represents a ChatResponse.
         * @implements IChatResponse
         * @constructor
         * @param {chat.IChatResponse=} [properties] Properties to set
         */
        function ChatResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof chat.ChatResponse
         * @instance
         */
        ChatResponse.prototype.baseResp = null;

        /**
         * ChatResponse content.
         * @member {string} content
         * @memberof chat.ChatResponse
         * @instance
         */
        ChatResponse.prototype.content = "";

        /**
         * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.ChatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.ChatResponse} ChatResponse
         */
        ChatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.ChatResponse)
                return object;
            let message = new $root.chat.ChatResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".chat.ChatResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.ChatResponse
         * @static
         * @param {chat.ChatResponse} message ChatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.content = "";
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this ChatResponse to JSON.
         * @function toJSON
         * @memberof chat.ChatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatResponse;
    })();

    return chat;
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