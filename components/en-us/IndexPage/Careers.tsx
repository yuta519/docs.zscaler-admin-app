import NormalLists from "@/components/Atoms/NormalLists";
import TimeFlowChart from "@/components/Atoms/TimeFlowChart";

const Careers: React.VFC = () => {
  const title: string = "Careers";
  const lines: { emoji: string; description: string }[] = [
    {
      emoji: "computer",
      description: "Backend Engineer - 2 years",
    },
    {
      emoji: "building_construction",
      description: "Infra Engineer - 5 years",
    },
    {
      emoji: "lock",
      description: "Security Engineer - 5 years",
    },
  ];
  const careers: {
    name: string;
    isActive: boolean;
    title: string;
    startDate: string;
  }[] = [
    {
      name: "Innoscouter, Inc. (SideWork)",
      isActive: true,
      title: "Fullstack Engineer (both Frontend and Backend)",
      startDate: "Nov 2021 ~ ",
    },
    {
      name: "SoftBank Corp (MainWork)",
      isActive: true,
      title: "Security & Backend Engineer",
      startDate: "January 2021 ~",
    },

    {
      name: "QuickWork, Inc. (SideWork)",
      isActive: false,
      title: "Backend Engineer",
      startDate: "July 2021 ~ November 2021",
    },
    {
      name: "ITOCHU Techno-Solutions Corporation",
      isActive: false,
      title: "Security, Sales & Backend Engineer",
      startDate: "April 2017 ~ December 2020",
    },
    {
      name: "Interspace Co.,Ltd (Internship)",
      isActive: false,
      title: "Backend Engineer",
      startDate: "July 2015 ~ June 2016",
    },
  ];

  return (
    <div className="pb-4">
      <NormalLists title={title} lines={lines} />

      <div className="p-4 mt-4 ">
        <TimeFlowChart elements={careers} />
      </div>
    </div>
  );
};

export default Careers;
