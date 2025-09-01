import React from 'react';
import AnimatedProgressCircles from './AnimatedProgressCircles';
import './SkillsPieChart.css';

const SkillsPieChart = () => {
  const skillData = [
    { name: 'Backend Developer', value: 0.6, color: '#FFD700' },
    { name: 'Frontend Developer', value: 0.4, color: '#B8860B' }
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
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background pattern */}
      <div style={{
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '800px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <AnimatedProgressCircles data={skillData} />
      </div>
    </div>
  );
};

export default SkillsPieChart;