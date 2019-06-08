import React from 'react';
import htmlImage from '../../../common/assets/HTML5_Logo.png';
import './style/style.css';

function StartMessage(props) {
  return (
    <div className = "message-container">
      <hr />

      <div>
        <img src={htmlImage} alt="html5"/>
      </div>

    </div>
  );
}

export default StartMessage;
