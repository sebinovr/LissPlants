import Head from 'next/head'
import Image from 'next/image'
import AppHook from '@/hooks/AppHook'
import SidebarCategorias from '@/components/SidebarCategoria'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#__next');

export default function LayoutPago( {children, pagina}) {

    return (
        <>
            <div className="bg-[url('../public/assets/fondo.jpg')] bg-cover bg-opacity-40">
                <Head>
                    <title> LissPlants - {pagina} </title>
                    <meta name="description" content="LissPlants" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/> 
                    
                </Head>

                <div className="text-center p-10 pt-15 bg-white bg-opacity-70 flex justify-center">
                    <Image 
                            src={`/assets/logo.png`}
                            alt={`logo`} 
                            width={200}
                            height={200}
                        />
                </div>

                <div className="md:flex">
                    <aside className='md:w-2/10 xl:w-1/7 pr-5 pl-5 bg-white bg-opacity-70'>
                        <h1 className="text-xl font-bold text-center pb-5 font">Categorias</h1>
                        <SidebarCategorias/>
                    </aside>

                    <div className="md:w-full xl:w-5/7 h-screen bg-white bg-opacity-70">                    
                        <form className='flex flex-col bg-white/70 rounded-xl border-2 border-indigo-600 p-10 gap-2 '>
                            <label className='uppercase text-2xl'>Nombre:</label>
                            <input className='p-2 uppercase text-2xl text-slate-700 rounded-xl'></input>

                            <label className='uppercase text-2xl'>Dirección de Envio:</label>
                            <input className='p-2 uppercase text-2xl text-slate-700 rounded-xl'></input>

                        </form>

                    </div>
                </div>
            </div>    

        </>
    )
}
