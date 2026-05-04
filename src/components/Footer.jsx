export const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white pt-16 pb-8 px-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Columna Marca */}
                <div>
                    <h4 className="font-black text-lg mb-4 tracking-tighter">URBAN THREADS</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
                    </p>
                </div>

                {/* Columna Enlaces */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Enlaces</h4>
                    <ul className="text-gray-400 text-sm space-y-3">
                        <li className="hover:text-white cursor-pointer transition-colors">Inicio</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Productos</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
                    </ul>
                </div>

                {/* Columna Ayuda */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Ayuda</h4>
                    <ul className="text-gray-400 text-sm space-y-3">
                        <li className="hover:text-white cursor-pointer">Guía de tallas</li>
                        <li className="hover:text-white cursor-pointer">Envíos</li>
                        <li className="hover:text-white cursor-pointer">Devoluciones</li>
                        <li className="hover:text-white cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Columna Social */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Síguenos</h4>
                    <div className="flex gap-4 text-xl">
                        <span className="cursor-pointer hover:text-orange-500">𝕏</span>
                        <span className="cursor-pointer hover:text-orange-500">📷</span>
                        <span className="cursor-pointer hover:text-orange-500">📌</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">
                    © 2024 Urban Threads. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};