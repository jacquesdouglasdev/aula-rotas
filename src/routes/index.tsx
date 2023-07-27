import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/template/Layout';
import rotasTiposDeLinks from './tiposDeLinks';
import rotasNavegacaoComNavLink from './navegacaoComNavLink';
import rotasPagina404 from './pagina404';
import Pagina404 from '../pages/shared/pagina404';
import rotasParametrosDeRota from './parametrosDeRota';
import rotasParametrosDeBusca from './parametrosDeBusca';
import rotasEntendendoUseLocation from './entendendoUseLocation';
import rotasEntedendoActions from './entendendoActions';
import rotasEntendendoLoaders from './entendendoLoaders';
import rotasLidandoComErrosDoLoader from './lidandoComErrosDoLoader';
import rotasEntendoLoaderComResponse from './entendendoLoaderComResponse';
import rotasEntendendoUseRouteError from './entendendoUseRouteError';
import rotasUsandoLoaderDeOutraRota from './usandoLoaderDeOutraRota';
import rotasEntendendoDefer from './entendendoDefer';
import rotasEntendendoUseFetcher from './entendendoUseFetcher';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    {rotasTiposDeLinks}
    {rotasNavegacaoComNavLink}
    {rotasPagina404}
    {rotasParametrosDeRota}
    {rotasParametrosDeBusca}
    {rotasEntendendoUseLocation}
    {rotasEntedendoActions}
    {rotasEntendendoLoaders}
    {rotasLidandoComErrosDoLoader}
    {rotasEntendoLoaderComResponse}
    {rotasEntendendoUseRouteError}
    {rotasUsandoLoaderDeOutraRota}
    {rotasEntendendoDefer}
    {rotasEntendendoUseFetcher}
    <Route path='*' element={<Pagina404/>}/>
  </Route>
))

export default router;