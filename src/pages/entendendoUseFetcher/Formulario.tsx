import { useEffect, useState } from "react";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { useFetcher } from "react-router-dom"

export default function Formulario() {
    /* const location = useLocation() */
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const fetcher = useFetcher()
    //console.log(fetcher)
    const {data, state} = fetcher

    useEffect(() => {
        if (state === 'idle' && data) {
            window.alert(`O nome ${data.nome} tem ${data.idade} anos `)
        }
    }, [state, data])


    return (
        <Pagina titulo="Formulario - Entendendo useFetcher">
            <fetcher.Form 
                method="post"
                action="/entendendoUseFetcher/exibir"
                className="flex flex-col justify-center text-xl text-center"
            >
                <CorpoFormulario 
                    nome={nome}
                    setNome={setNome}
                    idade={idade}
                    setIdade={setIdade}
                />
            </fetcher.Form>
        </Pagina>
    )
}