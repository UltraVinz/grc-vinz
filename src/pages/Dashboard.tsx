
import React from 'react';
import { Shield, AlertTriangle, ClipboardCheck, FileText } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import RiskSummary from '@/components/dashboard/RiskSummary';
import ComplianceStatus from '@/components/dashboard/ComplianceStatus';
import TaskList from '@/components/dashboard/TaskList';

const Dashboard = () => {
  // Sample data
  const riskData = [
    { name: 'High', value: 8, color: '#E63946' },
    { name: 'Medium', value: 15, color: '#FFA500' },
    { name: 'Low', value: 23, color: '#2A9D8F' },
  ];
  
  const complianceData = [
    { name: 'ISO 27001', compliant: 75, nonCompliant: 10, inProgress: 15 },
    { name: 'GDPR', compliant: 60, nonCompliant: 25, inProgress: 15 },
    { name: 'SOC 2', compliant: 85, nonCompliant: 5, inProgress: 10 },
    { name: 'HIPAA', compliant: 80, nonCompliant: 8, inProgress: 12 },
  ];
  
  const tasks = [
    {
      id: '1',
      title: 'Complete Q2 Risk Assessment',
      dueDate: '2025-04-15',
      priority: 'high',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Update Data Privacy Policy',
      dueDate: '2025-04-20',
      priority: 'medium',
      status: 'in-progress',
    },
    {
      id: '3',
      title: 'Review Access Controls',
      dueDate: '2025-04-12',
      priority: 'high',
      status: 'pending',
    },
    {
      id: '4',
      title: 'Complete Security Awareness Training',
      dueDate: '2025-04-30',
      priority: 'low',
      status: 'in-progress',
    },
  ] as const;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your GRC program</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Risks" 
          value="46" 
          change={-12} 
          icon={<Shield size={18} className="text-white" />} 
          iconColor="bg-grc-navy"
          borderColor="border-grc-navy/10"
        />
        <StatCard 
          title="High Risks" 
          value="8" 
          change={5} 
          icon={<AlertTriangle size={18} className="text-white" />} 
          iconColor="bg-grc-danger"
          borderColor="border-grc-danger/10"
        />
        <StatCard 
          title="Compliance Rate" 
          value="78%" 
          change={3} 
          icon={<ClipboardCheck size={18} className="text-white" />} 
          iconColor="bg-grc-success"
          borderColor="border-grc-success/10"
        />
        <StatCard 
          title="Policies" 
          value="24" 
          icon={<FileText size={18} className="text-white" />} 
          iconColor="bg-grc-teal"
          borderColor="border-grc-teal/10"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskSummary data={riskData} />
        <ComplianceStatus data={complianceData} />
      </div>
      
      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
