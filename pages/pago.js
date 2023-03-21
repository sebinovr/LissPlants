import LayoutPago from "@/layout/layoutPago";
import { useEffect , useCallback } from "react";
import AppHook from "@/hooks/AppHook";

export default function Pago() {

    const { pedido, nombre, setNombre, colocarOrden, total} = AppHook() 
    
    // //retorna true o false si hay un arreglo en el pedido
    // const comprobarPedido = useCallback(() => {
    //     return pedido.length === 0 || nombre==='' || nombre.length<3;
    // }, [pedido, nombre])

    // useEffect( () => {
    //     comprobarPedido()
    // }, [pedido, comprobarPedido])

    
    return(
        <LayoutPago pagina="Total y Confirmar">

        
        </LayoutPago>
    )
}