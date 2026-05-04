import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="bg-[#121212] text-white flex justify-between items-center px-10 py-5 fixed top-0 w-full z-50">

            <Link to="/" className="text-xl font-black uppercase tracking-tighter cursor-pointer">
                URBAN THREADS
            </Link>


            <ul className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest">
                <li className="hover:text-[#F3A41C] transition-colors duration-300">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="hover:text-[#F3A41C] transition-colors duration-300">
                    <Link to="/productos">Productos</Link>
                </li>
                <li className="hover:text-[#F3A41C] transition-colors duration-300">
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>


            <div className="md:hidden text-2xl cursor-pointer">
                ☰
            </div>
        </nav>
    );
};