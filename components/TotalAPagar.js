import AppHook from "@/hooks/AppHook"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function TotalAPagar() {

    const {pedido} = AppHook()
    const [total, setTotal] = useState(0)

    const router = useRouter()

    //Calculo del total
    useEffect(()=> {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    return (
        <div className="flex flex-col absolute top-0 rigth-0 h-[200px] w-auto md:w-[330px] pt-20">
            <h1 className="text-xl pb-1 ">Total a Pagar:</h1>
            <div className="flex flex-col gap-2 pl-5">
                <h1 className="text-2xl text-center bg-yellow-200 rounded-xl p-2">${total} USD</h1>
                <button
                    type="button"
                    className="bg-sky-700 p-2 text-white rounded-md font-bold uppercase shadow-md w-full"
                    onClick={()=>{router.push('/pago')}}
                >Continuar al Pago</button>
            </div>
        </div>
    )
}

export default TotalAPagar