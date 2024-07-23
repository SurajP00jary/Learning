"use client";

export default function () {
  const products = [
    { id: 1, name: "T-Shirt", category: "Clothing", price: 20, quantity: 10 },
    { id: 2, name: "Laptop", category: "Electronics", price: 800, quantity: 4 },
    {
      id: 3,
      name: "Coffee Mug",
      category: "Accessories",
      price: 10,
      quantity: 2,
    },
  ];
  return (
    <div className="bg-white text-black">
      <h1 className="text-black text-lg text-center w-full">
        Products section
      </h1>
      {products.map((product) => (
        <div
          className="bg-gray-300
                 rounded-md my-3
                 "
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const calculateDiscount = ({
    quantity,
    price,
  }: {
    quantity: number;
    price: number;
  }) => {
    let discount = 0;
    if (quantity > 3) {
      discount = price * 0.2;
    } else if (product.category == "Electronics") {
      discount = price * 0.1;
    }
    return discount;
  };

  return (
    <div className="">
      <h1>{product.name}</h1>
      <h1>{product.quantity}</h1>
      <h1>{product.category}</h1>
      <h1>{product.price}</h1>
      <h1>
        Discount is :{" "}
        {calculateDiscount({
          quantity: product.quantity,
          price: product.price,
        })}
      </h1>
      <h1>
        Final price :{" "}
        {product.price -
          calculateDiscount({
            quantity: product.quantity,
            price: product.price,
          })}
      </h1>
    </div>
  );
}
