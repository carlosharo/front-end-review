import React, {Component} from 'react';
import frontLogos from '../common/assets/html5-js-css3-logo.png';
import reactLogo from '../common/assets/react-logo.png';

class HomeComponent extends Component {

  render(){
    return(
      <React.Fragment>
      <section className="home-container">
        <article>
          <img src={reactLogo} alt="reactLogo"/>
          <img src={frontLogos} alt="front-end"/>
          {this.props.message && <span>{this.props.message}</span>}
        </article>
      </section>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
