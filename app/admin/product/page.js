import { getAllProducts } from "@/lib/actions";

export default async function ProductPage() {
  const products = await getAllProducts();

  console.log("P", products);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        <h1 className="text-xl font-bold">Products</h1>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => {
            return (
              <div
                id={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
