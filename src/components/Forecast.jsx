import React from "react";
import { iconUrlFromCode } from "./services/WeatherService";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
        <hr className="my-2" />

        <div className="flex flex-rpw items-center justify-between text-white">
          {items.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center "
              key={index}
            >
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                alt=""
                className="w-12 my-1"
              />
              <p className="font-medium">{`${item.temp.toFixed()}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
