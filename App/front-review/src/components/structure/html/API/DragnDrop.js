import React, {Component} from 'react';
import frontEnd from '../../../common/constDefinitions';
import codeImage from './assets/dragDropCode.png';
import dragImage from './assets/dragImage.png';
import DisplayDefinition from '../general/displayDef';
import './style/style.css';

class DnD extends Component {

  allowDrop = (ev) =>{
    ev.preventDefault();
  }

  drag = (ev)=> {
    ev.dataTransfer.setData("image", ev.target.id);
  }

  drop = (ev)=> {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
  }

  render(){
    return (
      <div className = "document">
      <h1>HTML5 - Drag and Drop</h1>
      <hr />

      <div className="html5-introduction">
      <section>
        <article>
        Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location. <br/>
        In HTML5, drag and drop is part of the standard: Any element can be draggable.
        </article>
      </section>
      </div>

      <hr/>
      <h3>Result and Code Example</h3>
      <hr />

      <div className="example">

        <div className="result center">
          <section className="dndContainer">
          <span>Drop de image inside box</span>
          <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} />
          <img id="drag1" alt="dragImage" src={dragImage} draggable="true" onDragStart={this.drag} />
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
          <DisplayDefinition data={frontEnd.HTML5.dragndrop} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default DnD;
