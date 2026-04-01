import { products } from "../data/products";

const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {product.category}
                </p>

                <a
                  href="https://wa.me/918800702856"
                  target="_blank"
                  className="text-blue-600 font-medium"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;