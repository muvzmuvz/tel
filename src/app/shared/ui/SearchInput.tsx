import {Search} from "lucide-react"; // Иконка поиска из lucide-react

function SearchInput() {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400"/>
                </div>
                <input
                    type="search"
                    placeholder="Поиск"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
            </div>
        </div>
    );
}

export default SearchInput;
