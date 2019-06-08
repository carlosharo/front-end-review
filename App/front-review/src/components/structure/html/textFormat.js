import React from 'react';
import frontEnd from '../../common/constDefinitions';
import codeImage from '../../common/assets/textFormat.png';
import DisplayDefinition from './general/displayDef';

function TextFormat(props) {
  return (
    <div className = "document">
    <h2>Text formatting</h2>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
        HTML provides us with the ability for formatting text addding tags to make text, bold, italic, a quote notation and more.
      </article>
    </section>
    </div>

    <hr />
    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result">
        <section>
        <strong>Aenean tempus finibus tristique.</strong>
        Duis lorem urna, <em>tincidunt et posuere nec</em>, <i>euismod pellentesque tortor</i>.
        <blockquote>
        Curabitur pulvinar, elit sit amet interdum sagittis, tellus nibh dictum turpis, a <b>rutrum tellus massa et dolor</b>.
        </blockquote>
        <cite>- Fusce aliquam tortor eget ex pharetra, ac malesuada lorem luctus.</cite>
        <br />
        <pre>Vivamus sit amet tempor nisl, sit amet dapibus nulla.</pre>
        <q>Morbi fermentum eleifend odio</q>,<address>ut pulvinar massa interdum in.</address>
        <ins>Etiam vel augue cursus</ins>, <small>porta ipsum sit amet, tristique erat.</small>
        <code>Ut vitae molestie arcu.</code>
        <del>In hac habitasse platea dictumst.</del>
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <hr />

    <div className="displayDefinition">
      <table>
        <tbody>
        <DisplayDefinition data={frontEnd.HTML5.text} />
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default TextFormat;
