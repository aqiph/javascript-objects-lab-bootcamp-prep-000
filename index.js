let recipes = {};

//updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

//destructivelyUpdateObjectWithKeyAndValue(object, key, value)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

//