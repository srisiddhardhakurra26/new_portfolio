import React from 'react';

const Resume = ({ content }) => {
  return (
    <div className="resume-container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Resume;