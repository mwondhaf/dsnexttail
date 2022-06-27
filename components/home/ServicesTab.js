import {
  faBuildingShield,
  faCamera,
  faPersonMilitaryPointing,
  faShieldDog,
  faShieldVirus,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { sliderImages } from "../../data/dummyData";

function ServicesTab() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-6xl p-2 sm:p-6 lg:px-8 mx-auto h-14 flex justify-between items-center">
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faPersonMilitaryPointing}
            // color="white"
            className="text-red-400"
            size="2x"
          />
          <h4 className="ml-4 text-zinc-100 font-bold">Security Gards</h4>
        </div>
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faVideoCamera}
            // color="white"
            className="text-red-400"
            size="2x"
          />
          <h4 className="ml-4 text-zinc-100 font-bold">CCTV Survaillance</h4>
        </div>
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faShieldDog}
            // color="white"
            className="text-red-400"
            size="2x"
          />
          <h4 className="ml-4 text-zinc-100 font-bold">K9 Services</h4>
        </div>{" "}
        <div className="flex items-center ">
          <FontAwesomeIcon
            icon={faBuildingShield}
            // color="white"
            className="text-red-400"
            size="2x"
          />
          <h4 className="ml-4 text-zinc-100 font-bold">Cyber Security</h4>
        </div>
      </div>
    </div>
  );
}

export default ServicesTab;
