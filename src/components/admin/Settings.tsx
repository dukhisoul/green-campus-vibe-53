
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings2, 
  User, 
  Mail, 
  Lock, 
  Bell, 
  Globe, 
  Palette, 
  Database, 
  CloudUpload
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const AdminSettings = () => {
  const { toast } = useToast();
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [faviconFile, setFaviconFile] = useState<File | null>(null);
  
  const handleSaveGeneral = () => {
    toast({
      title: "Settings Saved",
      description: "Your general settings have been saved successfully.",
    });
  };
  
  const handleSaveAppearance = () => {
    toast({
      title: "Appearance Updated",
      description: "Your appearance settings have been saved successfully.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };
  
  const handleSaveAccount = () => {
    toast({
      title: "Account Updated",
      description: "Your account settings have been saved successfully.",
    });
  };
  
  const handleBackupDatabase = () => {
    toast({
      title: "Database Backup Started",
      description: "Your database backup is being processed.",
    });
  };
  
  const handleChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
      toast({
        title: "Logo Selected",
        description: "Click save to apply your changes.",
      });
    }
  };
  
  const handleChangeFavicon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFaviconFile(e.target.files[0]);
      toast({
        title: "Favicon Selected",
        description: "Click save to apply your changes.",
      });
    }
  };
  
  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your website settings and preferences.
        </p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 animate-scale-in">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" /> General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" /> Appearance
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" /> Account
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2">
            <Database className="h-4 w-4" /> Database
          </TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="general" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure general website settings like title, contact information, and social media.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="site_title">Site Title</Label>
                    <Input id="site_title" defaultValue="Green College" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site_tagline">Site Tagline</Label>
                    <Input id="site_tagline" defaultValue="Excellence in Education" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="site_description">Site Description</Label>
                    <Textarea 
                      id="site_description" 
                      rows={3}
                      defaultValue="Green College is a premier educational institution offering quality education since 1980."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_email">Contact Email</Label>
                    <Input id="contact_email" type="email" defaultValue="info@greencollege.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_phone">Contact Phone</Label>
                    <Input id="contact_phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Logo & Favicon</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="logo">Website Logo</Label>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                          {logoFile ? (
                            <img 
                              src={URL.createObjectURL(logoFile)} 
                              alt="Logo Preview" 
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <div className="flex items-center justify-center">
                              <Globe className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <Input 
                            id="logo" 
                            type="file" 
                            accept="image/*" 
                            onChange={handleChangeLogo} 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="favicon">Favicon</Label>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                          {faviconFile ? (
                            <img 
                              src={URL.createObjectURL(faviconFile)} 
                              alt="Favicon Preview" 
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <div className="flex items-center justify-center">
                              <Globe className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <Input 
                            id="favicon" 
                            type="file" 
                            accept="image/*" 
                            onChange={handleChangeFavicon} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Social Media</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="facebook">Facebook URL</Label>
                      <Input id="facebook" defaultValue="https://facebook.com/greencollege" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter URL</Label>
                      <Input id="twitter" defaultValue="https://twitter.com/greencollege" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram URL</Label>
                      <Input id="instagram" defaultValue="https://instagram.com/greencollege" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input id="linkedin" defaultValue="https://linkedin.com/company/greencollege" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveGeneral} className="animate-scale-in">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>
                  Customize the look and feel of your website.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Color Scheme</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-12 rounded-md bg-college-600"></div>
                      <div className="text-sm font-medium">Primary</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 rounded-md bg-college-200"></div>
                      <div className="text-sm font-medium">Secondary</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 rounded-md bg-college-900"></div>
                      <div className="text-sm font-medium">Dark</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 rounded-md bg-college-50 border"></div>
                      <div className="text-sm font-medium">Light</div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme Mode</h3>
                  <div className="flex items-center space-x-2">
                    <Switch id="dark-mode" />
                    <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="system-theme" defaultChecked />
                    <Label htmlFor="system-theme">Use System Theme</Label>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Homepage Layout</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="featured_section">Featured Section</Label>
                      <select 
                        id="featured_section" 
                        className="w-full bg-background border border-input rounded-md h-10 px-3 py-2 text-sm" 
                        defaultValue="announcements"
                      >
                        <option value="announcements">Latest Announcements</option>
                        <option value="events">Upcoming Events</option>
                        <option value="courses">Featured Courses</option>
                        <option value="news">College News</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max_featured">Items to Display</Label>
                      <select 
                        id="max_featured" 
                        className="w-full bg-background border border-input rounded-md h-10 px-3 py-2 text-sm" 
                        defaultValue="3"
                      >
                        <option value="3">3 Items</option>
                        <option value="4">4 Items</option>
                        <option value="6">6 Items</option>
                        <option value="8">8 Items</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveAppearance} className="animate-scale-in">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how you receive notifications and alerts from the system.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Announcements</p>
                        <p className="text-sm text-muted-foreground">Receive email when new announcements are published</p>
                      </div>
                      <Switch id="email_announcements" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Events</p>
                        <p className="text-sm text-muted-foreground">Receive email when new events are added</p>
                      </div>
                      <Switch id="email_events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Faculty Members</p>
                        <p className="text-sm text-muted-foreground">Receive email when new faculty are added</p>
                      </div>
                      <Switch id="email_faculty" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Courses</p>
                        <p className="text-sm text-muted-foreground">Receive email when new courses are added</p>
                      </div>
                      <Switch id="email_courses" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Alerts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Login Activity</p>
                        <p className="text-sm text-muted-foreground">Receive alerts for new login attempts</p>
                      </div>
                      <Switch id="alert_login" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Content Updates</p>
                        <p className="text-sm text-muted-foreground">Receive alerts when content is updated</p>
                      </div>
                      <Switch id="alert_content" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">System Maintenance</p>
                        <p className="text-sm text-muted-foreground">Receive alerts about scheduled maintenance</p>
                      </div>
                      <Switch id="alert_maintenance" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Delivery</h3>
                  <div className="space-y-2">
                    <Label htmlFor="notification_email">Notification Email</Label>
                    <Input id="notification_email" type="email" defaultValue="admin@greencollege.edu" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveNotifications} className="animate-scale-in">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account details and security preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input id="full_name" defaultValue="Admin User" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="admin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="admin@greencollege.edu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" value="Administrator" readOnly disabled />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current_password">Current Password</Label>
                      <Input id="current_password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new_password">New Password</Label>
                      <Input id="new_password" type="password" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="confirm_password">Confirm New Password</Label>
                      <Input id="confirm_password" type="password" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable 2FA</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="enable_2fa" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveAccount} className="animate-scale-in">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="database" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Database Management</CardTitle>
                <CardDescription>
                  Manage database backups and maintenance operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Database Backup</h3>
                  <p className="text-muted-foreground">
                    Create a backup of your database to prevent data loss.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button onClick={handleBackupDatabase} className="animate-scale-in">
                      <Database className="mr-2 h-4 w-4" /> Create Backup
                    </Button>
                    <Button variant="outline">
                      <CloudUpload className="mr-2 h-4 w-4" /> Schedule Automatic Backups
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Recent Backups</h3>
                  <div className="border rounded-md divide-y">
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Full Backup</p>
                        <p className="text-sm text-muted-foreground">May 3, 2025, 9:45 AM</p>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Full Backup</p>
                        <p className="text-sm text-muted-foreground">April 26, 2025, 10:30 AM</p>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Full Backup</p>
                        <p className="text-sm text-muted-foreground">April 19, 2025, 9:15 AM</p>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Database Optimization</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="outline">
                      Optimize Tables
                    </Button>
                    <Button variant="outline">
                      Repair Database
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
