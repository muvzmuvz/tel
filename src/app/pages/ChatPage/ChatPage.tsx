import ChatInput from "../../shared/ui/ChatInput.tsx";
import Header from "../../widgets/ui/Header/Header.tsx";
import Message from "../../shared/ui/Message.tsx";

function ChatPage() {
    return (
        <div className="w-full h-screen flex flex-col bg-gray-50">
            <Header/>
            <main className="flex-grow w-full p-4 overflow-y-auto">
                <Message text={'Привет, как дела?'} isOwn={true} />
                <Message text={'Нормально, у тебя как?'} isOwn={false} />
            </main>
            <div className="w-full items-center justify-center flex pb-10 border-gray-200">
                <ChatInput/>
            </div>
        </div>
    );
}

export default ChatPage;
