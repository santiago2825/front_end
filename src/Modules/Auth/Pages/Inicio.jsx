import Header from "../Components/Header"
import Seccion_inicio from "../Components/SeccionIntroductorio"
import Nosotros from "../Components/Nosotros"
import Servicios from "../Components/Servicios"
import Contactos from "../Components/Contactos"
import Footer from "../Components/Footer"

export default function Inicio() {
    return (
        <div className="m-0 min-h-screen box-border p-0 text-[#1F2937]">
            <Header />
            <main>
                <Seccion_inicio />
                <Nosotros />
                <Servicios />
                <Contactos />
            </main>
            <Footer />
        </div>
    )
}