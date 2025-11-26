import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 font-medium transition duration-200 hover:bg-blue-600 ${
        styles || ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
