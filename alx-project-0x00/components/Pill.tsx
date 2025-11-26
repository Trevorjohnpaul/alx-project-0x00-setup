import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
      {title}
    </div>
  );
};

export default Pill;
