import { Route } from 'react-router';
import Produtos from '../pages/parametrosDeBusca/Produtos';
import Produto from '../components/parametrosDeBusca/Produto';

const rotas = <Route path='parametrosDeBusca' element={<Produtos/>}>
    <Route path='produto' element={<Produto/>}></Route>
</Route>

export default rotas;

// /usuarios/:id -> parametros de rota porque estamos acessando um recurso
// /usuarios?ordenadosPor=nome -> parametros de busca porque estamos filtrando um recurso

// /compras/:id?entregas=true&compradoApos=2020 -> parametros de rota e de busca