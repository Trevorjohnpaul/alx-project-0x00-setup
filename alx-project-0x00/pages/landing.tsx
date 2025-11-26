import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Small Buttons */}
      <Button title="Small Rounded" styles="px-2 py-1 rounded-sm" />
      <Button title="Small Full" styles="px-2 py-1 rounded-full" />
      <Button title="Small Large" styles="px-2 py-1 rounded-lg" /> {/* added */}
      {/* Medium Buttons */}
      <Button title="Medium Rounded" styles="px-4 py-2 rounded-md" />
      <Button title="Medium Full" styles="px-4 py-2 rounded-full" />
      <Button title="Medium Large" styles="px-4 py-2 rounded-lg" />
      {/*Buttons */}
      <Button title="Large Rounded" styles="px-6 py-3 rounded-md" />
      <Button title="Large Full" styles="px-6 py-3 rounded-full" />
      <Button title="Large Large" styles="px-6 py-3 rounded-lg" /> {/* added */}
    </div>
  );
};

export default Landing;
