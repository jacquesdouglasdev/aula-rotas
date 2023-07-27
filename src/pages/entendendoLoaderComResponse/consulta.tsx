import { useLoaderData } from "react-router-dom"
import Pagina from "../../components/template/Pagina"

export default function Consulta() {
    const info:any = useLoaderData()
    console.log(info)

    return (
        <Pagina titulo="Resultado da Consulta">
            {/* <strong>{info}</strong> */}
        </Pagina>
    )
}

export async function loaderConsulta() {
    const dados = await fetch('https://fakestoreapi.com/products/1')
    //const resp = new Response('Olá da response', {status: 200})
    //console.log(dados.json())
    //throw new Response('Houve um problema', {status: 200})
    return dados
}
