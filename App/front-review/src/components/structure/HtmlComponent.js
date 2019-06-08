import React, {Component} from 'react';
import RouteContent from './html/general/routeContent';
import CreateMenu from './html/general/createMenu';
import frontEnd from '../common/constDefinitions';

class HtmlComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: ''
    };
  }

  handleClick = (e) => {
     this.setState({display: e.target.id});
   }

  render(){
    return(
      <React.Fragment>
      <section>
        <article>
          <RouteContent display={this.state.display}/>
        </article>
      </section>

      <aside className="menu-container">
        <h2>HTML5</h2>
        <ul>
          <CreateMenu
            data={frontEnd.HTML5}
            handleClick={this.handleClick}
          />
        </ul>
      </aside>
      </React.Fragment>
    );
  }
}

export default HtmlComponent;
