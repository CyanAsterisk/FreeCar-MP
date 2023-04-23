import * as $protobuf from "protobufjs";
/** Namespace chat. */
export namespace chat {

    /** Properties of a ChatRequest. */
    interface IChatRequest {

        /** ChatRequest content */
        content?: (string|null);
    }

    /** Represents a ChatRequest. */
    class ChatRequest implements IChatRequest {

        /**
         * Constructs a new ChatRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChatRequest);

        /** ChatRequest content. */
        public content: string;

        /**
         * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatRequest
         */
        public static fromObject(object: { [k: string]: any }): chat.ChatRequest;

        /**
         * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
         * @param message ChatRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatResponse. */
    interface IChatResponse {

        /** ChatResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** ChatResponse content */
        content?: (string|null);
    }

    /** Represents a ChatResponse. */
    class ChatResponse implements IChatResponse {

        /**
         * Constructs a new ChatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChatResponse);

        /** ChatResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** ChatResponse content. */
        public content: string;

        /**
         * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatResponse
         */
        public static fromObject(object: { [k: string]: any }): chat.ChatResponse;

        /**
         * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
         * @param message ChatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ChatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatResponse to JSON.
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
