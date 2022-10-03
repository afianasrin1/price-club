import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AssignmentMarks = () => {
  const data = [
    { name: "shila", marks: 50, quize: 16 },
    { name: "nila", marks: 55, quize: 10 },
    { name: "kila", marks: 52, quize: 12 },
    { name: "bela", marks: 60, quize: 15 },
  ];
  return (
    <div>
      <LineChart width={500} height={400} data={data}>
        <Line type="monotone" dataKey="marks" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default AssignmentMarks;
