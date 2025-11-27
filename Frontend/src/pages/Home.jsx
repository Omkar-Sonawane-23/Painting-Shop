import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ============================
        HERO
      ============================= */}
      <section className="pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <p className="text-base md:text-lg font-semibold text-slate-500 uppercase tracking-wide">
            New 2025 Catalog Available
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
            Shop the Finest{" "}
            <span className="text-yellow-600">Automotive-Grade</span>
            <br />
            Coatings & Pearls
          </h1>

          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            Premium interference pearls, high-chroma pigments, and color-shift
            effects engineered for OEMs, workshops, and industrial buyers.
          </p>

          <div className="mt-10">
            <Link
              to="/shop"
              className="px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 
              text-lg md:text-xl font-bold transition-all shadow-lg"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </section>

      {/* ============================
        TYPES OF PEARLS
      ============================= */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl md:text-4xl font-black mb-12">
            Types of Pearls
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Solid Pearls",
              "Interference Pearls",
              "Carbon Pearls",
              "CBR Pearls",
              "Special Effect Pearls",
              "Green Pearls",
            ].map((item, i) => (
              <button
                key={i}
                className="w-full bg-rose-100 border border-rose-300 text-rose-900 rounded-xl 
                py-6 md:py-8 text-base md:text-lg lg:text-xl font-bold 
                shadow-md hover:bg-rose-200 transition-all"
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ============================
        WHY CHOOSE US
      ============================= */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl md:text-4xl font-black mb-10">
            Why Xtreme Kolorz?
          </h2>

          <div className="bg-slate-50 p-8 md:p-12 rounded-xl border border-slate-200 shadow-lg max-w-4xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Our automotive-grade pigments are engineered for extreme weather
              conditions, offering unmatched clarity, purity, and shine.
            </p>

            <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed">
              • High purity & non-toxic formulation <br />
              • Scratch-resistant high-coverage pearls <br />
              • Compatible with all clear coats & binders <br />
              • Lab-tested for 8+ years durability
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="mt-14 flex justify-center">
            <div className="
              w-full md:w-2/3 lg:w-1/2 
              h-56 md:h-72 lg:h-80 
              bg-blue-100 border border-blue-300 rounded-xl 
              flex items-center justify-center 
              text-blue-700 text-2xl font-bold shadow-lg
            ">
              IMAGE
            </div>
          </div>

        </div>
      </section>

      {/* ============================
        INDUSTRIES
      ============================= */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl md:text-4xl font-black mb-12">
            Industries
          </h2>

          <div className="
            w-full md:w-2/3 lg:w-1/2 
            h-56 md:h-72 
            bg-blue-100 border border-blue-300 
            rounded-xl flex items-center justify-center 
            text-blue-900 text-2xl font-bold mx-auto shadow-lg
          ">
            Where Our Pearls Are Used
          </div>

          <div className="
            mt-14 grid grid-cols-1 md:grid-cols-3 
            gap-10 text-lg md:text-xl leading-relaxed
          ">
            <div>
              <h3 className="font-bold text-2xl">Order</h3>
              <p className="mt-3 text-slate-600">
                Premium pearls from 25g samples to 1kg packs.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-2xl">Partner</h3>
              <p className="mt-3 text-slate-600">
                Official partner program for studios & workshops.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-2xl">Distribution</h3>
              <p className="mt-3 text-slate-600">
                Bulk supply for OEMs & large-scale refinishing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================
        SEARCH
      ============================= */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-black mb-8">
            Didn’t find what you're looking for?
          </h3>

          <div className="
            flex flex-col sm:flex-row 
            justify-center max-w-2xl mx-auto gap-4
          ">
            <input
              className="w-full border border-slate-300 rounded-lg px-5 py-4 
              text-lg md:text-xl outline-none shadow-sm"
              placeholder="Search colors, effects, or categories..."
            />

            <button className="
              px-8 py-4 bg-slate-900 text-white 
              rounded-lg font-bold hover:bg-slate-800
              text-lg md:text-xl shadow-lg
            ">
              Search
            </button>
          </div>

        </div>
      </section>

      {/* ============================
        FAQ
      ============================= */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl md:text-4xl font-black mb-10">FAQs</h2>

          {[1, 2, 3, 4].map((faq) => (
            <div
              key={faq}
              className="p-6 border border-slate-300 rounded-lg mb-4 cursor-pointer 
              hover:bg-slate-50 text-lg md:text-xl shadow-sm"
            >
              FAQ Question {faq}
            </div>
          ))}

        </div>
      </section>

      {/* ============================
        CONTACT FORM
      ============================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl md:text-4xl font-black mb-12">
            Talk To Our Sales Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl">

            <input
              placeholder="Name"
              className="border border-slate-300 rounded-lg px-5 py-4 shadow-sm"
            />

            <input
              placeholder="Phone"
              className="border border-slate-300 rounded-lg px-5 py-4 shadow-sm"
            />

            <input
              placeholder="Email"
              className="border border-slate-300 rounded-lg px-5 py-4 md:col-span-2 shadow-sm"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="border border-slate-300 rounded-lg px-5 py-4 md:col-span-2 shadow-sm"
            ></textarea>

            <button className="
              md:col-span-2 bg-slate-900 text-white 
              font-bold py-4 rounded-lg hover:bg-slate-800
              text-lg md:text-xl shadow-lg
            ">
              Submit Your Message
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
