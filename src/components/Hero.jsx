
export const Hero = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-20 px-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                Estilo Urbano <br />
                <span className="text-[#f3a41c]">Redefinido</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg">
                Descubre nuestra colección exclusiva de ropa urbana minimalista
            </p>
            <button className="mt-8 bg-[#f3a41c] text-black font-bold py-3 px-8 uppercase hover:bg-orange-500 transition-colors">
                Explorar Colección
            </button>
        </section>
    );
};