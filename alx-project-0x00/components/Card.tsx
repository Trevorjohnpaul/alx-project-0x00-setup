// Card.tsx
import React from "react";
import Pill from "./Pill"; // make sure the path is correct

const Card: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Card Title</h2>
      <p className="mb-2">This is a description inside the card.</p>
      <div className="flex gap-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
    </div>
  );
};

export default Card;
