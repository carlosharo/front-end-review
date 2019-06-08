import React, { Component } from 'react';
import frontEnd from '../../common/constDefinitions';
import DisplayDefinition from './general/displayDef';
import codeImage from '../../common/assets/canvasCode.png';

class Graphics extends Component {

  componentDidMount(){
    let element = document.getElementById("canvasExample");
    let ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 *Math.PI);
    ctx.stroke();
  }

  render(){
    return (
      <div className = "document">
      <h1>HTML5 Graphics</h1>
      <hr />

      <div className="html5-introduction">
      <section>
        <article>
          HTML5 allows us to include graphics by using svg and canvas tags
        </article>
      </section>
      </div>

      <hr />
      <h3>Result and Code Example</h3>
      <hr />

      <div className="example">

        <div className="result">
          <section>
            <article>
              <h3>SVG</h3>
              <svg width="200" height="200" xmlns="http://www.w3.org.2000/svg">
                <circle cx="100" cy="100" r="100" style={{'fill': '#adafb2'}}/>
                <rect x="30" y="30" width="140" height="140" style={{'fill': '#5489a5', 'stroke': "#fff", 'strokeWidth':"2"}}/>
                <polygon points="100,10 40,185 190,65 10,65 160,185" style={{'fill': '#000', 'stroke': "#fff", 'strokeWidth':"2"}} />
              </svg>
            </article>
          </section>
        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <div className="example">

        <div className="result">
          <section>
            <article>
              <h3>canvas</h3>
              <canvas id="canvasExample" width="200" height="100" style={{'border':'1px', 'solid':'#15c'}} >
                Your browser does not support HTML5 canvas tag.
              </canvas>
            </article>
          </section>
        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <hr/>

      <div className="displayDefinition">
        <table>
        <tbody>
          <DisplayDefinition data={frontEnd.HTML5.graphics} />
        </tbody>
        </table>
      </div>

      </div>
    );
  }
}

export default Graphics;
