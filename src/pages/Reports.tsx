
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  ComposedChart,
  Bar, 
  Pie, 
  Line, 
  Area,
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Download, FileText, Filter } from 'lucide-react';

const Reports = () => {
  // Sample data for charts
  const risksByCategory = [
    { name: 'Information Security', value: 18, color: '#0A2342' },
    { name: 'Compliance', value: 12, color: '#00A6A6' },
    { name: 'Operational', value: 8, color: '#2A9D8F' },
    { name: 'Financial', value: 5, color: '#F4A261' },
    { name: 'Strategic', value: 3, color: '#E63946' },
  ];

  const complianceOverTime = [
    { month: 'Jan', iso27001: 65, gdpr: 55, soc2: 70 },
    { month: 'Feb', iso27001: 68, gdpr: 59, soc2: 73 },
    { month: 'Mar', iso27001: 70, gdpr: 63, soc2: 78 },
    { month: 'Apr', iso27001: 75, gdpr: 60, soc2: 85 },
    { month: 'May', iso27001: 73, gdpr: 63, soc2: 83 },
    { month: 'Jun', iso27001: 78, gdpr: 68, soc2: 85 },
  ];

  const risksOverTime = [
    { month: 'Jan', low: 18, medium: 15, high: 10, total: 43 },
    { month: 'Feb', low: 20, medium: 14, high: 12, total: 46 },
    { month: 'Mar', low: 22, medium: 16, high: 10, total: 48 },
    { month: 'Apr', low: 23, medium: 15, high: 8, total: 46 },
    { month: 'May', low: 22, medium: 14, high: 7, total: 43 },
    { month: 'Jun', low: 23, medium: 15, high: 8, total: 46 },
  ];

  const policyCompliance = [
    { name: 'Information Security', compliance: 92 },
    { name: 'Data Protection', compliance: 85 },
    { name: 'Acceptable Use', compliance: 78 },
    { name: 'Password Policy', compliance: 95 },
    { name: 'BYOD Policy', compliance: 70 },
    { name: 'Clean Desk', compliance: 65 },
  ];

  // List of available reports
  const reports = [
    { id: '1', name: 'GRC Dashboard Report', type: 'Dashboard', updated: '2025-04-01', format: 'PDF' },
    { id: '2', name: 'Risk Assessment Summary', type: 'Risk', updated: '2025-03-15', format: 'Excel' },
    { id: '3', name: 'Quarterly Compliance Report', type: 'Compliance', updated: '2025-04-03', format: 'PDF' },
    { id: '4', name: 'Policy Effectiveness Report', type: 'Policy', updated: '2025-03-22', format: 'PDF' },
    { id: '5', name: 'Audit Findings Report', type: 'Audit', updated: '2025-02-28', format: 'PDF' },
    { id: '6', name: 'Executive Summary', type: 'Executive', updated: '2025-04-05', format: 'PowerPoint' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-gray-500 mt-1">Analytics and reporting on GRC activities</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button>
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Risks by Category</CardTitle>
                <CardDescription>Distribution of risks across categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={risksByCategory}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {risksByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value} risks`, 'Count']} 
                        contentStyle={{ borderRadius: '6px' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Compliance Over Time</CardTitle>
                <CardDescription>Compliance percentage by framework</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={complianceOverTime}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Compliance']}
                        contentStyle={{ borderRadius: '6px' }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="iso27001" 
                        name="ISO 27001" 
                        stroke="#0A2342" 
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="gdpr" 
                        name="GDPR" 
                        stroke="#00A6A6" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="soc2" 
                        name="SOC 2" 
                        stroke="#2A9D8F" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk Trends</CardTitle>
                <CardDescription>Number of risks by severity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={risksOverTime}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip contentStyle={{ borderRadius: '6px' }} />
                      <Legend />
                      <Bar dataKey="low" name="Low Risk" stackId="a" fill="#2A9D8F" />
                      <Bar dataKey="medium" name="Medium Risk" stackId="a" fill="#FFA500" />
                      <Bar dataKey="high" name="High Risk" stackId="a" fill="#E63946" />
                      <Line 
                        type="monotone" 
                        dataKey="total" 
                        name="Total Risks" 
                        stroke="#0A2342" 
                        strokeWidth={2}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Policy Compliance</CardTitle>
                <CardDescription>Compliance rate by policy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={policyCompliance}
                      layout="vertical"
                      margin={{
                        top: 10,
                        right: 30,
                        left: 30,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={100}
                        tick={{ fontSize: 12 }} 
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Compliance Rate']}
                        contentStyle={{ borderRadius: '6px' }}
                      />
                      <Bar 
                        dataKey="compliance" 
                        name="Compliance Rate" 
                        fill="#00A6A6" 
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b">
              <h3 className="font-medium">Saved Reports</h3>
            </div>
            
            <div className="divide-y">
              {reports.map((report) => (
                <div key={report.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-gray-400" />
                    <div>
                      <h4 className="font-medium">{report.name}</h4>
                      <p className="text-sm text-gray-500">
                        {report.type} • Last updated: {report.updated} • {report.format}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="custom" className="mt-6">
          <div className="flex items-center justify-center bg-muted/30 rounded-lg p-8">
            <div className="text-center max-w-md">
              <h3 className="font-medium text-lg mb-2">Custom Report Builder</h3>
              <p className="text-muted-foreground mb-6">
                Create custom reports with specific metrics, time periods, and visualization options.
              </p>
              <Button>Create Custom Report</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
