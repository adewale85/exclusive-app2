import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

interface Product {
  id: number;
  title: string;
}

function NavInput() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResult([]);
      return;
    }

    const searchProduct = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(searchProduct, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative flex justify-center">

      {/* Input Container (same structure as your footer) */}
      <div className="md:w-[220px] w-[333px] h-12 relative flex items-center border rounded-sm">

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="w-full h-full py-3 pl-4 pr-10 font-poppins text-base outline-none"
        />

        <span className="absolute right-3 pointer-events-none">
          <IoSearch className="text-lg text-gray-500" />
        </span>
      </div>

      {/* Results */}
      {result.length > 0 && (
        <ul className="absolute top-full mt-1 w-[333px] md:w-[220px] max-h-60 overflow-y-auto bg-white border shadow-lg z-50">
          {result.map((product) => (
            <li
              key={product.id}
              className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}

      {loading && (
        <p className="absolute top-14 text-xs text-gray-500">
          Searching...
        </p>
      )}
    </div>
  );
}

export default NavInput;