import React from 'react';

import { Link } from "react-router-dom";

function TopMenu(props){
 return (
   <nav className="top-menu-container">
     <ul>
       {props.options.map( (option, i) => <li key={i}><Link to={`/${option}`}>{option}</Link></li>)}
     </ul>
   </nav>
 );
}

TopMenu.defaultProps = {
  options: []
};

export default TopMenu;
