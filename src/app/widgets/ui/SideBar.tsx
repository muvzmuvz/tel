import SearchInput from "../../shared/ui/SearchInput.tsx";

export const Sidebar = () => {
    return (
        <aside className="w-74 h-screen bg-white border-r border-gray-200 flex flex-col overscroll-none">
            <div className="p-4 border-b border-gray-200 h-30 w-full flex gap-2 flex-col">
                <h2 className="text-xl font-bold mb-2 text-gray-800">Мессенджер</h2>
                <SearchInput/>
            </div>
            <nav
                className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
                <ul className="p-2 space-y-2">
                    <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                        Чат 1
                    </li>
                    <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                        Чат 2
                    </li>
                    <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                        Чат 3
                    </li>
                    <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                        Чат 3
                    </li>
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-200 flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800">Иван</span>
                    <button className="text-xs text-blue-500 hover:underline text-left cursor-pointer">
                        Выйти
                    </button>
                </div>
            </div>
        </aside>
    );
};
