import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { products } from "../data/RubiesData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="py-12">
        <p className="mb-4 text-neutral-600">Product not found.</p>
        <Link to="/" className="underline">
          Back to the catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
      >
        <ArrowLeft size={16} />
        Back to the catalogue
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="w-full aspect-square bg-neutral-100 rounded-2xl flex items-center justify-center px-6 text-center text-sm text-neutral-500">
            The merchant has not added a photograph of this item.
          </div>
        )}

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            {product.name}
          </h1>

          {product.description && (
            <p className="mt-4 text-neutral-600">{product.description}</p>
          )}

          <p className="mt-6 text-3xl font-semibold">
            ₦
            {product.price.toLocaleString("en-NG", {
              minimumFractionDigits: 2,
            })}
          </p>

          <p className="mt-2 text-sm text-neutral-500">{product.stock} left</p>

          <div className="mt-6 flex items-stretch gap-3">
            <div className="flex items-center gap-4 bg-neutral-100 rounded-lg px-4">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="p-2 disabled:opacity-30"
              >
                <Minus size={16} />
              </button>

              <span className="w-6 text-center">{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => Math.min(product.stock, q + 1))
                }
                disabled={quantity >= product.stock}
                aria-label="Increase quantity"
                className="p-2 disabled:opacity-30"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              type="button"
              className="flex-1 px-8 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Buy now
            </button>
          </div>

          <hr className="my-8 border-neutral-200" />

          <p className="text-sm text-neutral-500 leading-relaxed">
            You pay Rubies by bank transfer. The account details and a reference
            to quote appear once you confirm your order — stock is held for 30
            minutes while you pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
