import { useState } from "react";

interface Props {
  readonly onChange: (arg0: string) => void;
}

const ProjectTypeTab = ({ onChange }: Props) => {
  const [projectType, setProjectType] = useState("private");
  const selected =
    "mr-2 inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500";
  const nonSelcted =
    "mr-2 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px justify-center">
        <li
          className={projectType === "private" ? selected : nonSelcted}
          onClick={() => {
            onChange("private");
            setProjectType("private");
          }}
        >
          Private
        </li>
        <li
          className={projectType === "work" ? selected : nonSelcted}
          onClick={() => {
            onChange("work");
            setProjectType("work");
          }}
        >
          Work / Group
        </li>
      </ul>
    </div>
  );
};

export default ProjectTypeTab;
