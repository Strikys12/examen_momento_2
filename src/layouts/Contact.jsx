import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
    return (
        // Forzamos fondo blanco, texto negro y un padding superior alto para que el navbar no lo tape
        <section className="bg-white text-black pt-40 pb-20 px-6 min-h-screen w-full">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">CONTACTO</h2>
                    <p className="text-gray-500 mt-2 italic">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Columna Izquierda: Datos */}
                    <div className="space-y-10">
                        <h3 className="font-bold text-lg uppercase tracking-widest border-b-2 border-black pb-2 inline-block">
                            Información de Contacto
                        </h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-black text-white p-3 shadow-lg">📍</div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-tight">Dirección</h4>
                                    <p className="text-gray-600 text-sm">Calle Urban Style 123<br />28001 Madrid, España</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-black text-white p-3 shadow-lg">📞</div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-tight">Teléfono</h4>
                                    <p className="text-gray-600 text-sm">+34 91 123 45 67</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-black text-white p-3 shadow-lg">✉️</div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-tight">Email</h4>
                                    <p className="text-gray-600 text-sm">info@urbanthreads.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-black text-white p-3 shadow-lg">🕒</div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-tight">Horario</h4>
                                    <p className="text-gray-600 text-sm">Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario (El cuadro blanco con sombra de la imagen) */}
                    <div className="bg-white p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
                        <h3 className="font-bold text-xl mb-6 uppercase">Envíanos un mensaje</h3>

                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
                            <p className="text-amber-900 text-[11px] leading-relaxed">
                                <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};