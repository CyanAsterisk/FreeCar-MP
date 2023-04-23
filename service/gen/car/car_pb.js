import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const car = $root.car = (() => {

    /**
     * Namespace car.
     * @exports car
     * @namespace
     */
    const car = {};

    car.CarEntity = (function() {

        /**
         * Properties of a CarEntity.
         * @memberof car
         * @interface ICarEntity
         * @property {string|null} [id] CarEntity id
         * @property {car.ICar|null} [car] CarEntity car
         */

        /**
         * Constructs a new CarEntity.
         * @memberof car
         * @classdesc Represents a CarEntity.
         * @implements ICarEntity
         * @constructor
         * @param {car.ICarEntity=} [properties] Properties to set
         */
        function CarEntity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CarEntity id.
         * @member {string} id
         * @memberof car.CarEntity
         * @instance
         */
        CarEntity.prototype.id = "";

        /**
         * CarEntity car.
         * @member {car.ICar|null|undefined} car
         * @memberof car.CarEntity
         * @instance
         */
        CarEntity.prototype.car = null;

        /**
         * Creates a CarEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.CarEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.CarEntity} CarEntity
         */
        CarEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.car.CarEntity)
                return object;
            let message = new $root.car.CarEntity();
            if (object.id != null)
                message.id = String(object.id);
            if (object.car != null) {
                if (typeof object.car !== "object")
                    throw TypeError(".car.CarEntity.car: object expected");
                message.car = $root.car.Car.fromObject(object.car);
            }
            return message;
        };

        /**
         * Creates a plain object from a CarEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.CarEntity
         * @static
         * @param {car.CarEntity} message CarEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CarEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.car = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.car != null && message.hasOwnProperty("car"))
                object.car = $root.car.Car.toObject(message.car, options);
            return object;
        };

        /**
         * Converts this CarEntity to JSON.
         * @function toJSON
         * @memberof car.CarEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CarEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CarEntity;
    })();

    /**
     * CarStatus enum.
     * @name car.CarStatus
     * @enum {number}
     * @property {number} CS_NOT_SPECIFIED=0 CS_NOT_SPECIFIED value
     * @property {number} LOCKED=1 LOCKED value
     * @property {number} UNLOCKING=2 UNLOCKING value
     * @property {number} UNLOCKED=3 UNLOCKED value
     * @property {number} LOCKING=4 LOCKING value
     */
    car.CarStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CS_NOT_SPECIFIED"] = 0;
        values[valuesById[1] = "LOCKED"] = 1;
        values[valuesById[2] = "UNLOCKING"] = 2;
        values[valuesById[3] = "UNLOCKED"] = 3;
        values[valuesById[4] = "LOCKING"] = 4;
        return values;
    })();

    car.Driver = (function() {

        /**
         * Properties of a Driver.
         * @memberof car
         * @interface IDriver
         * @property {number|null} [id] Driver id
         * @property {string|null} [avatarUrl] Driver avatarUrl
         */

        /**
         * Constructs a new Driver.
         * @memberof car
         * @classdesc Represents a Driver.
         * @implements IDriver
         * @constructor
         * @param {car.IDriver=} [properties] Properties to set
         */
        function Driver(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Driver id.
         * @member {number} id
         * @memberof car.Driver
         * @instance
         */
        Driver.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Driver avatarUrl.
         * @member {string} avatarUrl
         * @memberof car.Driver
         * @instance
         */
        Driver.prototype.avatarUrl = "";

        /**
         * Creates a Driver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.Driver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.Driver} Driver
         */
        Driver.fromObject = function fromObject(object) {
            if (object instanceof $root.car.Driver)
                return object;
            let message = new $root.car.Driver();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            return message;
        };

        /**
         * Creates a plain object from a Driver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.Driver
         * @static
         * @param {car.Driver} message Driver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Driver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.avatarUrl = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            return object;
        };

        /**
         * Converts this Driver to JSON.
         * @function toJSON
         * @memberof car.Driver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Driver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Driver;
    })();

    car.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof car
         * @interface IPosition
         * @property {number|null} [latitude] Position latitude
         * @property {number|null} [longitude] Position longitude
         */

        /**
         * Constructs a new Position.
         * @memberof car
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {car.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position latitude.
         * @member {number} latitude
         * @memberof car.Position
         * @instance
         */
        Position.prototype.latitude = 0;

        /**
         * Position longitude.
         * @member {number} longitude
         * @memberof car.Position
         * @instance
         */
        Position.prototype.longitude = 0;

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.car.Position)
                return object;
            let message = new $root.car.Position();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.Position
         * @static
         * @param {car.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
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
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof car.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Position;
    })();

    car.Car = (function() {

        /**
         * Properties of a Car.
         * @memberof car
         * @interface ICar
         * @property {car.CarStatus|null} [status] Car status
         * @property {car.IDriver|null} [driver] Car driver
         * @property {car.IPosition|null} [position] Car position
         * @property {string|null} [tripId] Car tripId
         * @property {number|null} [power] Car power
         * @property {string|null} [plateNum] Car plateNum
         */

        /**
         * Constructs a new Car.
         * @memberof car
         * @classdesc Represents a Car.
         * @implements ICar
         * @constructor
         * @param {car.ICar=} [properties] Properties to set
         */
        function Car(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Car status.
         * @member {car.CarStatus} status
         * @memberof car.Car
         * @instance
         */
        Car.prototype.status = 0;

        /**
         * Car driver.
         * @member {car.IDriver|null|undefined} driver
         * @memberof car.Car
         * @instance
         */
        Car.prototype.driver = null;

        /**
         * Car position.
         * @member {car.IPosition|null|undefined} position
         * @memberof car.Car
         * @instance
         */
        Car.prototype.position = null;

        /**
         * Car tripId.
         * @member {string} tripId
         * @memberof car.Car
         * @instance
         */
        Car.prototype.tripId = "";

        /**
         * Car power.
         * @member {number} power
         * @memberof car.Car
         * @instance
         */
        Car.prototype.power = 0;

        /**
         * Car plateNum.
         * @member {string} plateNum
         * @memberof car.Car
         * @instance
         */
        Car.prototype.plateNum = "";

        /**
         * Creates a Car message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.Car
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.Car} Car
         */
        Car.fromObject = function fromObject(object) {
            if (object instanceof $root.car.Car)
                return object;
            let message = new $root.car.Car();
            switch (object.status) {
            case "CS_NOT_SPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "LOCKED":
            case 1:
                message.status = 1;
                break;
            case "UNLOCKING":
            case 2:
                message.status = 2;
                break;
            case "UNLOCKED":
            case 3:
                message.status = 3;
                break;
            case "LOCKING":
            case 4:
                message.status = 4;
                break;
            }
            if (object.driver != null) {
                if (typeof object.driver !== "object")
                    throw TypeError(".car.Car.driver: object expected");
                message.driver = $root.car.Driver.fromObject(object.driver);
            }
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".car.Car.position: object expected");
                message.position = $root.car.Position.fromObject(object.position);
            }
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.power != null)
                message.power = Number(object.power);
            if (object.plateNum != null)
                message.plateNum = String(object.plateNum);
            return message;
        };

        /**
         * Creates a plain object from a Car message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.Car
         * @static
         * @param {car.Car} message Car
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Car.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "CS_NOT_SPECIFIED" : 0;
                object.driver = null;
                object.position = null;
                object.tripId = "";
                object.power = 0;
                object.plateNum = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.car.CarStatus[message.status] : message.status;
            if (message.driver != null && message.hasOwnProperty("driver"))
                object.driver = $root.car.Driver.toObject(message.driver, options);
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.car.Position.toObject(message.position, options);
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = options.json && !isFinite(message.power) ? String(message.power) : message.power;
            if (message.plateNum != null && message.hasOwnProperty("plateNum"))
                object.plateNum = message.plateNum;
            return object;
        };

        /**
         * Converts this Car to JSON.
         * @function toJSON
         * @memberof car.Car
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Car.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Car;
    })();

    car.GetCarRequest = (function() {

        /**
         * Properties of a GetCarRequest.
         * @memberof car
         * @interface IGetCarRequest
         * @property {string|null} [id] GetCarRequest id
         */

        /**
         * Constructs a new GetCarRequest.
         * @memberof car
         * @classdesc Represents a GetCarRequest.
         * @implements IGetCarRequest
         * @constructor
         * @param {car.IGetCarRequest=} [properties] Properties to set
         */
        function GetCarRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCarRequest id.
         * @member {string} id
         * @memberof car.GetCarRequest
         * @instance
         */
        GetCarRequest.prototype.id = "";

        /**
         * Creates a GetCarRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.GetCarRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.GetCarRequest} GetCarRequest
         */
        GetCarRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.car.GetCarRequest)
                return object;
            let message = new $root.car.GetCarRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetCarRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.GetCarRequest
         * @static
         * @param {car.GetCarRequest} message GetCarRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCarRequest.toObject = function toObject(message, options) {
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
         * Converts this GetCarRequest to JSON.
         * @function toJSON
         * @memberof car.GetCarRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCarRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCarRequest;
    })();

    car.GetCarResponse = (function() {

        /**
         * Properties of a GetCarResponse.
         * @memberof car
         * @interface IGetCarResponse
         * @property {common.IBaseResponse|null} [baseResp] GetCarResponse baseResp
         * @property {car.ICar|null} [car] GetCarResponse car
         */

        /**
         * Constructs a new GetCarResponse.
         * @memberof car
         * @classdesc Represents a GetCarResponse.
         * @implements IGetCarResponse
         * @constructor
         * @param {car.IGetCarResponse=} [properties] Properties to set
         */
        function GetCarResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCarResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof car.GetCarResponse
         * @instance
         */
        GetCarResponse.prototype.baseResp = null;

        /**
         * GetCarResponse car.
         * @member {car.ICar|null|undefined} car
         * @memberof car.GetCarResponse
         * @instance
         */
        GetCarResponse.prototype.car = null;

        /**
         * Creates a GetCarResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.GetCarResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.GetCarResponse} GetCarResponse
         */
        GetCarResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.car.GetCarResponse)
                return object;
            let message = new $root.car.GetCarResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".car.GetCarResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.car != null) {
                if (typeof object.car !== "object")
                    throw TypeError(".car.GetCarResponse.car: object expected");
                message.car = $root.car.Car.fromObject(object.car);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCarResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.GetCarResponse
         * @static
         * @param {car.GetCarResponse} message GetCarResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCarResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.baseResp = null;
                object.car = null;
            }
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.car != null && message.hasOwnProperty("car"))
                object.car = $root.car.Car.toObject(message.car, options);
            return object;
        };

        /**
         * Converts this GetCarResponse to JSON.
         * @function toJSON
         * @memberof car.GetCarResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCarResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCarResponse;
    })();

    car.GetCarsRequest = (function() {

        /**
         * Properties of a GetCarsRequest.
         * @memberof car
         * @interface IGetCarsRequest
         */

        /**
         * Constructs a new GetCarsRequest.
         * @memberof car
         * @classdesc Represents a GetCarsRequest.
         * @implements IGetCarsRequest
         * @constructor
         * @param {car.IGetCarsRequest=} [properties] Properties to set
         */
        function GetCarsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a GetCarsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.GetCarsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.GetCarsRequest} GetCarsRequest
         */
        GetCarsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.car.GetCarsRequest)
                return object;
            return new $root.car.GetCarsRequest();
        };

        /**
         * Creates a plain object from a GetCarsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.GetCarsRequest
         * @static
         * @param {car.GetCarsRequest} message GetCarsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCarsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetCarsRequest to JSON.
         * @function toJSON
         * @memberof car.GetCarsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCarsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCarsRequest;
    })();

    car.GetCarsResponse = (function() {

        /**
         * Properties of a GetCarsResponse.
         * @memberof car
         * @interface IGetCarsResponse
         * @property {common.IBaseResponse|null} [baseResp] GetCarsResponse baseResp
         * @property {Array.<car.ICarEntity>|null} [cars] GetCarsResponse cars
         */

        /**
         * Constructs a new GetCarsResponse.
         * @memberof car
         * @classdesc Represents a GetCarsResponse.
         * @implements IGetCarsResponse
         * @constructor
         * @param {car.IGetCarsResponse=} [properties] Properties to set
         */
        function GetCarsResponse(properties) {
            this.cars = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCarsResponse baseResp.
         * @member {common.IBaseResponse|null|undefined} baseResp
         * @memberof car.GetCarsResponse
         * @instance
         */
        GetCarsResponse.prototype.baseResp = null;

        /**
         * GetCarsResponse cars.
         * @member {Array.<car.ICarEntity>} cars
         * @memberof car.GetCarsResponse
         * @instance
         */
        GetCarsResponse.prototype.cars = $util.emptyArray;

        /**
         * Creates a GetCarsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof car.GetCarsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {car.GetCarsResponse} GetCarsResponse
         */
        GetCarsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.car.GetCarsResponse)
                return object;
            let message = new $root.car.GetCarsResponse();
            if (object.baseResp != null) {
                if (typeof object.baseResp !== "object")
                    throw TypeError(".car.GetCarsResponse.baseResp: object expected");
                message.baseResp = $root.common.BaseResponse.fromObject(object.baseResp);
            }
            if (object.cars) {
                if (!Array.isArray(object.cars))
                    throw TypeError(".car.GetCarsResponse.cars: array expected");
                message.cars = [];
                for (let i = 0; i < object.cars.length; ++i) {
                    if (typeof object.cars[i] !== "object")
                        throw TypeError(".car.GetCarsResponse.cars: object expected");
                    message.cars[i] = $root.car.CarEntity.fromObject(object.cars[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCarsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof car.GetCarsResponse
         * @static
         * @param {car.GetCarsResponse} message GetCarsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCarsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.cars = [];
            if (options.defaults)
                object.baseResp = null;
            if (message.baseResp != null && message.hasOwnProperty("baseResp"))
                object.baseResp = $root.common.BaseResponse.toObject(message.baseResp, options);
            if (message.cars && message.cars.length) {
                object.cars = [];
                for (let j = 0; j < message.cars.length; ++j)
                    object.cars[j] = $root.car.CarEntity.toObject(message.cars[j], options);
            }
            return object;
        };

        /**
         * Converts this GetCarsResponse to JSON.
         * @function toJSON
         * @memberof car.GetCarsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCarsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetCarsResponse;
    })();

    return car;
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