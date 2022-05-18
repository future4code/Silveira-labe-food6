
export const irParaLogin = (navigate) => {
    navigate("/")
}
export const irParaCadastro = (navigate) => {
    navigate("/cadastro")
}
export const irParaHome = (navigate) => {
    navigate("/home/")
}
export const irParaPerfil = (navigate) => {
    navigate("/perfil")
}
export const irParaCarrinho = (navigate) => {
    navigate("/carrinho")
}
export const goBack = (navigate) => {
    navigate(-1)
}
export const irParaDetalhes = (navigate,id) =>{
    navigate(`/detalhes/${id}`)
}

