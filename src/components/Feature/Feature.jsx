import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-6 w-6 text-blue-500 text-white" />
      <span className="text-white font-bold ml-2">{feature}</span>
    </div>
  );
};

export default Feature;
