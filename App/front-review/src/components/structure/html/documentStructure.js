import React from 'react';
import frontEnd from '../../common/constDefinitions';
import codeImage from '../../common/assets/docStructure.png';
import DisplayDefinition from './general/displayDef';
import './styles/common.css';

function DocumentStructure(props) {
  return (
    <div className = "document" id="structure">
    <h2>Document Structure</h2>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
        Basic tags that can be used to create the structure of an HTML document.
      </article>
    </section>
    </div>

    <hr />
    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result">
        <h3> Lorem ipsum </h3>
        <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Pellentesque volutpat congue velit. <br />
        Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
        <hr />
        Cras sed erat sed risus fringilla sagittis. <br />
        Maecenas <span>quis arcu turpis.</span> <br />
        In pellentesque eget augue nec lacinia. <br />
        Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="alt"/>
      </div>

    </div>

      <hr />

    <div className="displayDefinition">
      <table>
      <tbody>
        <DisplayDefinition data={frontEnd.HTML5.structure}/>
      </tbody>
      </table>
    </div>

    </div>
  );
}

export default DocumentStructure;
