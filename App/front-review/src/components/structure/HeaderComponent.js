import React from 'react';
import TopMenu from './html/general/TopMenu';

function HeaderComponent(props){
 return (
   <header className="header-menu">
     <TopMenu options={props.options} />
   </header>
 );
}

export default HeaderComponent;
