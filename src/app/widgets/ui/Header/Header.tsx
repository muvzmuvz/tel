import {Menu, Search} from "lucide-react";

function Header() {
    return (
        <header
            className="w-full max-w-screen h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                />
                <div className="hidden sm:flex flex-col">
                    <h2 className="text-lg font-bold text-gray-800">Имя пользователя</h2>
                    <p className="text-sm text-blue-600">в сети</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <Search size={20}/>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <Menu size={20}/>
                </button>
            </div>
        </header>
    );
}

export default Header;
