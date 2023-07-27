import Pagina from "../../components/template/Pagina";

export default function ErroDoLoader(props: any) {
    return (
        <Pagina titulo="Houve um Problema" descricao={props.texto} links={props.links}>

        </Pagina>
    )
}