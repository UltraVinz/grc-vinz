
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, AlertCircle, Clock, Search, Plus } from 'lucide-react';

const Compliance = () => {
  // Sample compliance frameworks
  const frameworks = [
    {
      id: '1',
      name: 'ISO 27001',
      description: 'Information Security Management',
      progress: 75,
      controls: 114,
      compliant: 86,
      nonCompliant: 10,
      inProgress: 18,
    },
    {
      id: '2',
      name: 'GDPR',
      description: 'Data Protection Regulation',
      progress: 60,
      controls: 87,
      compliant: 52,
      nonCompliant: 15,
      inProgress: 20,
    },
    {
      id: '3',
      name: 'SOC 2',
      description: 'Service Organization Controls',
      progress: 85,
      controls: 61,
      compliant: 52,
      nonCompliant: 3,
      inProgress: 6,
    },
    {
      id: '4',
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      progress: 80,
      controls: 42,
      compliant: 34,
      nonCompliant: 4,
      inProgress: 4,
    },
    {
      id: '5',
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      progress: 55,
      controls: 78,
      compliant: 43,
      nonCompliant: 22,
      inProgress: 13,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Compliance</h1>
          <p className="text-gray-500 mt-1">Monitor and manage regulatory compliance</p>
        </div>
        
        <Button>
          <Plus size={16} className="mr-2" />
          Add Framework
        </Button>
      </div>
      
      <div className="mb-6">
        <Tabs defaultValue="frameworks">
          <TabsList>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="controls">Controls</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
          </TabsList>
          <TabsContent value="frameworks" className="mt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search frameworks..."
                  className="pl-9"
                />
              </div>
              
              <Button variant="outline">
                Filter
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {frameworks.map((framework) => (
                <Card key={framework.id}>
                  <CardHeader>
                    <CardTitle>{framework.name}</CardTitle>
                    <CardDescription>{framework.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Compliance Status</span>
                          <span className="text-sm font-medium">{framework.progress}%</span>
                        </div>
                        <Progress value={framework.progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                          <CheckCircle2 size={18} className="text-green-600 mb-1" />
                          <span className="text-sm font-medium text-green-600">{framework.compliant}</span>
                          <span className="text-xs text-green-600">Compliant</span>
                        </div>
                        
                        <div className="flex flex-col items-center p-2 bg-red-50 rounded-lg">
                          <AlertCircle size={18} className="text-red-600 mb-1" />
                          <span className="text-sm font-medium text-red-600">{framework.nonCompliant}</span>
                          <span className="text-xs text-red-600">Non-compliant</span>
                        </div>
                        
                        <div className="flex flex-col items-center p-2 bg-yellow-50 rounded-lg">
                          <Clock size={18} className="text-yellow-600 mb-1" />
                          <span className="text-sm font-medium text-yellow-600">{framework.inProgress}</span>
                          <span className="text-xs text-yellow-600">In progress</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Manage</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="controls">
            <div className="flex items-center justify-center h-[200px] bg-muted/30 rounded-lg">
              <div className="text-center">
                <h3 className="font-medium text-lg">Controls Management</h3>
                <p className="text-muted-foreground">This section is coming soon.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="assessments">
            <div className="flex items-center justify-center h-[200px] bg-muted/30 rounded-lg">
              <div className="text-center">
                <h3 className="font-medium text-lg">Compliance Assessments</h3>
                <p className="text-muted-foreground">This section is coming soon.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="evidence">
            <div className="flex items-center justify-center h-[200px] bg-muted/30 rounded-lg">
              <div className="text-center">
                <h3 className="font-medium text-lg">Evidence Repository</h3>
                <p className="text-muted-foreground">This section is coming soon.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Compliance;
