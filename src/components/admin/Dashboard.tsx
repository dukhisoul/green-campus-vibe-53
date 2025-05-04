
import { Activity, Calendar, FileText, Users, BookOpen, Image, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock data for recent activity
const recentActivity = [
  {
    id: 1,
    action: "New announcement published",
    date: "10 minutes ago",
    user: "Admin",
  },
  {
    id: 2,
    action: "Event updated: Annual Career Fair",
    date: "2 hours ago",
    user: "Event Coordinator",
  },
  {
    id: 3,
    action: "New faculty member added",
    date: "Yesterday",
    user: "HR Manager",
  },
  {
    id: 4,
    action: "Course schedule updated",
    date: "2 days ago",
    user: "Registrar",
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Today: {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">54</div>
                <p className="text-xs flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3 w-3 mr-1" /> +5% from last month
                </p>
              </div>
              <div className="bg-college-100 dark:bg-college-800 p-3 rounded-full">
                <FileText className="h-6 w-6 text-college-600 dark:text-college-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Faculty Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">247</div>
                <p className="text-xs flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3 w-3 mr-1" /> +2% from last month
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">12</div>
                <p className="text-xs flex items-center text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3 w-3 mr-1" /> +15% from last month
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Active Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">143</div>
                <p className="text-xs flex items-center text-red-600 dark:text-red-400">
                  <TrendingDown className="h-3 w-3 mr-1" /> -3% from last month
                </p>
              </div>
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent activity and quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full flex items-center justify-start bg-college-600 hover:bg-college-700 text-white">
              <FileText className="mr-2 h-4 w-4" /> Create Announcement
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-start">
              <Calendar className="mr-2 h-4 w-4" /> Add New Event
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-start">
              <Users className="mr-2 h-4 w-4" /> Manage Faculty
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-start">
              <BookOpen className="mr-2 h-4 w-4" /> Add New Course
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-start">
              <Image className="mr-2 h-4 w-4" /> Upload to Gallery
            </Button>
          </CardContent>
        </Card>
        
        {/* Recent activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions taken by administrators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-college-900/50 transition-colors"
                >
                  <div className="bg-college-100 dark:bg-college-800/60 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-college-600 dark:text-college-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{activity.action}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {activity.user}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
