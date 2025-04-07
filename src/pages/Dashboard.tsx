import React from 'react';
import { Shield, AlertTriangle, ClipboardCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      priority: 'high' as const,
      status: 'pending' as const,
      category: 'risk' as const,
      description: 'Conduct comprehensive risk assessment for Q2 including all departments and update the risk register accordingly.',
      assignee: 'Risk Manager'
    },
    {
      id: '2',
      title: 'Update Data Privacy Policy',
      dueDate: '2025-04-20',
      priority: 'medium' as const,
      status: 'in-progress' as const,
      category: 'policy' as const,
      description: 'Review and update the data privacy policy to ensure compliance with the latest GDPR requirements.',
      assignee: 'Legal Counsel'
    },
    {
      id: '3',
      title: 'Review Access Controls',
      dueDate: '2025-04-12',
      priority: 'high' as const,
      status: 'pending' as const,
      category: 'compliance' as const,
      description: 'Review and validate access controls for critical systems as part of ISO 27001 compliance.',
      assignee: 'Security Officer'
    },
    {
      id: '4',
      title: 'Complete Security Awareness Training',
      dueDate: '2025-04-30',
      priority: 'low' as const,
      status: 'in-progress' as const,
      category: 'compliance' as const,
      description: 'Ensure all employees complete the required security awareness training module.',
      assignee: 'HR Manager'
    },
    {
      id: '5',
      title: 'Investigate Data Breach Incident',
      dueDate: '2025-04-10',
      priority: 'high' as const,
      status: 'in-progress' as const,
      category: 'incident' as const,
      description: 'Investigate the reported data breach incident in the marketing department and prepare an incident report.',
      assignee: 'Incident Response Team'
    }
  ];
  
  const handleTaskUpdate = (taskId: string, status: string) => {
    console.log(`Task ${taskId} status updated to ${status}`);
    // In a real application, this would update the task status in the database
  };

  const handleTaskAssign = (taskId: string, assignee: string) => {
    console.log(`Task ${taskId} assigned to ${assignee}`);
    // In a real application, this would update the task assignee in the database
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your GRC program</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/risk-assessment" className="block">
          <StatCard 
            title="Total Risks" 
            value="46" 
            change={-12} 
            icon={<Shield size={18} className="text-white" />} 
            iconColor="bg-grc-navy"
            borderColor="border-grc-navy/10"
          />
        </Link>
        <Link to="/incidents" className="block">
          <StatCard 
            title="Active Incidents" 
            value="5" 
            change={2} 
            icon={<AlertTriangle size={18} className="text-white" />} 
            iconColor="bg-grc-danger"
            borderColor="border-grc-danger/10"
          />
        </Link>
        <Link to="/compliance" className="block">
          <StatCard 
            title="Compliance Rate" 
            value="78%" 
            change={3} 
            icon={<ClipboardCheck size={18} className="text-white" />} 
            iconColor="bg-grc-success"
            borderColor="border-grc-success/10"
          />
        </Link>
        <Link to="/policies" className="block">
          <StatCard 
            title="Policies" 
            value="24" 
            icon={<FileText size={18} className="text-white" />} 
            iconColor="bg-grc-teal"
            borderColor="border-grc-teal/10"
          />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskSummary data={riskData} />
        <ComplianceStatus data={complianceData} />
      </div>
      
      <div>
        <TaskList 
          tasks={tasks} 
          showCategory={true}
          onTaskUpdate={(taskId, status) => console.log(`Task ${taskId} status updated to ${status}`)}
          onTaskAssign={(taskId, assignee) => console.log(`Task ${taskId} assigned to ${assignee}`)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
