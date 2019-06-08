import React, {Component} from 'react';
import frontEnd from '../../../common/constDefinitions';
import codeImage from './assets/webStorageCode.png';
import DisplayDefinition from '../general/displayDef';

class WebStorage extends Component {

  constructor(props){
    super(props);
    this.state = {
        local: 0,
        session: 0,
    };
  }

  componentWillMount(){
    this.setState( {local: localStorage.clickcount || 0});
    this.setState( {session: sessionStorage.clickcount || 0});
  }

  setLocal = () =>{
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        this.setState({local: localStorage.clickcount});
      } else {
        localStorage.clickcount = 1;
        this.setState({local: localStorage.clickcount});
    }
  }

  clearLocal = () => {
    localStorage.removeItem('clickcount');
    this.setState( {local: localStorage.clickcount || 0});
  }

  setSession = () =>{
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        this.setState( {session: sessionStorage.clickcount});
      } else {
        sessionStorage.clickcount = 1;
        this.setState( {session: sessionStorage.clickcount});
    }
  }

  render(){
    return (
      <div className = "document">
      <h1> HTML5 - Web Storage</h1>
      <hr />

      <div className="html5-introduction">
      <section>
        <article>
        With web storage, web applications can store data locally within the user´s browser.<br/>
        Before HTML5, application data had to be stored in cookies, included in every server request. <br/>
        Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. <br/>
        Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
        </article>
      </section>
      </div>

      <hr/>
      <h3>Result and Code Example</h3>
      <hr />

      <div className="example">

        <div className="result center">
          <h5>Click on the button to encrease the counter</h5>

          <section className="local-storage">
            <label htmlFor="local">local storage</label>
            <button onClick={this.setLocal} id="local">Increase One</button><br/>
            <label htmlFor="local">reset counter</label>
            <button onClick={this.clearLocal} id="local">Reset</button><br/>
            <span>Counter: {this.state.local}</span>
          </section>

          <section className="session-storage">
            <label htmlFor="local">session storage</label>
            <button onClick={this.setSession} id="session">Increase One</button><br/>
            <span>Counter: {this.state.session}</span>
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
          <DisplayDefinition data={frontEnd.HTML5.webStorage} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default WebStorage;
