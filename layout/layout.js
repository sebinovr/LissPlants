import Head from 'next/head'
import Image from 'next/image'
import AppHook from '@/hooks/AppHook'
import SidebarCategorias from '@/components/SidebarCategoria'
import ModalProducto from '@/components/ModalProducto'
import SidebarResumen from '@/components/SidebarResumen'
import TotalAPagar from '@/components/TotalAPagar'
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

export default function Layout( {children, pagina}) {

    const { modal } = AppHook();


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

                    <div className="md:w-6/10 xl:w-5/7 h-screen overflow-y-scroll bg-white bg-opacity-70">                    
                        <h1 className="text-xl font-bold text-start pb-5">Escoge tus productos:</h1>

                        <div className="h-screen overflow-y-scroll">

                            {children}

                        </div>
                    </div>
                    
                    <div className="md:w-2/10 xl:w-1/7 h-screen overflow-y-scroll bg-white bg-opacity-70">
                        <h1 className="text-xl pb-5">Resumen</h1>

                        <aside className='flex-col align-middle'>
                            <SidebarResumen/>
                        </aside>

                        <TotalAPagar/>
                        
                    </div>
                </div>
            </div>
                {/* modal */}
                {modal && ( 
                    <Modal isOpen={modal} style={customStyles}>
                        <ModalProducto/>
                    </Modal>
                )}

                <ToastContainer/>

        </>
    )
}
