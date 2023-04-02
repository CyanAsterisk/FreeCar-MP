import * as $protobuf from "protobufjs";
/** Namespace car. */
export namespace car {

    /** Properties of a CarEntity. */
    interface ICarEntity {

        /** CarEntity id */
        id?: (string|null);

        /** CarEntity car */
        car?: (car.ICar|null);
    }

    /** Represents a CarEntity. */
    class CarEntity implements ICarEntity {

        /**
         * Constructs a new CarEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.ICarEntity);

        /** CarEntity id. */
        public id: string;

        /** CarEntity car. */
        public car?: (car.ICar|null);

        /**
         * Creates a CarEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CarEntity
         */
        public static fromObject(object: { [k: string]: any }): car.CarEntity;

        /**
         * Creates a plain object from a CarEntity message. Also converts values to other types if specified.
         * @param message CarEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.CarEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CarEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** CarStatus enum. */
    enum CarStatus {
        CS_NOT_SPECIFIED = 0,
        LOCKED = 1,
        UNLOCKING = 2,
        UNLOCKED = 3,
        LOCKING = 4
    }

    /** Properties of a Driver. */
    interface IDriver {

        /** Driver id */
        id?: (number|null);

        /** Driver avatarUrl */
        avatarUrl?: (string|null);
    }

    /** Represents a Driver. */
    class Driver implements IDriver {

        /**
         * Constructs a new Driver.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IDriver);

        /** Driver id. */
        public id: number;

        /** Driver avatarUrl. */
        public avatarUrl: string;

        /**
         * Creates a Driver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Driver
         */
        public static fromObject(object: { [k: string]: any }): car.Driver;

        /**
         * Creates a plain object from a Driver message. Also converts values to other types if specified.
         * @param message Driver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.Driver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Driver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position latitude */
        latitude?: (number|null);

        /** Position longitude */
        longitude?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IPosition);

        /** Position latitude. */
        public latitude: number;

        /** Position longitude. */
        public longitude: number;

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): car.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Car. */
    interface ICar {

        /** Car status */
        status?: (car.CarStatus|null);

        /** Car driver */
        driver?: (car.IDriver|null);

        /** Car position */
        position?: (car.IPosition|null);

        /** Car tripId */
        tripId?: (string|null);

        /** Car power */
        power?: (number|null);

        /** Car plateNum */
        plateNum?: (string|null);
    }

    /** Represents a Car. */
    class Car implements ICar {

        /**
         * Constructs a new Car.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.ICar);

        /** Car status. */
        public status: car.CarStatus;

        /** Car driver. */
        public driver?: (car.IDriver|null);

        /** Car position. */
        public position?: (car.IPosition|null);

        /** Car tripId. */
        public tripId: string;

        /** Car power. */
        public power: number;

        /** Car plateNum. */
        public plateNum: string;

        /**
         * Creates a Car message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Car
         */
        public static fromObject(object: { [k: string]: any }): car.Car;

        /**
         * Creates a plain object from a Car message. Also converts values to other types if specified.
         * @param message Car
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.Car, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Car to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCarRequest. */
    interface IGetCarRequest {

        /** GetCarRequest id */
        id?: (string|null);
    }

    /** Represents a GetCarRequest. */
    class GetCarRequest implements IGetCarRequest {

        /**
         * Constructs a new GetCarRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IGetCarRequest);

        /** GetCarRequest id. */
        public id: string;

        /**
         * Creates a GetCarRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCarRequest
         */
        public static fromObject(object: { [k: string]: any }): car.GetCarRequest;

        /**
         * Creates a plain object from a GetCarRequest message. Also converts values to other types if specified.
         * @param message GetCarRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.GetCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCarRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCarResponse. */
    interface IGetCarResponse {

        /** GetCarResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetCarResponse car */
        car?: (car.ICar|null);
    }

    /** Represents a GetCarResponse. */
    class GetCarResponse implements IGetCarResponse {

        /**
         * Constructs a new GetCarResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IGetCarResponse);

        /** GetCarResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetCarResponse car. */
        public car?: (car.ICar|null);

        /**
         * Creates a GetCarResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCarResponse
         */
        public static fromObject(object: { [k: string]: any }): car.GetCarResponse;

        /**
         * Creates a plain object from a GetCarResponse message. Also converts values to other types if specified.
         * @param message GetCarResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.GetCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCarResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCarsRequest. */
    interface IGetCarsRequest {
    }

    /** Represents a GetCarsRequest. */
    class GetCarsRequest implements IGetCarsRequest {

        /**
         * Constructs a new GetCarsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IGetCarsRequest);

        /**
         * Creates a GetCarsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCarsRequest
         */
        public static fromObject(object: { [k: string]: any }): car.GetCarsRequest;

        /**
         * Creates a plain object from a GetCarsRequest message. Also converts values to other types if specified.
         * @param message GetCarsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.GetCarsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCarsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCarsResponse. */
    interface IGetCarsResponse {

        /** GetCarsResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetCarsResponse cars */
        cars?: (car.ICarEntity[]|null);
    }

    /** Represents a GetCarsResponse. */
    class GetCarsResponse implements IGetCarsResponse {

        /**
         * Constructs a new GetCarsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: car.IGetCarsResponse);

        /** GetCarsResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetCarsResponse cars. */
        public cars: car.ICarEntity[];

        /**
         * Creates a GetCarsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCarsResponse
         */
        public static fromObject(object: { [k: string]: any }): car.GetCarsResponse;

        /**
         * Creates a plain object from a GetCarsResponse message. Also converts values to other types if specified.
         * @param message GetCarsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: car.GetCarsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCarsResponse to JSON.
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
