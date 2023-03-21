import React from 'react'
import Image from 'next/image'
import AppHook from '@/hooks/AppHook'

function ProductosGrid( {producto} ) {

    const { categoriaActual, handleChangeModal, handleSetProducto } = AppHook()   

    return (
        <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
            {categoriaActual?.productos?.map ( producto => (
                <div key={producto.id} className="border rounded-xl p-3 flex flex-col items-center hover:bg-white hover:bg-opacity-40">
                    <Image 
                        src={`/assets/${producto.imagen}.png`}
                        alt={`Imagen ${producto.nombre}`} 
                        width={300}
                        height={400}
                    />
                    
                    <div className="p-3">
                        <h3 className="text-2xl font-bold text-center"> {producto.nombre} </h3>
                        <p className="mt-3 font-black text-4xl text-amber-600">
                            ${producto.precio} USD
                        </p>
            
                        <button
                            type="button"
                            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase font-bold rounded-md"
                            onClick={() => {
                                handleChangeModal()
                                handleSetProducto(producto)
                            }}
                        >
                            Agregar
                        </button>
                    </div>
            
                </div>
            ))}
        </div>
    )
}

export default ProductosGrid