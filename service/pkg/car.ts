import camelcaseKeys = require("camelcase-keys");
import { car } from "../gen/car/car_pb";
import { FreeCar } from "./request";

export namespace CarService {
    export function subscribe(onMsg: (c: car.ICarEntity) => void) {
        const socket = wx.connectSocket({
            url: FreeCar.wsAddr + '/ws',
        })
        socket.onMessage(msg => {
            const obj = JSON.parse(msg.data as string)
            onMsg(car.CarEntity.fromObject(
                camelcaseKeys(obj, {
                    deep: true,
                })))
        })
        return socket
    }

    export function getCar(req: car.IGetCarRequest): Promise<car.IGetCarResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: `/car`,
            data: req,
            respMarshaller: car.GetCarResponse.fromObject,
        })
    }

    export function getCars(): Promise<car.IGetCarsResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: `/cars`,
            respMarshaller: car.GetCarsResponse.fromObject,
        })
    }
}