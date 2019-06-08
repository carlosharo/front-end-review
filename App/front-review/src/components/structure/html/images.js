import React from 'react';
import frontEnd from '../../common/constDefinitions';
import codeImage from '../../common/assets/imageFormat.png';
import htmlImage from '../../common/assets/HTML5_Logo.png';
import DisplayDefinition from './general/displayDef';

function ImagesFormat(props) {
  return (
    <div className = "document">
    <h2>Images + formatting</h2>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
        The “img” tag is used to add images on a webpage.The “img” tag is an empty tag, which means it can contain only a list of attributes and it has no closing tag.
      </article>
    </section>
    </div>

    <hr/>
    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result">
        <img src={htmlImage}  width="200px" height="200px" alt="html5" vspace="20px"/>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <hr/>

    <div className="displayDefinition">
      <table>
      <caption>Attributes</caption>
        <tbody>
        <DisplayDefinition data={frontEnd.HTML5.images}/>
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default ImagesFormat;
