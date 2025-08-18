import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {LoginPage} from "../../pages/LoginPage/LoginPage.tsx";
import ChatPage from "../../pages/ChatPage/ChatPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <ChatPage/>,
            },
        ],
    },
    {

        path: "login",
        element: <LoginPage/>,
    },
]);
