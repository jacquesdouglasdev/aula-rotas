import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import Contato from "../pages/shared/contato";
import MenuComNavLink from '../components/navegacaoComNavLink/Menu';

const rotas = (
<Route path='navegacaoComNavLink'>
      <Route index element={<Inicio menu={<MenuComNavLink/>}/>}/>
      <Route path='sobre' element={<Sobre menu={<MenuComNavLink/>}/>}/>
      <Route path='contato' element={<Contato menu={<MenuComNavLink/>}/>}/>
    </Route>
)

export default rotas;