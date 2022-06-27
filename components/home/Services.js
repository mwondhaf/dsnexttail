import { faPersonMilitaryPointing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { sliderImages } from "../../data/dummyData";

function Services() {
  return (
    <div className="">
      <div className="md:max-w-6xl mx-auto flex justify-center p-2 sm:p-6 lg:px-8 h-16 md:h-24">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 ">
          {sliderImages.map((item) => {
            let icon;
            if (item.icon === "faPersonMilitaryPointing") {
              icon = faPersonMilitaryPointing;
            }
            return (
              <div key={item.id} className="p-10 border rounded-md">
                <div className="tex-center">
                  <h4 className="text-center text-md font-semibold text-red-900 mb-2">
                    {item.service}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
