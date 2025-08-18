import {ContextMenuProvider} from "../../shared/ui/ContextMenu/ContextMenuProvider.tsx";
import {ChatPageContent} from "./ChatPageContent.tsx";

function ChatPage() {
    return (
        <ContextMenuProvider>
            <ChatPageContent />
        </ContextMenuProvider>
    );
}

export default ChatPage;
