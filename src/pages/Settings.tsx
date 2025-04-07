
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your GRC platform settings</p>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <Tabs defaultValue="general">
          <div className="border-b">
            <div className="p-4">
              <TabsList className="grid grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="p-6">
            <TabsContent value="general">
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-lg font-medium">Organization Settings</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Configure your organization profile and global settings
                  </p>
                </div>
                
                <Separator />
                
                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" defaultValue="Acme Corporation" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="technology">
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                        <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                        <SelectItem value="utc-0">UTC</SelectItem>
                        <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mm-dd-yyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                        <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Display Options</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-gray-500">
                        Enable dark mode interface
                      </p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="compact-view">Compact View</Label>
                      <p className="text-sm text-gray-500">
                        Reduce padding and spacing in tables and lists
                      </p>
                    </div>
                    <Switch id="compact-view" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="advanced-charts">Advanced Charts</Label>
                      <p className="text-sm text-gray-500">
                        Enable interactive and advanced chart features
                      </p>
                    </div>
                    <Switch id="advanced-charts" defaultChecked />
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="users">
              <div className="flex items-center justify-center h-[300px]">
                <div className="text-center">
                  <h3 className="font-medium text-lg">User Management</h3>
                  <p className="text-muted-foreground max-w-lg">
                    This section allows configuration of users, roles, and permissions.
                    Add team members and configure their access levels.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="flex items-center justify-center h-[300px]">
                <div className="text-center">
                  <h3 className="font-medium text-lg">Notification Settings</h3>
                  <p className="text-muted-foreground max-w-lg">
                    Configure email and in-app notifications for risks, compliance events,
                    policy updates, and task assignments.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations">
              <div className="flex items-center justify-center h-[300px]">
                <div className="text-center">
                  <h3 className="font-medium text-lg">Integrations</h3>
                  <p className="text-muted-foreground max-w-lg">
                    Connect your GRC platform with other tools and services such as JIRA,
                    Slack, Microsoft Teams, and more.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced">
              <div className="flex items-center justify-center h-[300px]">
                <div className="text-center">
                  <h3 className="font-medium text-lg">Advanced Settings</h3>
                  <p className="text-muted-foreground max-w-lg">
                    Configure advanced features like data retention, backups, API access,
                    and custom fields.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
