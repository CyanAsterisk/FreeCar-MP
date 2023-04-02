import { trip } from "../gen/trip/trip_pb"
import { FreeCar } from "./request";

export namespace TripService{
    export function createTrip(req:trip.ICreateTripRequest):Promise<trip.ICreateTripResponse>{
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/trip',
            data: req,
            respMarshaller: trip.CreateTripResponse.fromObject,
        })
    }

    export function getTrip(req: trip.IGetTripRequest): Promise<trip.IGetTripResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path: `/trip`,
            data: req,
            respMarshaller: trip.GetTripResponse.fromObject,
        })
    }

    export function getTrips(req: trip.IGetTripsRequest): Promise<trip.IGetTripsResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'GET',
            path:  '/trips',
            data: req,
            respMarshaller: trip.GetTripsResponse.fromObject,
        })
    }

    export function finishTrip(id: string,loc:trip.ILocation) {
        return updateTrip({
            id,
            endTrip: true,
            current: loc
        })
    }

    function updateTrip(r: trip.IUpdateTripRequest): Promise<trip.IUpdateTripResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'PUT',
            path: `/trip`,
            data: r,
            respMarshaller: trip.UpdateTripResponse.fromObject,
        })
    } 
}