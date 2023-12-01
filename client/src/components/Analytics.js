```javascript
import React, { useEffect, useState } from 'react';
import { fetchAnalytics } from '../services/analytics';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    const data = await fetchAnalytics();
    setAnalyticsData(data);
  };

  return (
    <div id="analytics">
      {analyticsData ? (
        <div>
          <h2>Real-time Analytics</h2>
          <p>Post Popularity: {analyticsData.postPopularity}</p>
          <p>User Engagement: {analyticsData.userEngagement}</p>
          <p>Traffic Sources: {analyticsData.trafficSources}</p>
        </div>
      ) : (
        <p>Loading analytics...</p>
      )}
    </div>
  );
};

export default Analytics;
```