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
    logoSrc: string;
    isActive: boolean;
    title: string;
    modalElements: string[];
    duration: string;
  }[] = [
    {
      name: "Innoscouter, Inc. (SideWork)",
      logoSrc:
        "https://uploads-ssl.webflow.com/5f2a3f0114bd385b6d69f1ad/5fddc16b881adb5f7bd96daf_logo.png",
      isActive: true,
      title: "Fullstack Engineer (both Frontend and Backend)",
      modalElements: [
        "Developing SaaS for big companies (CRM)",
        "Fullstack Developer (both Frontend and Backend)",
        "Frontend: React / Typescript / MaterialUI / Styled Components",
        "Backedn: Ruby Hanami",
        "Infra: MySQL / Docker / AWS",
        "Nov 2021 ~ ",
      ],
      duration: "Nov 2021 ~ ",
    },
    {
      name: "SoftBank Corp (MainWork)",
      logoSrc:
        "https://group.softbank/sites/default/files/assets/img/philosophy/identity/logo.svg",
      isActive: true,
      title: "Security & Backend Engineer",
      modalElements: [
        "Developing toB Security Managed Services",
        "Security & Backend Developer",
        "Backend: Python",
        "Infra: MySQL / Docker / Linux / Pacemaker / ",
        "January 2021 ~",
      ],
      duration: "January 2021 ~",
    },

    {
      name: "QuickWork, Inc. (SideWork)",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklrqIuBQ5ScfanpIA2byDMHVnKJWhDEeWsA&usqp=CAU",
      isActive: false,
      title: "Backend Engineer",
      modalElements: [
        "Developing a web service backend",
        "Backend Developer",
        "Backend: Python",
        "Infra: PostgreSQL / Docker",
        "July 2021 ~ November 2021",
      ],
      duration: "July 2021 ~ November 2021",
    },
    {
      name: "ITOCHU Techno-Solutions Corporation",
      logoSrc:
        "https://www.nanotechexpo.jp/2020/main/nano_insight_japan/images/ctc/logo_ctc.png",
      isActive: false,
      title: "Security, Sales & Backend Engineer",
      modalElements: [
        "Deploying 3rd paryt Security products to customers and Developing security systems",
        "Backend Developer",
        "Backend: Python",
        "Infra: Linux / WinServer / AWS / Network",
        "April 2017 ~ December 2020",
      ],
      duration: "April 2017 ~ December 2020",
    },
    {
      name: "Interspace Co.,Ltd (Internship)",
      logoSrc: "https://www.interspace.ne.jp/img/common/header/IS_LOGO.svg",
      isActive: false,
      title: "Backend Engineer",
      modalElements: [
        "Developing a web site curates pets information",
        "Web Engineer",
        "Backend: PHP / Laravel / CodeIgniter",
        "Infra: PostgreSQL / Docker",
        "July 2015 ~ June 2016",
      ],
      duration: "July 2015 ~ June 2016",
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
