import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { $mainApi } from "../api/http.js";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],

    queryFn: async () => {
      const response = await $mainApi.get(`/products/${productId}`);

      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-red-200 border-t-red-600"></div>

          <p className="mt-4 font-medium text-red-500">
            Загружаем товар...
          </p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50 px-5">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
            ⚠️
          </div>

          <h1 className="mt-5 text-2xl font-bold text-red-800">
            Товар не найден
          </h1>

          <p className="mt-3 text-gray-500">
            Не удалось загрузить информацию о товаре.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            ← Вернуться к товарам
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 px-5 py-10">

      <div className="mx-auto max-w-4xl">

        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 font-medium text-red-600 shadow-sm transition duration-200 hover:bg-red-600 hover:text-white"
        >
          ← Вернуться к товарам
        </button>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <div className="h-2 bg-red-600"></div>

          <div className="p-7 md:p-12">

            <div className="flex items-center justify-between">

              <span className="rounded-full bg-red-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-600">
                Product
              </span>

              <span className="text-sm text-gray-400">
                ID: {productId}
              </span>

            </div>

            <h1 className="mt-7 text-4xl font-bold text-red-900 md:text-5xl">
              {data.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {data.description}
            </p>

            <div className="my-10 h-px bg-red-100"></div>

            <div className="flex flex-col gap-6 rounded-2xl bg-red-50 p-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Цена
                </p>

                <p className="mt-2 text-3xl font-bold text-red-600">
                  {data.price} сом
                </p>
              </div>

              <button
                className="rounded-xl bg-red-600 px-7 py-4 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
              >
                🛒 Добавить в корзину
              </button>

            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Product Store ❤️
        </p>

      </div>
    </div>
  );
}

export default ProductDetail;