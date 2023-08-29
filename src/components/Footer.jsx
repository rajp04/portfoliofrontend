import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-lg p-4 text-center text-white">
      Copyright © {currentYear} Raj Portfolio | All Rights reserved.
    </div>
  );
};

export default Footer;