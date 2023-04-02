import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const trip = $root.trip = (() => {

    /**
     * Namespace trip.
     * @exports trip
     * @namespace
     */
    const trip = {};

    trip.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof trip
         * @interface ILocation
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         */

        /**
         * Constructs a new Location.
         * @memberof trip
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {trip.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof trip.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof trip.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.Location)
                return object;
            let message = new $root.trip.Location();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.Location
         * @static
         * @param {trip.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof trip.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    trip.LocationStatus = (function() {

        /**
         * Properties of a LocationStatus.
         * @memberof trip
         * @interface ILocationStatus
         * @property {trip.ILocation|null} [location] LocationStatus location
         * @property {number|null} [feeCent] LocationStatus feeCent
         * @property {number|null} [kmDriven] LocationStatus kmDriven
         * @property {string|null} [poiName] LocationStatus poiName
         * @property {number|null} [timestampSec] LocationStatus timestampSec
         */

        /**
         * Constructs a new LocationStatus.
         * @memberof trip
         * @classdesc Represents a LocationStatus.
         * @implements ILocationStatus
         * @constructor
         * @param {trip.ILocationStatus=} [properties] Properties to set
         */
        function LocationStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocationStatus location.
         * @member {trip.ILocation|null|undefined} location
         * @memberof trip.LocationStatus
         * @instance
         */
        LocationStatus.prototype.location = null;

        /**
         * LocationStatus feeCent.
         * @member {number} feeCent
         * @memberof trip.LocationStatus
         * @instance
         */
        LocationStatus.prototype.feeCent = 0;

        /**
         * LocationStatus kmDriven.
         * @member {number} kmDriven
         * @memberof trip.LocationStatus
         * @instance
         */
        LocationStatus.prototype.kmDriven = 0;

        /**
         * LocationStatus poiName.
         * @member {string} poiName
         * @memberof trip.LocationStatus
         * @instance
         */
        LocationStatus.prototype.poiName = "";

        /**
         * LocationStatus timestampSec.
         * @member {number} timestampSec
         * @memberof trip.LocationStatus
         * @instance
         */
        LocationStatus.prototype.timestampSec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a LocationStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.LocationStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.LocationStatus} LocationStatus
         */
        LocationStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.LocationStatus)
                return object;
            let message = new $root.trip.LocationStatus();
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".trip.LocationStatus.location: object expected");
                message.location = $root.trip.Location.fromObject(object.location);
            }
            if (object.feeCent != null)
                message.feeCent = object.feeCent | 0;
            if (object.kmDriven != null)
                message.kmDriven = Number(object.kmDriven);
            if (object.poiName != null)
                message.poiName = String(object.poiName);
            if (object.timestampSec != null)
                if ($util.Long)
                    (message.timestampSec = $util.Long.fromValue(object.timestampSec)).unsigned = false;
                else if (typeof object.timestampSec === "string")
                    message.timestampSec = parseInt(object.timestampSec, 10);
                else if (typeof object.timestampSec === "number")
                    message.timestampSec = object.timestampSec;
                else if (typeof object.timestampSec === "object")
                    message.timestampSec = new $util.LongBits(object.timestampSec.low >>> 0, object.timestampSec.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LocationStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.LocationStatus
         * @static
         * @param {trip.LocationStatus} message LocationStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocationStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.location = null;
                object.feeCent = 0;
                object.kmDriven = 0;
                object.poiName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestampSec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestampSec = options.longs === String ? "0" : 0;
            }
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.trip.Location.toObject(message.location, options);
            if (message.feeCent != null && message.hasOwnProperty("feeCent"))
                object.feeCent = message.feeCent;
            if (message.kmDriven != null && message.hasOwnProperty("kmDriven"))
                object.kmDriven = options.json && !isFinite(message.kmDriven) ? String(message.kmDriven) : message.kmDriven;
            if (message.poiName != null && message.hasOwnProperty("poiName"))
                object.poiName = message.poiName;
            if (message.timestampSec != null && message.hasOwnProperty("timestampSec"))
                if (typeof message.timestampSec === "number")
                    object.timestampSec = options.longs === String ? String(message.timestampSec) : message.timestampSec;
                else
                    object.timestampSec = options.longs === String ? $util.Long.prototype.toString.call(message.timestampSec) : options.longs === Number ? new $util.LongBits(message.timestampSec.low >>> 0, message.timestampSec.high >>> 0).toNumber() : message.timestampSec;
            return object;
        };

        /**
         * Converts this LocationStatus to JSON.
         * @function toJSON
         * @memberof trip.LocationStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocationStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LocationStatus;
    })();

    /**
     * TripStatus enum.
     * @name trip.TripStatus
     * @enum {number}
     * @property {number} TS_NOT_SPECIFIED=0 TS_NOT_SPECIFIED value
     * @property {number} IN_PROGRESS=1 IN_PROGRESS value
     * @property {number} FINISHED=2 FINISHED value
     */
    trip.TripStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TS_NOT_SPECIFIED"] = 0;
        values[valuesById[1] = "IN_PROGRESS"] = 1;
        values[valuesById[2] = "FINISHED"] = 2;
        return values;
    })();

    trip.TripEntity = (function() {

        /**
         * Properties of a TripEntity.
         * @memberof trip
         * @interface ITripEntity
         * @property {string|null} [id] TripEntity id
         * @property {trip.ITrip|null} [trip] TripEntity trip
         */

        /**
         * Constructs a new TripEntity.
         * @memberof trip
         * @classdesc Represents a TripEntity.
         * @implements ITripEntity
         * @constructor
         * @param {trip.ITripEntity=} [properties] Properties to set
         */
        function TripEntity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TripEntity id.
         * @member {string} id
         * @memberof trip.TripEntity
         * @instance
         */
        TripEntity.prototype.id = "";

        /**
         * TripEntity trip.
         * @member {trip.ITrip|null|undefined} trip
         * @memberof trip.TripEntity
         * @instance
         */
        TripEntity.prototype.trip = null;

        /**
         * Creates a TripEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.TripEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.TripEntity} TripEntity
         */
        TripEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.TripEntity)
                return object;
            let message = new $root.trip.TripEntity();
            if (object.id != null)
                message.id = String(object.id);
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".trip.TripEntity.trip: object expected");
                message.trip = $root.trip.Trip.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from a TripEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.TripEntity
         * @static
         * @param {trip.TripEntity} message TripEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TripEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.trip = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.trip.Trip.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this TripEntity to JSON.
         * @function toJSON
         * @memberof trip.TripEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TripEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TripEntity;
    })();

    trip.Trip = (function() {

        /**
         * Properties of a Trip.
         * @memberof trip
         * @interface ITrip
         * @property {number|null} [accountId] Trip accountId
         * @property {string|null} [carId] Trip carId
         * @property {trip.ILocationStatus|null} [start] Trip start
         * @property {trip.ILocationStatus|null} [current] Trip current
         * @property {trip.ILocationStatus|null} [end] Trip end
         * @property {trip.TripStatus|null} [status] Trip status
         * @property {string|null} [identityId] Trip identityId
         */

        /**
         * Constructs a new Trip.
         * @memberof trip
         * @classdesc Represents a Trip.
         * @implements ITrip
         * @constructor
         * @param {trip.ITrip=} [properties] Properties to set
         */
        function Trip(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trip accountId.
         * @member {number} accountId
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Trip carId.
         * @member {string} carId
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.carId = "";

        /**
         * Trip start.
         * @member {trip.ILocationStatus|null|undefined} start
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.start = null;

        /**
         * Trip current.
         * @member {trip.ILocationStatus|null|undefined} current
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.current = null;

        /**
         * Trip end.
         * @member {trip.ILocationStatus|null|undefined} end
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.end = null;

        /**
         * Trip status.
         * @member {trip.TripStatus} status
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.status = 0;

        /**
         * Trip identityId.
         * @member {string} identityId
         * @memberof trip.Trip
         * @instance
         */
        Trip.prototype.identityId = "";

        /**
         * Creates a Trip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.Trip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.Trip} Trip
         */
        Trip.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.Trip)
                return object;
            let message = new $root.trip.Trip();
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            if (object.carId != null)
                message.carId = String(object.carId);
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".trip.Trip.start: object expected");
                message.start = $root.trip.LocationStatus.fromObject(object.start);
            }
            if (object.current != null) {
                if (typeof object.current !== "object")
                    throw TypeError(".trip.Trip.current: object expected");
                message.current = $root.trip.LocationStatus.fromObject(object.current);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".trip.Trip.end: object expected");
                message.end = $root.trip.LocationStatus.fromObject(object.end);
            }
            switch (object.status) {
            case "TS_NOT_SPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "IN_PROGRESS":
            case 1:
                message.status = 1;
                break;
            case "FINISHED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.identityId != null)
                message.identityId = String(object.identityId);
            return message;
        };

        /**
         * Creates a plain object from a Trip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.Trip
         * @static
         * @param {trip.Trip} message Trip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
                object.carId = "";
                object.start = null;
                object.current = null;
                object.end = null;
                object.status = options.enums === String ? "TS_NOT_SPECIFIED" : 0;
                object.identityId = "";
            }
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            if (message.carId != null && message.hasOwnProperty("carId"))
                object.carId = message.carId;
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.trip.LocationStatus.toObject(message.start, options);
            if (message.current != null && message.hasOwnProperty("current"))
                object.current = $root.trip.LocationStatus.toObject(message.current, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.trip.LocationStatus.toObject(message.end, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.trip.TripStatus[message.status] : message.status;
            if (message.identityId != null && message.hasOwnProperty("identityId"))
                object.identityId = message.identityId;
            return object;
        };

        /**
         * Converts this Trip to JSON.
         * @function toJSON
         * @memberof trip.Trip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trip;
    })();

    trip.CreateTripRequest = (function() {

        /**
         * Properties of a CreateTripRequest.
         * @memberof trip
         * @interface ICreateTripRequest
         * @property {trip.ILocation|null} [start] CreateTripRequest start
         * @property {string|null} [carId] CreateTripRequest carId
         * @property {string|null} [avatarUrl] CreateTripRequest avatarUrl
         */

        /**
         * Constructs a new CreateTripRequest.
         * @memberof trip
         * @classdesc Represents a CreateTripRequest.
         * @implements ICreateTripRequest
         * @constructor
         * @param {trip.ICreateTripRequest=} [properties] Properties to set
         */
        function CreateTripRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTripRequest start.
         * @member {trip.ILocation|null|undefined} start
         * @memberof trip.CreateTripRequest
         * @instance
         */
        CreateTripRequest.prototype.start = null;

        /**
         * CreateTripRequest carId.
         * @member {string} carId
         * @memberof trip.CreateTripRequest
         * @instance
         */
        CreateTripRequest.prototype.carId = "";

        /**
         * CreateTripRequest avatarUrl.
         * @member {string} avatarUrl
         * @memberof trip.CreateTripRequest
         * @instance
         */
        CreateTripRequest.prototype.avatarUrl = "";

        /**
         * Creates a CreateTripRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.CreateTripRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.CreateTripRequest} CreateTripRequest
         */
        CreateTripRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.CreateTripRequest)
                return object;
            let message = new $root.trip.CreateTripRequest();
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".trip.CreateTripRequest.start: object expected");
                message.start = $root.trip.Location.fromObject(object.start);
            }
            if (object.carId != null)
                message.carId = String(object.carId);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            return message;
        };

        /**
         * Creates a plain object from a CreateTripRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.CreateTripRequest
         * @static
         * @param {trip.CreateTripRequest} message CreateTripRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTripRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.start = null;
                object.carId = "";
                object.avatarUrl = "";
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.trip.Location.toObject(message.start, options);
            if (message.carId != null && message.hasOwnProperty("carId"))
                object.carId = message.carId;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            return object;
        };

        /**
         * Converts this CreateTripRequest to JSON.
         * @function toJSON
         * @memberof trip.CreateTripRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTripRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTripRequest;
    })();

    trip.CreateTripResponse = (function() {

        /**
         * Properties of a CreateTripResponse.
         * @memberof trip
         * @interface ICreateTripResponse
         * @property {common.IBaseResponse|null} [baseResp] CreateTripResponse baseResp
         * @property {trip.ITripEntity|null} [tripEntity] CreateTripResponse tripEntity
         */

        /**
         * Constructs a new CreateTripResponse.
         * @memberof trip
         * @classdesc Represents a CreateTripResponse.
         * @implements ICreateTripResponse
         * @constructor
         * @param {trip.ICreateTripResponse=} [properties] Properties to set
         */
        function CreateTripResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTripResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof trip.CreateTripResponse
         * @instance
         */
        CreateTripResponse.prototype.baseResp = null;

        /**
         * CreateTripResponse tripEntity.
         * @member {trip.ITripEntity|null|undefined} tripEntity
         * @memberof trip.CreateTripResponse
         * @instance
         */
        CreateTripResponse.prototype.tripEntity = null;

        /**
         * Creates a CreateTripResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.CreateTripResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.CreateTripResponse} CreateTripResponse
         */
        CreateTripResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.CreateTripResponse)
                return object;
            let message = new $root.trip.CreateTripResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".trip.CreateTripResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.tripEntity != null) {
                if (typeof object.tripEntity !== "object")
                    throw TypeError(".trip.CreateTripResponse.tripEntity: object expected");
                message.tripEntity = $root.trip.TripEntity.fromObject(object.tripEntity);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateTripResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.CreateTripResponse
         * @static
         * @param {trip.CreateTripResponse} message CreateTripResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTripResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.tripEntity = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.tripEntity != null && message.hasOwnProperty("tripEntity"))
                object.tripEntity = $root.trip.TripEntity.toObject(message.tripEntity, options);
            return object;
        };

        /**
         * Converts this CreateTripResponse to JSON.
         * @function toJSON
         * @memberof trip.CreateTripResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTripResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTripResponse;
    })();

    trip.GetTripRequest = (function() {

        /**
         * Properties of a GetTripRequest.
         * @memberof trip
         * @interface IGetTripRequest
         * @property {string|null} [id] GetTripRequest id
         */

        /**
         * Constructs a new GetTripRequest.
         * @memberof trip
         * @classdesc Represents a GetTripRequest.
         * @implements IGetTripRequest
         * @constructor
         * @param {trip.IGetTripRequest=} [properties] Properties to set
         */
        function GetTripRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripRequest id.
         * @member {string} id
         * @memberof trip.GetTripRequest
         * @instance
         */
        GetTripRequest.prototype.id = "";

        /**
         * Creates a GetTripRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.GetTripRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.GetTripRequest} GetTripRequest
         */
        GetTripRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.GetTripRequest)
                return object;
            let message = new $root.trip.GetTripRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetTripRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.GetTripRequest
         * @static
         * @param {trip.GetTripRequest} message GetTripRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetTripRequest to JSON.
         * @function toJSON
         * @memberof trip.GetTripRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripRequest;
    })();

    trip.GetTripResponse = (function() {

        /**
         * Properties of a GetTripResponse.
         * @memberof trip
         * @interface IGetTripResponse
         * @property {common.IBaseResponse|null} [baseResp] GetTripResponse baseResp
         * @property {trip.ITrip|null} [trip] GetTripResponse trip
         */

        /**
         * Constructs a new GetTripResponse.
         * @memberof trip
         * @classdesc Represents a GetTripResponse.
         * @implements IGetTripResponse
         * @constructor
         * @param {trip.IGetTripResponse=} [properties] Properties to set
         */
        function GetTripResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof trip.GetTripResponse
         * @instance
         */
        GetTripResponse.prototype.baseResp = null;

        /**
         * GetTripResponse trip.
         * @member {trip.ITrip|null|undefined} trip
         * @memberof trip.GetTripResponse
         * @instance
         */
        GetTripResponse.prototype.trip = null;

        /**
         * Creates a GetTripResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.GetTripResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.GetTripResponse} GetTripResponse
         */
        GetTripResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.GetTripResponse)
                return object;
            let message = new $root.trip.GetTripResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".trip.GetTripResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".trip.GetTripResponse.trip: object expected");
                message.trip = $root.trip.Trip.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTripResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.GetTripResponse
         * @static
         * @param {trip.GetTripResponse} message GetTripResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.trip = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.trip.Trip.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this GetTripResponse to JSON.
         * @function toJSON
         * @memberof trip.GetTripResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripResponse;
    })();

    trip.GetTripsRequest = (function() {

        /**
         * Properties of a GetTripsRequest.
         * @memberof trip
         * @interface IGetTripsRequest
         * @property {trip.TripStatus|null} [status] GetTripsRequest status
         */

        /**
         * Constructs a new GetTripsRequest.
         * @memberof trip
         * @classdesc Represents a GetTripsRequest.
         * @implements IGetTripsRequest
         * @constructor
         * @param {trip.IGetTripsRequest=} [properties] Properties to set
         */
        function GetTripsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripsRequest status.
         * @member {trip.TripStatus} status
         * @memberof trip.GetTripsRequest
         * @instance
         */
        GetTripsRequest.prototype.status = 0;

        /**
         * Creates a GetTripsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.GetTripsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.GetTripsRequest} GetTripsRequest
         */
        GetTripsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.GetTripsRequest)
                return object;
            let message = new $root.trip.GetTripsRequest();
            switch (object.status) {
            case "TS_NOT_SPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "IN_PROGRESS":
            case 1:
                message.status = 1;
                break;
            case "FINISHED":
            case 2:
                message.status = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTripsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.GetTripsRequest
         * @static
         * @param {trip.GetTripsRequest} message GetTripsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = options.enums === String ? "TS_NOT_SPECIFIED" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.trip.TripStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this GetTripsRequest to JSON.
         * @function toJSON
         * @memberof trip.GetTripsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripsRequest;
    })();

    trip.GetTripsResponse = (function() {

        /**
         * Properties of a GetTripsResponse.
         * @memberof trip
         * @interface IGetTripsResponse
         * @property {common.IBaseResponse|null} [baseResp] GetTripsResponse baseResp
         * @property {Array.<trip.ITripEntity>|null} [trips] GetTripsResponse trips
         */

        /**
         * Constructs a new GetTripsResponse.
         * @memberof trip
         * @classdesc Represents a GetTripsResponse.
         * @implements IGetTripsResponse
         * @constructor
         * @param {trip.IGetTripsResponse=} [properties] Properties to set
         */
        function GetTripsResponse(properties) {
            this.trips = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripsResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof trip.GetTripsResponse
         * @instance
         */
        GetTripsResponse.prototype.baseResp = null;

        /**
         * GetTripsResponse trips.
         * @member {Array.<trip.ITripEntity>} trips
         * @memberof trip.GetTripsResponse
         * @instance
         */
        GetTripsResponse.prototype.trips = $util.emptyArray;

        /**
         * Creates a GetTripsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.GetTripsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.GetTripsResponse} GetTripsResponse
         */
        GetTripsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.GetTripsResponse)
                return object;
            let message = new $root.trip.GetTripsResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".trip.GetTripsResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.trips) {
                if (!Array.isArray(object.trips))
                    throw TypeError(".trip.GetTripsResponse.trips: array expected");
                message.trips = [];
                for (let i = 0; i < object.trips.length; ++i) {
                    if (typeof object.trips[i] !== "object")
                        throw TypeError(".trip.GetTripsResponse.trips: object expected");
                    message.trips[i] = $root.trip.TripEntity.fromObject(object.trips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTripsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.GetTripsResponse
         * @static
         * @param {trip.GetTripsResponse} message GetTripsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.trips = [];
            if (options.defaults)
                object.baseResp = null;
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.trips && message.trips.length) {
                object.trips = [];
                for (let j = 0; j < message.trips.length; ++j)
                    object.trips[j] = $root.trip.TripEntity.toObject(message.trips[j], options);
            }
            return object;
        };

        /**
         * Converts this GetTripsResponse to JSON.
         * @function toJSON
         * @memberof trip.GetTripsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripsResponse;
    })();

    trip.UpdateTripRequest = (function() {

        /**
         * Properties of an UpdateTripRequest.
         * @memberof trip
         * @interface IUpdateTripRequest
         * @property {string|null} [id] UpdateTripRequest id
         * @property {trip.ILocation|null} [current] UpdateTripRequest current
         * @property {boolean|null} [endTrip] UpdateTripRequest endTrip
         */

        /**
         * Constructs a new UpdateTripRequest.
         * @memberof trip
         * @classdesc Represents an UpdateTripRequest.
         * @implements IUpdateTripRequest
         * @constructor
         * @param {trip.IUpdateTripRequest=} [properties] Properties to set
         */
        function UpdateTripRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateTripRequest id.
         * @member {string} id
         * @memberof trip.UpdateTripRequest
         * @instance
         */
        UpdateTripRequest.prototype.id = "";

        /**
         * UpdateTripRequest current.
         * @member {trip.ILocation|null|undefined} current
         * @memberof trip.UpdateTripRequest
         * @instance
         */
        UpdateTripRequest.prototype.current = null;

        /**
         * UpdateTripRequest endTrip.
         * @member {boolean} endTrip
         * @memberof trip.UpdateTripRequest
         * @instance
         */
        UpdateTripRequest.prototype.endTrip = false;

        /**
         * Creates an UpdateTripRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.UpdateTripRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.UpdateTripRequest} UpdateTripRequest
         */
        UpdateTripRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.UpdateTripRequest)
                return object;
            let message = new $root.trip.UpdateTripRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.current != null) {
                if (typeof object.current !== "object")
                    throw TypeError(".trip.UpdateTripRequest.current: object expected");
                message.current = $root.trip.Location.fromObject(object.current);
            }
            if (object.endTrip != null)
                message.endTrip = Boolean(object.endTrip);
            return message;
        };

        /**
         * Creates a plain object from an UpdateTripRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.UpdateTripRequest
         * @static
         * @param {trip.UpdateTripRequest} message UpdateTripRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateTripRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.current = null;
                object.endTrip = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.current != null && message.hasOwnProperty("current"))
                object.current = $root.trip.Location.toObject(message.current, options);
            if (message.endTrip != null && message.hasOwnProperty("endTrip"))
                object.endTrip = message.endTrip;
            return object;
        };

        /**
         * Converts this UpdateTripRequest to JSON.
         * @function toJSON
         * @memberof trip.UpdateTripRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateTripRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateTripRequest;
    })();

    trip.UpdateTripResponse = (function() {

        /**
         * Properties of an UpdateTripResponse.
         * @memberof trip
         * @interface IUpdateTripResponse
         * @property {common.IBaseResponse|null} [baseResp] UpdateTripResponse baseResp
         * @property {trip.ITrip|null} [trip] UpdateTripResponse trip
         */

        /**
         * Constructs a new UpdateTripResponse.
         * @memberof trip
         * @classdesc Represents an UpdateTripResponse.
         * @implements IUpdateTripResponse
         * @constructor
         * @param {trip.IUpdateTripResponse=} [properties] Properties to set
         */
        function UpdateTripResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateTripResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof trip.UpdateTripResponse
         * @instance
         */
        UpdateTripResponse.prototype.baseResp = null;

        /**
         * UpdateTripResponse trip.
         * @member {trip.ITrip|null|undefined} trip
         * @memberof trip.UpdateTripResponse
         * @instance
         */
        UpdateTripResponse.prototype.trip = null;

        /**
         * Creates an UpdateTripResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip.UpdateTripResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip.UpdateTripResponse} UpdateTripResponse
         */
        UpdateTripResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.trip.UpdateTripResponse)
                return object;
            let message = new $root.trip.UpdateTripResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".trip.UpdateTripResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".trip.UpdateTripResponse.trip: object expected");
                message.trip = $root.trip.Trip.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateTripResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip.UpdateTripResponse
         * @static
         * @param {trip.UpdateTripResponse} message UpdateTripResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateTripResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.trip = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.trip.Trip.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this UpdateTripResponse to JSON.
         * @function toJSON
         * @memberof trip.UpdateTripResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateTripResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateTripResponse;
    })();

    return trip;
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