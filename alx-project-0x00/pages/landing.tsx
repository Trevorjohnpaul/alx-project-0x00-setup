import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Landing Page</h1>

      <Card />
      <Card />
      <Card />

      <div className="flex flex-col gap-4 mt-4">
        /* Small buttons */
        <Button title="Small Rounded" styles="px-2 py-1 rounded-sm" />
        <Button title="Small Full" styles="px-2 py-1 rounded-full" />
        /* Medium buttons */
        <Button title="Medium Rounded" styles="px-4 py-2 rounded-md" />
        <Button title="Medium Full" styles="px-4 py-2 rounded-full" />
        /* Large buttons */
        <Button title="Large Rounded" styles="px-6 py-3 rounded-md" />
        <Button title="Large Full" styles="px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
