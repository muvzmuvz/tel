import ChatInput from "../../shared/ui/ChatInput.tsx";
import Header from "../../widgets/ui/Header/Header.tsx";
import Message from "../../shared/ui/Message.tsx";
import {useContextMenu} from "../../providers/hooks/useContextMenu.ts";
import {useCallback, useMemo} from "react";


export function ChatPageContent() {
    const { setContextMenu } = useContextMenu();

    const contextMenu = useMemo(
        () => [
            { name: "Ответить", onClick: () => console.log("Ответить") },
            { name: "Переслать", onClick: () => console.log("Переслать") },
            { name: "Удалить", onClick: () => console.log("Удалить") },
            { name: "Выбрать", onClick: () => console.log("Выбрать") },
        ],
        []
    );

    const handleContextMenu = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            const { clientX, clientY } = e;
            setContextMenu(contextMenu, [clientX, clientY]);
        },
        [setContextMenu, contextMenu]
    );

    return (
        <div
            onContextMenu={handleContextMenu}
            className="w-full h-screen flex flex-col bg-gray-50"
        >
            <Header />
            <main className="flex-grow w-full p-4 overflow-y-auto px-10">
                <Message text={"Привет, как дела?"} isOwn={true} />
                <Message text={"Нормально, у тебя как?"} isOwn={false} />
                <Message text={"Что нового?"} isOwn={true} />
            </main>
            <div className="w-full items-center justify-center flex pb-10 border-gray-200">
                <ChatInput />
            </div>
        </div>
    );
}
