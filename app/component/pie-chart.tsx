import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';



const COLORS = [ 'yellow', 'purple'];

const PieChartComponent = (props:any) => {
  let data = props.data;
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
        {data.map((entry:any, index:any) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
