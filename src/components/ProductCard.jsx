export const ProductCard = ({ name, desc, price }) => {
    return (
        <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">

            <div className="bg-gray-200 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-5xl group-hover:scale-110 transition-transform duration-500">
                    👕
                </span>
            </div>

            {/* Info del Producto */}
            <div className="p-5">
                <h3 className="font-bold text-sm text-black uppercase mb-1">{name}</h3>
                <p className="text-gray-400 text-xs mb-4">{desc}</p>

                <div className="flex justify-between items-center">
                    <span className="font-black text-lg">€{price}</span>
                    <button className="bg-black text-white text-[10px] font-bold px-4 py-2 uppercase hover:bg-[#F3A41C] hover:text-black transition-colors">
                        AÑADIR
                    </button>
                </div>
            </div>
        </div>
    );
};