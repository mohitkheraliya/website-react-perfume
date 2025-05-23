import React, { useState } from "react";
import "./Collection.css";
import ProductData from "./../../data/ProductData";

const PerfumeCollection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? ProductData : ProductData.slice(0, 4); 

  return (
    <section
      id="collection"
      className="collection py-16 bg-gradient-to-b from-[#fff7f1] to-white"
    >
      <h2 className="text-5xl text-center font-bold mb-16 text-[#fe9043]">
        Fragrance Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-10">
        {visibleProducts.map((product, index) => (
          <div
            className="card bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:shadow-2xl"
            key={index}
          >
            <div className="card__image w-full h-72 overflow-hidden">
              <img
                src={`/images/${product.img}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#fe9043] mb-4 pb-2 border-b-2 border-[#fdb77a] inline-block">
                {product.name}
              </h3>

              <div className="card__detail space-y-2 text-gray-700">
                {product.description.map((line, i) => (
                  <div className="flex items-start gap-2" key={i}>
                    <span className="text-lg mt-1 text-[#fe9043]">•</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {ProductData.length > 4 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#fe9043] text-white rounded-md text-[1.4rem] font-semibold shadow-md hover:bg-[#e97e2b] transition duration-300"
          >
            {showAll ? "Show Less" : "View All Fragrances"}
          </button>
        </div>
      )}
    </section>
  );
};

export default PerfumeCollection;
