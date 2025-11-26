import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Landing Page</h1>

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
