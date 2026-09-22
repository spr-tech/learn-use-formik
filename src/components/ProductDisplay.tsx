import { Link } from "react-router-dom";
import { products } from "../data/RubiesData";

const ProductDisplay = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Catalogue</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="relative block aspect-square overflow-hidden group"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-fit h-fit object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
                No photograph yet
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-12 text-white">
              <h2 className="text-sm font-semibold">{product.name}</h2>
              {product.description && (
                <p className="text-xs text-white/80 line-clamp-1">
                  {product.description}
                </p>
              )}
              <p className="text-xs font-semibold text-amber-400 mt-1">
                ₦
                {product.price.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductDisplay;
