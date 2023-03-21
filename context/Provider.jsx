import { useState, useEffect, createContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])

    const router = useRouter()

    //Obtener Categorias
    const obtenerCategorias = async () => {
        const {data} =  await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(()=> {
         obtenerCategorias()
    }, [])    

    
    //Define categoria actual por default a categoria plantas grandes
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')

    }

    //Crear modal 
    const handleChangeModal = () => {
        setModal(!modal)
    }

    //Setear a producto que se selecciona
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //Crear pedido
    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success('Pedido Actualizado')

        }else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }

        setModal(false)
    }   

    //Para editar cantidades desde pagina Resumen
    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
    
        setModal(!modal)
    }
    
    //Eliminar producto
    const handleEliminarProducto = id => {
        const pedidoActualizado= pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }



    return (
        <AppContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleChangeModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidades,
                handleEliminarProducto

            }}
        >
            {children}
        </AppContext.Provider>
        )   
}

export { 
    AppProvider 
}

export default AppContext;