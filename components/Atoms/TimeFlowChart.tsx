import React from "react";
import { useState } from "react";

import Modal from "@/components/Atoms/Modal";

interface element {
  name: string;
  isActive: boolean;
  title: string;
  duration: string;
}

interface Props {
  readonly elements: element[];
}

const Chart = ({ name, isActive, title, duration }: element) => {
  if (isActive) {
    return (
      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
            <i className="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-bold md:text-xl sm:text-base mb-1 text-gray-800">
            {name}
          </h3>
          <ul className="text-sm mb-1 text-gray-800">
            <li className="md:text-base sm:text-xs">{title}</li>
          </ul>
          <p className="leading-tight font-semibold text-justify w-full text-gray-600">
            {duration}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
            <i className="fas fa-exclamation-circle text-gray-400"></i>
          </div>
        </div>
        <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">
            {name}
          </h3>
          <ul className="text-sm mb-1 text-gray-400">
            <li className="md:text-base sm:text-xs">{title}</li>
          </ul>
          <p className="leading-tight text-justify">{duration}</p>
        </div>
      </div>
    );
  }
};

const TimeFlowChart: React.FC<Props> = ({ elements }: Props) => {
  return (
    <div className="flex flex-col md:grid grid-cols-12 text-gray-50 mt-3">
      {elements.map((element: element) => (
        <>
          <Chart
            key={element.name + "-chart"}
            name={element.name}
            isActive={element.isActive}
            title={element.title}
            duration={element.duration}
          />
          <Modal visibility={false} title={element.name} />
        </>
      ))}
    </div>
  );
};

export default TimeFlowChart;
