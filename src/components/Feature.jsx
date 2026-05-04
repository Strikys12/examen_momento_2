
export const Feature = () => {
    const items = [
        {
            icon: "✨", // Puedes cambiarlo por un icono de Lucide luego
            title: "DISEÑO ÚNICO",
        },
        {
            icon: "✔️",
            title: "CALIDAD PREMIUM",
        },
        {
            icon: "⚡",
            title: "ENVÍO RÁPIDO",
        },
    ];

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mb-4 text-white text-2xl">
                            {item.icon}
                        </div>
                        <h3 className="text-black font-bold tracking-widest text-sm uppercase">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};