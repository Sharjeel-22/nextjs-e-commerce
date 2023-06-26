import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Red', value: 12 },
  { name: 'Blue', value: 19 },
];

const COLORS = [ 'yellow', 'purple'];

const PieChartComponent = (props:any) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
