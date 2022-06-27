import Link from "next/link";
import React from "react";

function WhoWeAre() {
  return (
    <div className="">
      <div className="md:max-w-6xl mx-auto pt-2 border-b pb-24">
        <div className="w-full flex items-center justify-center pt-12 pb-4">
          <button className="bg-red-500 px-8 py-4 rounded-full text-md text-white">
            Our Services
          </button>
        </div>
        <div className="w-full flex items-center justify-center pb-4">
          <p className="text-gray-700">
            Want to get a free consultation?
            <Link href="/" className="">
              <a
                href=""
                className="text-red-500 ml-2 text-md font-semibold underline"
              >
                Contact us
              </a>
            </Link>
          </p>
        </div>
        <div className="flex justify-between">
          {/* brief  */}
          <div className="w-2/4 py-16 pr-16">
            <h3 className="font-bold text-gray-800 text-4xl mb-16">
              We create experience that make people happy
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 text-md">
                Desert Seals is an award winning, full spectrum, security
                solutions provider, offering comprehensive security solutions
                across the Uganda.
              </p>
              <p className="text-gray-700 text-md">
                Our diverse portfolio includes clients from the industrial,
                commercial and financial sectors with individually unique
                requirements, all served with equal expertise.
              </p>
              <p className="text-gray-700 text-md">
                Our Uganda Security certified Security Institute empowers our
                security guards to handle their day-to-day duties in a competent
                and responsible manner.
              </p>
            </div>
            <Link href="/" className="">
              <a
                href=""
                className="text-red-500 text-md font-semibold underline"
              >
                learn more
              </a>
            </Link>
          </div>
          {/* call back form  */}
          <div className="w-1/2 flex ml-10 rounded-lg relative">
            <img
              className="rounded-md self-end -ml-10"
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/7714766/pexels-photo-7714766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="absolute h-60 w-60 rounded-md top-10 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
