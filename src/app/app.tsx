import {RouterProvider} from "react-router-dom";
import {routes} from "./providers/routes/routes.tsx";

function App() {
    return (
        <RouterProvider router={routes}/>
    )
}

export default App
