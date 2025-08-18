import type {IMessage} from "../types/message";

function Message({text, isOwn}: IMessage) {
    return (
        <div className={`flex mb-2 ${isOwn ? "justify-end" : "justify-start"}`}>
            <div
                className={`relative max-w-[70%] px-4 py-2 rounded-lg shadow-sm break-words ${
                    isOwn
                        ? "bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                        : "bg-gray-200 text-gray-900 rounded-tr-lg rounded-tl-lg rounded-br-lg"
                }`}
            >
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Message;
