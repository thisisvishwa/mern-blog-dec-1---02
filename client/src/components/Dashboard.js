```javascript
import React, { useEffect, useState } from 'react';
import { fetchAnalytics } from '../services/analytics';

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    const data = await fetchAnalytics();
    setAnalyticsData(data);
  };

  return (
    <div id="dashboard">
      <h2>Dashboard</h2>
      <div>
        <h3>Real-time Analytics</h3>
        <p>Posts: {analyticsData.posts}</p>
        <p>Comments: {analyticsData.comments}</p>
        <p>Users: {analyticsData.users}</p>
        <p>Categories: {analyticsData.categories}</p>
        <p>Tags: {analyticsData.tags}</p>
      </div>
      <div>
        <h3>Quick Actions</h3>
        {/* Add quick action buttons here */}
      </div>
    </div>
  );
};

export default Dashboard;
```