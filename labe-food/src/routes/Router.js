import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from "../pages/PaginaLogin/PaginaLogin";
import PaginaPerfil from "../pages/PaginaPerfil/PaginaPerfil";
import PaginaCadastro from "../pages/PaginaCadastro/PaginaCadastro"
import PaginaCarrinho from "../pages/PaginaCarrinho/PaginaCarrinho"
import PaginaHome from "../pages/PaginaHome/PaginaHome"
import PaginaDetalhes from "../pages/PaginaDetalhes/PaginaDetalhes";


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PaginaLogin />} />
                <Route path="cadastro" element={<PaginaCadastro />} />
                <Route path="home/" element={<PaginaHome />} />
                <Route path="perfil/" element={<PaginaPerfil />} />
                <Route path="carrinho/" element={<PaginaCarrinho />} />
                <Route path="detalhes/" element={<PaginaDetalhes/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}