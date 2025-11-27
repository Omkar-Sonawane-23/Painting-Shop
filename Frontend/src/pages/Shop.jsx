import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/products";

const Shop = ({ addToCart }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchesCat = activeCat === "All" || p.category === activeCat;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#fdf7f2] min-h-screen">

      {/* ================================
          SKETCH STYLE SEARCH HEADER
      ================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="
           bg-blue-200 sketch-pattern 
           border-4 border-black 
           rounded-[28px] p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
           text-center
        ">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <input
              type="text"
              placeholder="Search Something...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full sm:w-96 
                px-6 py-3 rounded-full text-lg 
                border-4 border-black sketch-pattern-pink
                outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              "
            />

            <button
              className="
                px-10 py-3 bg-rose-300 
                border-4 border-black rounded-full 
                text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:translate-y-1 transition-all
              "
            >
              Search
            </button>
          </div>

          <p className="mt-6 text-lg font-medium text-slate-700">
            Showing {filtered.length} Results for "{searchTerm || 'All'}"
          </p>
        </div>
      </div>

      {/* ================================
              MAIN SHOP LAYOUT
      ================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">

        {/* ================================
                SKETCH SIDEBAR (Sticky)
        ================================= */}
        <aside
          className={`md:w-72 flex-shrink-0 ${filterOpen ? "block" : "hidden md:block"}`}
        >
          <div className="
            sticky top-24 
            h-[calc(100vh-6rem)] 
            overflow-y-auto 
            pr-3
            space-y-8
          ">
            <div className="
              bg-white border-4 border-black 
              rounded-[22px] p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            ">
              <h3 className="text-xl font-black mb-6">Filter & Sort</h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-bold mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCat("All")}
                    className={`w-full text-left px-4 py-2 rounded-lg font-bold border-2 border-black ${
                      activeCat === "All"
                        ? "bg-rose-200"
                        : "bg-white hover:bg-rose-100"
                    }`}
                  >
                    All Products
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCat(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-bold border-2 border-black ${
                        activeCat === cat.id
                          ? "bg-rose-200"
                          : "bg-white hover:bg-rose-100"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* ================================
                SKETCH PRODUCT GRID
        ================================= */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filtered.map((product) => (
            <div
              key={product.id}
              className="
                bg-white border-4 border-black 
                rounded-[28px] p-6 
                sketch-pattern-pink
                shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
              "
            >
              {/* Card Top */}
              <div className="
                h-48 rounded-[22px] bg-white border-4 border-black 
                flex items-center justify-center text-xl font-bold mb-4
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              ">
                {product.categoryName || "Solid Pearls"}
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-black">{product.name}</h3>

              {/* Description */}
              <p className="text-base mt-2">{product.description}</p>

            </div>
          ))}

          {filtered.length === 0 && (
            <div className="
              w-full col-span-3 text-center py-20 
              bg-white border-4 border-black rounded-[28px]
              sketch-pattern shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            ">
              <p className="text-xl font-bold text-slate-700">
                No matching pigments found.
              </p>

              <button
                onClick={() => {
                  setActiveCat("All");
                  setSearchTerm("");
                }}
                className="
                  mt-4 px-8 py-2 bg-rose-300 
                  border-4 border-black rounded-full 
                  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                "
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Shop;
  