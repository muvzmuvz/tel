import {Outlet} from "react-router-dom";
import {Sidebar} from "../../../widgets/ui/SideBar.tsx";

export const MainLayout = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-50">
            <Sidebar/>
            <main className="flex-grow flex flex-col">
                <Outlet/>
            </main>
        </div>
    );
};
