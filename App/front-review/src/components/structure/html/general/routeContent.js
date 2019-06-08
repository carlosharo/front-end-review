import React from 'react';
import {
  DocumentStructure,
  TextFormat,
  Links,
  ImagesFormat,
  HTML5Semantic,
  InputTypes,
  Graphics,
  Multimedia,
  HTML5Geolocation,
  DnD,
  WebStorage,
  WebWorkers
} from '../index';

import StartMessage from './startMessage';

function RouteContent(props) {
  function createList(){
    switch (props.display) {
      case 'structure':
        return <DocumentStructure />;
      case 'text':
        return <TextFormat />;
      case 'links':
        return <Links />;
      case 'images':
        return <ImagesFormat />;
      case 'semantic':
        return <HTML5Semantic />;
      case 'input':
        return <InputTypes />;
      case 'graphics':
        return <Graphics/>;
      case 'multimedia':
        return <Multimedia />;
      case 'geolocation':
        return <HTML5Geolocation />;
      case 'dragndrop':
        return <DnD />;
      case 'webStorage':
        return <WebStorage />;
      case 'webWorkers':
        return <WebWorkers />;
      default:
        return <StartMessage />;
    }
  }

  return (
     createList()
  );
}

export default RouteContent;
