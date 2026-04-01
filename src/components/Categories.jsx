import { categories } from "../data/products";

const Categories = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;