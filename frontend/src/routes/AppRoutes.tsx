import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from '../pages/PaginaHome/index.tsx';

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaHome/>}/>
            <Route path="*" element={<h1>404 - Página não encontrada</h1>}/>
        </Routes>
        </BrowserRouter>
    )
}