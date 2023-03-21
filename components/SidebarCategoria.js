import Image from "next/image"
import AppHook from "@/hooks/AppHook"

const SidebarCategorias = ({categoria}) => {

  const { categorias, categoriaActual, handleClickCategoria } = AppHook();

  // console.log(categorias)

  return (
    <nav>
      {categorias.map(categoria => (
        <div key={categoria.id} className={`${categoriaActual?.id === categoria.id ? "bg-white/40" : ""} flex justify-center my-0.5 w-auto h-[75px] pl-2 gap-5 md:w-full border rounded-xl hover:bg-white hover:bg-opacity-40 `}>
          <Image
              width={50}
              height={50}
              src={`/assets/${categoria.icono}.png`}
              alt="Imagen Icono"
          />

          <button
              type="button"
              className="hover:cursor-pointer font-medium uppercase"
              onClick={ () => handleClickCategoria(categoria.id) }
          >
              {categoria.nombre}
          </button>
        </div>

        ))}
    </nav>

  )
}

export default SidebarCategorias