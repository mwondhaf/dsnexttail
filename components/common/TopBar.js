import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faPersonMilitaryPointing } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <div className="hidden bg-gray-800 md:block py-2">
      <div className="max-w-6xl mx-auto flex justify-end items-center">
        {/* social media icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/desertseals/">
            <FontAwesomeIcon icon={faYoutube} size="lg" color="white" />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
