import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from "timeago-react"

function Message({ message }) {
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    
    return (
        <div className={`flex items-end space-x-2 m-2 relative ${
            isUserMessage && "justify-end"
        }`}>
            <div className={`relative w-8 h-8 ${
                isUserMessage && "order-last ml-2"
            }`}>
                <Avatar username={message.get("username")}/>
            </div>

            <div className={`flex space-x-4 p-3 rounded-lg ${
                isUserMessage
                ? "rounded-br-none bg-pink-300"
                : "rounded-bl-none bg-blue-400"
            }`}
            >
                <p>{ message.get("message") }</p>
            </div>
            
            {/* {TimeStamp} */}
            <TimeAgo 
                className={`text-[10px] italic text-gray-400 ${
                    isUserMessage && "order-first pr-1"
                }`}
                datetime={message.createdAt}
            />
            <p className={`absolute -bottom-5 text-xs ${
                isUserMessage
                ? "text-pink-300"
                : "text-blue-400 -left-3"
            }`}>
                { message.get("username")}
            </p>
            
        </div>
    )
}

export default Message
