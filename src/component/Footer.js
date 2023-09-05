import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faPinterestP,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="text-sm px-20 py-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="flex mt-5 space-x-8">
        <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-500  cursor-pointer" />
        <FontAwesomeIcon icon={faInstagram}  className="hover:text-fuchsia-600  cursor-pointer"/>
        <FontAwesomeIcon icon={faFacebook}  className="hover:text-blue-600  cursor-pointer"/>
        <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500  cursor-pointer"/>
        <FontAwesomeIcon icon={faPinterestP} className="hover:text-red-500  cursor-pointer"/>
        <FontAwesomeIcon icon={faTiktok} className="hover:text-slate-800  cursor-pointer"/>
      </div>
      <div className="grid grid-cols-4 gap-5 text-lg mt-10">
        <div>Company Info</div>
        <div>Help</div>
        <div>Legal</div>
        <div>Notable links</div>
      </div>
    </div>
  );
}

export default Footer;
