import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashbord = () => {

    
        const students =  [
          {
            "id": 1,
            "name": "John",
            "phy": 85,
            "chem": 90,
            "math": 75
          },
          {
            "id": 2,
            "name": "Alice",
            "phy": 78,
            "chem": 88,
            "math": 92
          },
          {
            "id": 3,
            "name": "Bob",
            "phy": 92,
            "chem": 85,
            "math": 80
          },
          {
            "id": 4,
            "name": "Emily",
            "phy": 70,
            "chem": 95,
            "math": 88
          },
          {
            "id": 5,
            "name": "Charlie",
            "phy": 88,
            "chem": 82,
            "math": 94
          },
          {
            "id": 6,
            "name": "Eva",
            "phy": 94,
            "chem": 91,
            "math": 78
          },
          {
            "id": 7,
            "name": "Daniel",
            "phy": 79,
            "chem": 86,
            "math": 90
          },
          {
            "id": 8,
            "name": "Grace",
            "phy": 85,
            "chem": 92,
            "math": 89
          },
          {
            "id": 9,
            "name": "Frank",
            "phy": 91,
            "chem": 78,
            "math": 84
          },
          {
            "id": 10,
            "name": "Helen",
            "phy": 83,
            "chem": 89,
            "math": 93
          },
          {
            "id": 11,
            "name": "George",
            "phy": 87,
            "chem": 94,
            "math": 81
          },
          {
            "id": 12,
            "name": "Isabel",
            "phy": 96,
            "chem": 80,
            "math": 87
          }
        ]
      
      
    return (
        <div>
            <LineChart width={1000} height={300} data={students}>
                <Line dataKey="phy"></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <Line stroke="#000" dataKey="chem"></Line>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>

            </LineChart>
            
        </div>
    );
};

export default Dashbord;