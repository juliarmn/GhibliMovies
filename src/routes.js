import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouts() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouts;