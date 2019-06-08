import React, {Component} from 'react';
import HomeComponent from '../../structure/HomeComponent';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
     };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <HomeComponent message={this.state.error.toString()}/>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
