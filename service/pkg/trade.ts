import { trade } from "../gen/trade/trade_pb"
import { FreeCar } from "./request";

export namespace TradeService {
    export function recharge(req:trade.IRechargeRequest):Promise<trade.IRechargeResponse>{
        return FreeCar.sendJavaRequestWithAuthRetry({
            method: 'POST',
            path: '/trade/recharge',
            data: req,
            respMarshaller: trade.RechargeResponse.fromObject,
        })
    }
}
