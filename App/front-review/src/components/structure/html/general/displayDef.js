import React from 'react';

function DisplayDefinition(props) {

  function createDef(){
    let result = [];
    for (let element in props.data) {
      result.push(
          <tr key = {element}>
            <td><span>{`${element}:`}</span></td>
            <td>{`${props.data[element]}`}</td>
          </tr>
        );
    }
    return result;
  }

  return (
     createDef()
  );
}

DisplayDefinition.defaultProps = {
  data: []
};

export default DisplayDefinition;
