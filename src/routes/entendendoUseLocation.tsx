import { Route } from "react-router-dom";
import Exibir from "../pages/entendendoUseLocation/Exibir";
import Formulario from "../pages/entendendoUseLocation/Formulario";


const rotas = <Route path='entendendoUseLocation'>
    <Route index element={<Formulario/>}/>
    <Route path="exibir" element={<Exibir/>}/>
</Route>

export default rotas;