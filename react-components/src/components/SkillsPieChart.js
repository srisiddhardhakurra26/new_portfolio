import React from 'react';
import LuxuryPieChart from './LuxuryPieChart';

const SkillsPieChart = () => {
  const skillData = [
    { name: 'Backend Developer', value: 0.6, color: '#fff9c4' },  // Yellow
    { name: 'Frontend Developer', value: 0.4, color: '#f9fbe7' }  // Light green
  ];

  return (
    <div className="skills-pie-chart">
      <h2 className="text-3xl font-bold mb-6 text-center">I'm a</h2>
      <div className="pie-chart-container" style={{ width: '100%', maxWidth: '800px', margin: '2rem auto' }}>
        <LuxuryPieChart data={skillData} />
      </div>
    </div>
  );
};

export default SkillsPieChart;