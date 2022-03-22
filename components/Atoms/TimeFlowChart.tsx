import React from "react";
import { useState } from "react";

import Chart from "@/components/Atoms/Chart";
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

const TimeFlowChart: React.FC<Props> = ({ elements }: Props) => {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleOpenCareerDialog = (modalTitle: string) => {
    setModalVisibility(true);
    setSelectedCareer(modalTitle);
  };

  const handleCloseCareerDialog = () => {
    setModalVisibility(false);
    setSelectedCareer("");
  };

  return (
    <div className="flex flex-col md:grid grid-cols-12 text-gray-50 mt-3">
      {elements.map((element: element) => (
        <Chart
          key={element.name + "-chart"}
          name={element.name}
          isActive={element.isActive}
          title={element.title}
          duration={element.duration}
          onClick={handleOpenCareerDialog}
        />
      ))}
      <Modal
        visibility={modalVisibility}
        title={selectedCareer}
        onClose={handleCloseCareerDialog}
      />
    </div>
  );
};

export default TimeFlowChart;
