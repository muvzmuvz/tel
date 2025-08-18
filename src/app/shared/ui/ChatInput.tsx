import SendButton from "./SendButton.tsx";

export default function ChatInput() {
    return (
        <div className="flex flex-row gap-2 w-1/2">
            <input type={'text'} placeholder={'text'}
                   className={'rounded-xl w-full h-12 focus:border-blue-400 border-2 border-blue-400 px-2 py-2 leading-none'}/>
            <SendButton/>
        </div>
    )
}