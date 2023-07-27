import { useRouteError } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function ErroDeRota(props: any) {
    const erro:any = useRouteError();
    // erro.data acessa a mensagem se foi lançado uma resposta
    // erro.message acessa a mensagem se foi lançado um erro
    const mensagem = erro.message ? erro.message : erro.data;
    return (
        <Pagina titulo="Houve um Problema" descricao={mensagem} links={props.links}>

        </Pagina>
    )
}