
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

interface ComplianceStatusProps {
  data: {
    name: string;
    compliant: number;
    nonCompliant: number;
    inProgress: number;
  }[];
}

const ComplianceStatus: React.FC<ComplianceStatusProps> = ({ data }) => {
  return (
    <div className="grc-card h-full">
      <h3 className="grc-header">Compliance Status</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '6px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="compliant" name="Compliant" fill="#2A9D8F" />
            <Bar dataKey="nonCompliant" name="Non-Compliant" fill="#E63946" />
            <Bar dataKey="inProgress" name="In Progress" fill="#FFA500" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplianceStatus;
