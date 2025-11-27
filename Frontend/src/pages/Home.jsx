import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-slate-900">

{/* ============================
  HERO (FULL SCREEN SKETCH STYLE)
============================= */}
<section className="min-h-screen flex items-center justify-center py-20 border-b border-slate-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    <div className="
      bg-blue-200 
      rounded-[32px] 
      border-4 border-black 
      p-12 md:p-16 
      sketch-pattern
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      text-center
    ">
      <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        Showcasing the Finest Automotive Grade Colors
      </h1>

      <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
        Premium automotive-grade color technology used in coatings, workshops, and OEM industries.
      </p>

      <button
        className="
          mt-10 px-12 py-4 
          bg-rose-300 
          border-4 border-black 
          rounded-full 
          text-xl font-bold 
          sketch-pattern-pink
          shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
          hover:translate-y-1 transition-all
        "
      >
        Explore Pearls
      </button>
    </div>

  </div>
</section>


{/* ============================
  TYPES OF PEARLS (BIG CARDS)
============================= */}
<section className="py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
      Types of Pearls
    </h2>

    <div
      className="
        grid 
        grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 
        gap-10
        lg:h-[75vh]
        items-center
      "
    >
      {[
        "Solid Pearls",
        "Interference Pearls",
        "Carbon Pearls",
        "OEM+ Pearls",
        "Special Effect Pearls",
        "Chroma Pearls",
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-rose-200 
            sketch-pattern-pink
            border-4 border-black 
            rounded-[28px]
            h-48 md:h-60 
            flex items-center justify-center 
            text-xl md:text-3xl font-bold 
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          "
        >
          {item}
        </div>
      ))}
    </div>

  </div>
</section>




   {/* ============================
  WHY XTREME KOLORZ? (Sketch Style)
============================= */}
<section className="min-h-screen flex flex-col justify-center py-20 border-b border-slate-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Top Info Box */}
    <div className="
      bg-amber-100
      rounded-[28px]
      border-4 border-black
      p-10 md:p-14
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      mb-16
    ">
      <h2 className="text-3xl md:text-4xl font-black mb-6">Why Xtreme Kolorz?</h2>

      <p className="text-lg md:text-xl leading-relaxed mb-5">
        Pearls are very fine inorganic and organic tinters that come in almost endless array of 
        metallic, interference and pearlescent colors. They can be used for special effect finishes,
        as long as they are cleared over.
      </p>

      <p className="text-lg md:text-xl leading-relaxed">
        Pearls are usually mica or silica based pearls which are color additives coated with metal 
        oxides. They are non-toxic, inert, and contain no actual metal—so they never rust or tarnish.
      </p>
    </div>

    {/* Bottom Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* Bullet Points */}
      <div className="text-xl md:text-2xl space-y-6 font-medium">
        <p>- High quality, non-metallic pearls (no rust / tarnish)</p>
        <p>- Wide range of colors & effects</p>
        <p>- Suitable for automotive + other industries</p>
        <p>- Strong customer support & technical help</p>
      </div>

      {/* Sketch Image Box */}
      <div
        className="
          bg-blue-200 
          sketch-pattern 
          border-4 border-black 
          rounded-[28px]
          h-64 md:h-80 
          flex items-center justify-center 
          text-3xl md:text-4xl font-bold text-slate-800
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        "
      >
        Image
      </div>

    </div>

  </div>
</section>


 {/* ============================
  INDUSTRIES (Sketch Style)
============================= */}
<section className="min-h-screen py-24 border-b border-slate-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-black mb-14">
      Industries
    </h2>

    {/* Blue Sketch Result Box */}
    <div
      className="
        bg-blue-200 
        sketch-pattern 
        border-4 border-black 
        rounded-[28px]
        h-60 md:h-72 
        flex flex-col items-center justify-center 
        text-center
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        mb-6
      "
    >
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-2">
        Short Title of Result
      </h3>

      <p className="text-lg md:text-xl text-yellow-900">
        Description of Short Title of result
      </p>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-2 mb-16">
      {[1, 2, 3, 4, 5].map((dot, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full bg-slate-400"
        ></div>
      ))}
    </div>

    {/* Partner & Trade Section */}
    <div
      className="
        grid 
        grid-cols-1 md:grid-cols-3 
        gap-12
        bg-white 
        p-10 md:p-14
        rounded-[28px]
        border-4 border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      "
    >
      {/* Column 1 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-black mb-2">
          Order <span className="text-red-600 underline">Products</span>
        </h3>

        <p className="text-lg leading-relaxed mb-6">
          As a professional you can order all Xtreme Kolorz products directly from the manufacturer.
          Request the current price list now.
        </p>

        <p className="text-lg font-medium">
          Sales Department <br />
          +91 777 50 777 52 <br />
          sales@kustomkoats.in
        </p>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-black mb-2">
          Partner <span className="text-red-600 underline">Program</span>
        </h3>

        <p className="text-lg leading-relaxed mb-6">
          For painting businesses, Xtreme Kolorz offers a partner program with special benefits and support.
          Request further information now.
        </p>

        <p className="text-lg font-medium">
          Business / PCA <br />
          +91 777 50 777 52 <br />
          partner@kustomkoats.in
        </p>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-black mb-2">
          Distribution <span className="text-red-600 underline">Trade</span>
        </h3>

        <p className="text-lg leading-relaxed mb-6">
          Wholesalers and specialized dealers can include Xtreme Kolorz products in their trade program. 
          Request more information now.
        </p>

        <p className="text-lg font-medium">
          Business / PCA <br />
          +91 777 50 777 52 <br />
          partner@kustomkoats.in
        </p>
      </div>

    </div>

  </div>
</section>


 {/* ============================
  SEARCH + FAQ SECTION (Sketch Style)
============================= */}
<section className="min-h-screen py-24 border-b border-slate-300">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Search Container */}
    <div
      className="
        bg-white 
        border-4 border-black 
        rounded-[28px]
        p-10 md:p-14 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        text-center
        mb-20
      "
    >
      <h2 className="text-2xl md:text-3xl font-black mb-10">
        Didn’t get What You are looking for
      </h2>

      {/* Search Input + Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <input
          className="
            w-full sm:w-96 
            border-4 border-black 
            rounded-full 
            px-6 py-3 
            text-lg font-medium 
            sketch-pattern-pink
            outline-none
          "
          placeholder="Search Here...."
        />

        <button
          className="
            px-10 py-3 
            bg-rose-300 
            border-4 border-black 
            rounded-full 
            text-lg font-bold
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:translate-y-1 transition-all
          "
        >
          Search
        </button>

      </div>
    </div>

    {/* FAQ Heading */}
    <h3 className="text-3xl md:text-4xl font-black mb-10">
      FAQ’s
    </h3>

    {/* FAQ Boxes */}
    <div className="space-y-6">

      {[
        "What are automotive pearls used for?",
        "Are your pigments compatible with all clear coats?",
        "Do Xtreme Kolorz pearls fade over time?",
        "Can I order bulk quantities for industrial use?",
      ].map((q, i) => (
        <div
          key={i}
          className="
            bg-rose-200 
            sketch-pattern-pink
            border-4 border-black 
            rounded-[22px]
            h-24 
            flex items-center px-8
            text-xl md:text-2xl font-semibold
            shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
          "
        >
          {q}
        </div>
      ))}

    </div>

  </div>
</section>


{/* ============================
  CONTACT / CTA (Sketch Style)
============================= */}
{/* ============================
  CONTACT / CTA (Sketch Style - Reduced HEIGHT)
============================= */}
<section className="py-16 border-b border-slate-300">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    {/* Form Container */}
    <div className="bg-white border-4 border-black rounded-[28px] p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
        Talk to our Sales Team
      </h2>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
        {/* Name */}
        <label className="text-lg md:text-xl font-semibold flex items-center">
          Name:
        </label>
        <input
          className="w-full border-4 border-black rounded-full px-5 py-2.5 text-lg sketch-pattern-pink outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          placeholder="Enter Your Name..."
        />

        {/* Phone */}
        <label className="text-lg md:text-xl font-semibold flex items-center">
          Phone No:
        </label>
        <input
          className="w-full border-4 border-black rounded-full px-5 py-2.5 text-lg sketch-pattern-pink outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          placeholder="Enter Your Phone No..."
        />

        {/* Email */}
        <label className="text-lg md:text-xl font-semibold flex items-center">
          Email:
        </label>
        <input
          className="w-full border-4 border-black rounded-full px-5 py-2.5 text-lg sketch-pattern-pink outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          placeholder="Enter Your Email..."
        />

        {/* Message */}
        <label className="text-lg md:text-xl font-semibold flex items-center">
          Message:
        </label>
        <textarea
          rows="4"
          className="w-full border-4 border-black rounded-[22px] px-5 py-3 text-lg sketch-pattern-pink outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          placeholder="Enter Your Message..."
        ></textarea>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
