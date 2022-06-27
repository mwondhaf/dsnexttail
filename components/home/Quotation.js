import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Quotation() {
  return (
    <div className="bg-gray-800 py-24">
      <div className="md:max-w-6xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-zinc-200 font-bold text-4xl">
            Do you want a quotation?
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="py-8 text-zinc-200 text-md">
            Let’s speak. Phone / Email us or use the contact form.
          </p>
        </div>
        <div className="flex justify-between bg-gray-600 w-1/2 mx-auto p-8 rounded-md space-x-10">
          {/* phone  */}
          <div className="div flex items-center">
            <FontAwesomeIcon icon={faPhone} color="yellow" size="lg" />
            <h3 className="text-zinc-200 mx-2">+256 771 123 4567</h3>
          </div>
          {/* email  */}
          <div className="div flex items-center">
            <FontAwesomeIcon icon={faEnvelope} color="yellow" size="lg" />
            <h3 className="text-zinc-200 mx-2">help@desertseals.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
