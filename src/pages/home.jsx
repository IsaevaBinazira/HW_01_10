import { Link } from "react-router-dom";
import useProductStore from "../api/products-store.js";

function Home() {
  const { data, isLoading } = useProductStore();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-red-200 border-t-red-600"></div>

          <p className="mt-4 text-red-500">
            Загружаем товары...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 px-5 py-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-center text-4xl font-bold text-red-800">
          Products
        </h1>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => (
            <li key={item._id}>
              <Link
                to={`/products/${item._id}`}
                className="block rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                  Product
                </span>

                <h2 className="mt-3 text-xl font-bold text-gray-800">
                  {item.name}
                </h2>

                <p className="mt-4 font-semibold text-red-600">
                  {item.price} сом
                </p>

                <div className="mt-5 text-sm font-medium text-red-500">
                  Подробнее →
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Home;
