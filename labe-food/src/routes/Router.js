import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from "../pages/PaginaLogin/PaginaLogin";
import PaginaPerfil from "../pages/PaginaPerfil/PaginaPerfil";
import PaginaCadastro from "../pages/PaginaCadastro/PaginaCadastro"
import PaginaCarrinho from "../pages/PaginaCarrinho/PaginaCarrinho"
import PaginaHome from "../pages/PaginaHome/PaginaHome"
import PaginaEndereco from "../pages/PaginaEndereco/PaginaEndereco"


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PaginaLogin />} />
                <Route path="/cadastro" element={<PaginaCadastro />} />
                <Route path="/endereco" element={<PaginaEndereco />} />
                <Route index element={<PaginaHome />} />
                <Route path="/perfil" element={<PaginaPerfil />} />
                <Route path="/carrinho" element={<PaginaCarrinho />} />
                
            </Routes>
        </BrowserRouter>
    )
}