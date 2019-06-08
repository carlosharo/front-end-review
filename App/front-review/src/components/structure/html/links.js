import React from 'react';
import html5 from '../../common/constDefinitions';
import codeImage from '../../common/assets/links.png';

function Links(props) {
  return (
    <div className = "document">
    <h2>Links + formatting</h2>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
      It is a connection from one web resource to another
      <br/>
      Syntax:<br/>
      href : The href attribute is used to specify the destination address of the link used.<br/>
      Text link : The text link is the visible part of the link.
      </article>
    </section>
    </div>

    <hr />
    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result">

        <a href="example">hyperlink </a> {html5.href} <br/>

        <a href="mailto:">mailto</a> {html5.mailto} <br/>

        <a href="tel://###-###">tel</a> {html5.tel} <br/>

        <a href="name">name</a> {html5.name} <br/>

        <a href="#structure">Document structure</a> {html5.tagname} <br/>

      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    </div>
  );
}

export default Links;
