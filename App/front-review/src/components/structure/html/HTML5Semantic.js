import React from 'react';
import frontEnd from '../../common/constDefinitions';
//import './styles/semantic.css';
import DisplayDefinition from './general/displayDef';

function HTML5Semantic(props) {
  return (
    <div className = "document">
    <h2>HTML5 Semantic tags</h2>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
        HTML5 added new tags to define the structure and content of a web page, like section, article, header, footer and more.
      </article>
    </section>
    </div>

    <h3>Result and Code Example</h3>
    <hr />

    <div className="body">
    <header className="header-menu">
      <nav>
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      </nav>
    </header>
    <section>
      <article>
        <header>
          <h2>Learn HTML</h2>
          <small>Hyper Text Markup Language</small>
        </header>
        <p>Our free HTML tutorial for beginners will teach you HTML and how to create your website from the scratch. HTML isn´t difficult, so hoping you will enjoy learning.</p>
      </article>
      <article>
        <header>
          <h2>Start Quiz "HTML Basic"</h2>
          <small>You can test your HTML skills with W3docs Quiz.</small>
        </header>
        <p>You will get 5% for each correct answer for single choice questions. In multiple choice question it might be up to 5%. At the end of the Quiz, your total score will be displayed. Maximum score is 100%.</p>
      </article>
    </section>
    <aside>
      <h2>Our Books</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>PHP</p>
    </aside>
    <footer>
      <small>Company © W3docs. All rights reserved.</small>
    </footer>
    </div>

    <hr/>

      <div className="displayDefinition">
        <table>
        <tbody>
          <DisplayDefinition data={frontEnd.HTML5.semantic}/>
        </tbody>
        </table>
      </div>

    </div>
  );
}

export default HTML5Semantic;
