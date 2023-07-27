
import { Suspense } from "react";
import Pagina from "../../components/template/Pagina";
import { Await, defer, useLoaderData } from "react-router-dom";

export default function Produtos() {
    const dadosDoLoader:any = useLoaderData()

    const produtosEmItens = (produtos) => {
        const produtosFormatados = produtos.map((produto) => {
            return (
                <li 
                    className={`text-center text-gray-300 
                                border-gray-300 border-solid border-2
                                rounded-md p-3 m-2
                                hover:text-orange-500 hover:border-orange-500
                    `} 
                    key={produto.id}
                >
                    O produto {produto.id} de nome {produto.title} custa R$ {produto.price}
                </li>
            )
        })
        return produtosFormatados
    }

    return (
        <Pagina titulo="Produtos Disponíveis">
            <ul className="p-0 overflow-clip">
                <Suspense fallback={<p className="text-xl">Carregamento...</p>}>
                    <Await resolve={dadosDoLoader.preparaProdutos}>
                        {(produtos) => {return produtosEmItens(produtos)}}
                    </Await>
                </Suspense>
            </ul>
        </Pagina>
    )
}

async function preparaProdutos() {
    const dados = await fetch('http://fakestoreapi.com/products?limit=10')
    const dadosJson = await dados.json()
    return dadosJson
    //return dados
}

export async function pegaProdutos() {
    return defer({ preparaProdutos: preparaProdutos()})
}