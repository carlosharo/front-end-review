import React from 'react';
import getEntries from '../../../common/dataStructure/getEntries';

/*
Takes an object and return a <li> list array with the object's keys
  object: object type
  return: array
*/

function CreateMenu(props) {
  return (
    getEntries(props.data).map( element => {
      return (
        <li key={element}>
          <button
            id={element}
            className="button"
            onClick={props.handleClick}>
            {`${element}`}
          </button>
        </li>
      );
    } )
  );
}

CreateMenu.defaultProps = {
  data: []
};

export default CreateMenu;
