import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: "Nairobi" },
    { id: 2, title: "Mombasa" },
    { id: 3, title: "Naivasha" },
    { id: 4, title: "Garissa" },
  ];

  return (
    // loop over cities array
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          className="text-white text-lg font-medium"
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
