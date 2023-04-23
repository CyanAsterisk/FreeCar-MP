import * as $protobuf from "protobufjs";
/** Namespace trip. */
export namespace trip {

    /** Properties of a Location. */
    interface ILocation {

        /** Location latitude */
        latitude?: (number|null);

        /** Location longitude */
        longitude?: (number|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ILocation);

        /** Location latitude. */
        public latitude: number;

        /** Location longitude. */
        public longitude: number;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): trip.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LocationStatus. */
    interface ILocationStatus {

        /** LocationStatus location */
        location?: (trip.ILocation|null);

        /** LocationStatus feeCent */
        feeCent?: (number|null);

        /** LocationStatus kmDriven */
        kmDriven?: (number|null);

        /** LocationStatus poiName */
        poiName?: (string|null);

        /** LocationStatus timestampSec */
        timestampSec?: (number|null);
    }

    /** Represents a LocationStatus. */
    class LocationStatus implements ILocationStatus {

        /**
         * Constructs a new LocationStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ILocationStatus);

        /** LocationStatus location. */
        public location?: (trip.ILocation|null);

        /** LocationStatus feeCent. */
        public feeCent: number;

        /** LocationStatus kmDriven. */
        public kmDriven: number;

        /** LocationStatus poiName. */
        public poiName: string;

        /** LocationStatus timestampSec. */
        public timestampSec: number;

        /**
         * Creates a LocationStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocationStatus
         */
        public static fromObject(object: { [k: string]: any }): trip.LocationStatus;

        /**
         * Creates a plain object from a LocationStatus message. Also converts values to other types if specified.
         * @param message LocationStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.LocationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocationStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TripStatus enum. */
    enum TripStatus {
        TS_NOT_SPECIFIED = 0,
        IN_PROGRESS = 1,
        FINISHED = 2
    }

    /** Properties of a TripEntity. */
    interface ITripEntity {

        /** TripEntity id */
        id?: (string|null);

        /** TripEntity trip */
        trip?: (trip.ITrip|null);
    }

    /** Represents a TripEntity. */
    class TripEntity implements ITripEntity {

        /**
         * Constructs a new TripEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ITripEntity);

        /** TripEntity id. */
        public id: string;

        /** TripEntity trip. */
        public trip?: (trip.ITrip|null);

        /**
         * Creates a TripEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripEntity
         */
        public static fromObject(object: { [k: string]: any }): trip.TripEntity;

        /**
         * Creates a plain object from a TripEntity message. Also converts values to other types if specified.
         * @param message TripEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.TripEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Trip. */
    interface ITrip {

        /** Trip accountId */
        accountId?: (number|null);

        /** Trip carId */
        carId?: (string|null);

        /** Trip start */
        start?: (trip.ILocationStatus|null);

        /** Trip current */
        current?: (trip.ILocationStatus|null);

        /** Trip end */
        end?: (trip.ILocationStatus|null);

        /** Trip status */
        status?: (trip.TripStatus|null);

        /** Trip identityId */
        identityId?: (string|null);
    }

    /** Represents a Trip. */
    class Trip implements ITrip {

        /**
         * Constructs a new Trip.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ITrip);

        /** Trip accountId. */
        public accountId: number;

        /** Trip carId. */
        public carId: string;

        /** Trip start. */
        public start?: (trip.ILocationStatus|null);

        /** Trip current. */
        public current?: (trip.ILocationStatus|null);

        /** Trip end. */
        public end?: (trip.ILocationStatus|null);

        /** Trip status. */
        public status: trip.TripStatus;

        /** Trip identityId. */
        public identityId: string;

        /**
         * Creates a Trip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trip
         */
        public static fromObject(object: { [k: string]: any }): trip.Trip;

        /**
         * Creates a plain object from a Trip message. Also converts values to other types if specified.
         * @param message Trip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.Trip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTripRequest. */
    interface ICreateTripRequest {

        /** CreateTripRequest start */
        start?: (trip.ILocation|null);

        /** CreateTripRequest carId */
        carId?: (string|null);

        /** CreateTripRequest avatarUrl */
        avatarUrl?: (string|null);
    }

    /** Represents a CreateTripRequest. */
    class CreateTripRequest implements ICreateTripRequest {

        /**
         * Constructs a new CreateTripRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ICreateTripRequest);

        /** CreateTripRequest start. */
        public start?: (trip.ILocation|null);

        /** CreateTripRequest carId. */
        public carId: string;

        /** CreateTripRequest avatarUrl. */
        public avatarUrl: string;

        /**
         * Creates a CreateTripRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTripRequest
         */
        public static fromObject(object: { [k: string]: any }): trip.CreateTripRequest;

        /**
         * Creates a plain object from a CreateTripRequest message. Also converts values to other types if specified.
         * @param message CreateTripRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.CreateTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTripRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTripResponse. */
    interface ICreateTripResponse {

        /** CreateTripResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** CreateTripResponse tripEntity */
        tripEntity?: (trip.ITripEntity|null);
    }

    /** Represents a CreateTripResponse. */
    class CreateTripResponse implements ICreateTripResponse {

        /**
         * Constructs a new CreateTripResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.ICreateTripResponse);

        /** CreateTripResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** CreateTripResponse tripEntity. */
        public tripEntity?: (trip.ITripEntity|null);

        /**
         * Creates a CreateTripResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTripResponse
         */
        public static fromObject(object: { [k: string]: any }): trip.CreateTripResponse;

        /**
         * Creates a plain object from a CreateTripResponse message. Also converts values to other types if specified.
         * @param message CreateTripResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.CreateTripResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTripResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripRequest. */
    interface IGetTripRequest {

        /** GetTripRequest id */
        id?: (string|null);
    }

    /** Represents a GetTripRequest. */
    class GetTripRequest implements IGetTripRequest {

        /**
         * Constructs a new GetTripRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IGetTripRequest);

        /** GetTripRequest id. */
        public id: string;

        /**
         * Creates a GetTripRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripRequest
         */
        public static fromObject(object: { [k: string]: any }): trip.GetTripRequest;

        /**
         * Creates a plain object from a GetTripRequest message. Also converts values to other types if specified.
         * @param message GetTripRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.GetTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripResponse. */
    interface IGetTripResponse {

        /** GetTripResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetTripResponse trip */
        trip?: (trip.ITrip|null);
    }

    /** Represents a GetTripResponse. */
    class GetTripResponse implements IGetTripResponse {

        /**
         * Constructs a new GetTripResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IGetTripResponse);

        /** GetTripResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetTripResponse trip. */
        public trip?: (trip.ITrip|null);

        /**
         * Creates a GetTripResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripResponse
         */
        public static fromObject(object: { [k: string]: any }): trip.GetTripResponse;

        /**
         * Creates a plain object from a GetTripResponse message. Also converts values to other types if specified.
         * @param message GetTripResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.GetTripResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripsRequest. */
    interface IGetTripsRequest {

        /** GetTripsRequest status */
        status?: (trip.TripStatus|null);
    }

    /** Represents a GetTripsRequest. */
    class GetTripsRequest implements IGetTripsRequest {

        /**
         * Constructs a new GetTripsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IGetTripsRequest);

        /** GetTripsRequest status. */
        public status: trip.TripStatus;

        /**
         * Creates a GetTripsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripsRequest
         */
        public static fromObject(object: { [k: string]: any }): trip.GetTripsRequest;

        /**
         * Creates a plain object from a GetTripsRequest message. Also converts values to other types if specified.
         * @param message GetTripsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.GetTripsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripsResponse. */
    interface IGetTripsResponse {

        /** GetTripsResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** GetTripsResponse trips */
        trips?: (trip.ITripEntity[]|null);
    }

    /** Represents a GetTripsResponse. */
    class GetTripsResponse implements IGetTripsResponse {

        /**
         * Constructs a new GetTripsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IGetTripsResponse);

        /** GetTripsResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** GetTripsResponse trips. */
        public trips: trip.ITripEntity[];

        /**
         * Creates a GetTripsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripsResponse
         */
        public static fromObject(object: { [k: string]: any }): trip.GetTripsResponse;

        /**
         * Creates a plain object from a GetTripsResponse message. Also converts values to other types if specified.
         * @param message GetTripsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.GetTripsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateTripRequest. */
    interface IUpdateTripRequest {

        /** UpdateTripRequest id */
        id?: (string|null);

        /** UpdateTripRequest current */
        current?: (trip.ILocation|null);

        /** UpdateTripRequest endTrip */
        endTrip?: (boolean|null);
    }

    /** Represents an UpdateTripRequest. */
    class UpdateTripRequest implements IUpdateTripRequest {

        /**
         * Constructs a new UpdateTripRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IUpdateTripRequest);

        /** UpdateTripRequest id. */
        public id: string;

        /** UpdateTripRequest current. */
        public current?: (trip.ILocation|null);

        /** UpdateTripRequest endTrip. */
        public endTrip: boolean;

        /**
         * Creates an UpdateTripRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateTripRequest
         */
        public static fromObject(object: { [k: string]: any }): trip.UpdateTripRequest;

        /**
         * Creates a plain object from an UpdateTripRequest message. Also converts values to other types if specified.
         * @param message UpdateTripRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.UpdateTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateTripRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateTripResponse. */
    interface IUpdateTripResponse {

        /** UpdateTripResponse baseResp */
        baseResp?: (common.IBaseResponse|null);

        /** UpdateTripResponse trip */
        trip?: (trip.ITrip|null);
    }

    /** Represents an UpdateTripResponse. */
    class UpdateTripResponse implements IUpdateTripResponse {

        /**
         * Constructs a new UpdateTripResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip.IUpdateTripResponse);

        /** UpdateTripResponse baseResp. */
        public baseResp?: (common.IBaseResponse|null);

        /** UpdateTripResponse trip. */
        public trip?: (trip.ITrip|null);

        /**
         * Creates an UpdateTripResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateTripResponse
         */
        public static fromObject(object: { [k: string]: any }): trip.UpdateTripResponse;

        /**
         * Creates a plain object from an UpdateTripResponse message. Also converts values to other types if specified.
         * @param message UpdateTripResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip.UpdateTripResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateTripResponse to JSON.
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
