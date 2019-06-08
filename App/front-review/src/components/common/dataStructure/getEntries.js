/*
Takes an object and return an array with the object's keys
  object: object type
  return: array
*/

function getEntries(object){
  let keys = [];
  for (let [key] of Object.entries(object)) {
      keys.push(key);
  }
  return keys;
}

export default getEntries;
