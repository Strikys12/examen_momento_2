export const ContactForm = () => {
    return (
        <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase text-gray-400 mb-1">Nombre</label>
                    <input type="text" className="border border-gray-300 p-3 focus:border-black outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase text-gray-400 mb-1">Apellidos</label>
                    <input type="text" className="border border-gray-300 p-3 focus:border-black outline-none transition-all" />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1">Email</label>
                <input type="email" className="border border-gray-300 p-3 focus:border-black outline-none transition-all" />
            </div>

            <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1">Asunto</label>
                <select className="border border-gray-300 p-3 focus:border-black outline-none bg-white">
                    <option>Selecciona un asunto</option>
                    <option>Pedido</option>
                    <option>Devolución</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1">Mensaje</label>
                <textarea rows="4" className="border border-gray-300 p-3 focus:border-black outline-none resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-[#121212] text-white font-bold py-4 uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors">
                Enviar Mensaje
            </button>
        </form>
    )

}