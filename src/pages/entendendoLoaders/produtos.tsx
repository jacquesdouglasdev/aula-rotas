import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import { Link, useLoaderData } from "react-router-dom";

export default function Produtos() {
    /* const [produtos, setProdutos] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const produtosAPI = await pegaProdutos()
            setProdutos(produtosAPI)
        })()
    }, []) */

    const produtos:any = useLoaderData()

    const produtosEmItens = produtos.map(produto => {
        return <li className={`
            text-center text-gray-300 
            border-gray-300 border-solid border-2
            rounded-md p-3 m-2
            hover:text-orange-500 hover:border-orange-500
        `} key={produto.id}>
            <Link to={`/entendendoLoaders/${produto.id}`}>
                O produto {produto.id} de nome {produto.title} custa R$ {produto.price}
            </Link>
            </li>
})

    return (
        <Pagina titulo="Produtos Disponíveis">
            <ul className="p-0 overflow-clip">{produtosEmItens}</ul>
        </Pagina>
    )
}

export async function pegaProdutos() {
    const dados = await fetch('http://fakestoreapi.com/products?limit=10')
    /* const dadosJson = await dados.json()
    return dadosJson */
    return dados
}