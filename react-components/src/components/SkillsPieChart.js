import React from 'react';
import LuxuryPieChart from './LuxuryPieChart';

const SkillsPieChart = () => {
  const skillData = [
    { name: 'Backend Developer', value: 0.6, color: '#fff9c4' },  // Yellow
    { name: 'Frontend Developer', value: 0.4, color: '#f9fbe7' }  // Light green
  ];

  return (
    <div className="skills-pie-chart" style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      <h2 className="text-3xl font-bold mb-6 text-center">I'm a</h2>
      <div 
        className="pie-chart-container" 
        style={{ 
          width: '100%',
          maxWidth: '600px', // Reduced from 800px to ensure it fits
          height: '500px', // Set explicit height
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible' // Allow chart to show fully
        }}
      >
        <LuxuryPieChart data={skillData} />
      </div>
    </div>
  );
};

export default SkillsPieChart;