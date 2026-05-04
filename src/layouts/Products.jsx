// src/components/Products.jsx
import { ProductCard } from "../components/ProductCard";


export const Products = () => {
    const collection = [
        { id: 1, name: "Camiseta Básica Urban", price: 29, desc: "Algodón 100% orgánico" },
        { id: 2, name: "Jeans Slim Fit", price: 89, desc: "Denim premium stretch" },
        { id: 3, name: "Sudadera Oversize", price: 65, desc: "Algodón French Terry" },
        { id: 4, name: "Chaqueta Bomber", price: 120, desc: "Nylon resistente al agua" },
        { id: 5, name: "Gorra Snapback", price: 35, desc: "Bordado premium" },
        { id: 6, name: "Zapatillas Urban", price: 95, desc: "Suela de goma antideslizante" },
    ];

    return (
        <section className="bg-gray-50 py-20 px-10">
            {/* Títulos de la sección */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black">
                    NUESTRA COLECCIÓN
                </h2>
                <p className="text-gray-500 mt-2 text-sm italic">Estilo urbano para cada ocasión</p>
            </div>

            {/* Grid de Productos */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {collection.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        desc={product.desc}
                    />
                ))}
            </div>
        </section>
    );
};