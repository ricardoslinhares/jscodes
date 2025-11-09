function deepComp(a, b) {
  if (a === b) {
    return true;
  }
  
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  
  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  
  if (aIsArray !== bIsArray) {
    return false;
  }
  
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    
    for (let i = 0; i < a.length; i++) {
      if (!deepComp(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  
  const bKeysSet = new Set(bKeys);
  
  for (let key of aKeys) {
    if (!bKeysSet.has(key)) {
      return false;
    }
    if (!deepComp(a[key], b[key])) {
      return false;
    }
  }
  
  return true;
};





let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false
