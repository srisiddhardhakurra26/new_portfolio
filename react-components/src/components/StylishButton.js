import React from 'react';
import './StylishButton.css';

const StylishButton = ({ label, href }) => {
  return (
    <a href={href} className="button-52" role="button" download>
      {label}
    </a>
  );
};

const DownloadButtons = () => {
  return (
    <div className="button-container">
      <StylishButton 
        label="Download PDF" 
        href="/Sri Siddhardha Kurra_Software Development_Engineer.pdf" 
      />
      <StylishButton 
        label="Download Word" 
        href="/Sri Siddhardha Kurra_Software Development_Engineer.docx" 
      />
    </div>
  );
};

export default DownloadButtons;