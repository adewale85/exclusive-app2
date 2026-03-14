import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

interface Product {
  id: number;
  title: string;
}

function NavInput() {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!query || query.length < 2) {
      setResult([]);
      return;
    }

    const searchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        if (!response.ok) {
          throw new Error("Product not available");
        }

        const data = await response.json();
        setResult(data.products || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      searchProduct();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="relative flex justify-center w-full">

      {/* Input Container */}
      <div className="relative w-full max-w-[400px] h-12">

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          autoComplete="off"
          spellCheck="false"
          className="w-full h-full pl-4 pr-10 border rounded-md outline-none text-base focus:ring-2 focus:ring-gray-300"
        />

        {/* Icon */}
        <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
      </div>

      {/* Results */}
      {result.length > 0 && (
        <ul className="absolute top-full mt-1 w-full max-w-[400px] max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-md z-50">
          {result.map((product: Product) => (
            <li
              key={product.id}
              className="p-3 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}

      {/* Loading */}
      {loading && (
        <div className="absolute top-14 text-xs text-gray-500">
          Searching...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="absolute top-full mt-2 text-red-500 text-xs">
          {error}
        </div>
      )}
    </div>
  );
}

export default NavInput;