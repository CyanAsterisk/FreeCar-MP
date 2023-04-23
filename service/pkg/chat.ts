import { chat } from "../gen/chat/chat_pb";
import { FreeCar } from "./request";

export namespace ChatService {

    export function getAIAnswer(req :chat.IChatRequest): Promise<chat.IChatResponse> {
        return FreeCar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/chat',
            data: req,
            respMarshaller: chat.ChatResponse.fromObject
        })
    }
}
