import React from 'react';
import html5 from '../../common/constDefinitions';
import codeImage from '../../common/assets/inputCode.png';
import CreateRows from './general/createRows';

function InputTypes(props) {
  return (
    <div className = "document">
      <h1>HTML5 Input Types</h1>
      <hr />

      <div className="html5-introduction">
      <section>
        <article>
          HTML5 added several new input types for color, date, email, month, number and more.<br/>
        </article>
      </section>
      </div>

      <hr />
      <h3>Result and Code Example</h3>
      <hr />

      <section className="example">

        <div className="result">
          <table>
          <tbody>
            <CreateRows data={html5.input}/>
          </tbody>
          </table>
        </div>

        <div className="code">
          <img src={codeImage} alt="alt"/>
        </div>

      </section>

    </div>
  );
}

export default InputTypes;
