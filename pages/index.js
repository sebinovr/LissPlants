
import Layout from '@/layout/layout'
import ProductosGrid from '@/components/ProductosGrid'
import AppHook from  "@/hooks/AppHook"

export default function Home() {

  const { categoriaActual } = AppHook();

  return (
    <>
      <Layout pagina={`${categoriaActual?.nombre}`}>
        <ProductosGrid />
      </Layout>

    </>
  )
}
