/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if (typeof obj === 'object') {
    if (!Array.isArray(obj)) {
      obj = Object.entries(obj);
      if (obj.length < 1) return true;
      return false;
    }
    if (Array.isArray(obj)) {
      if (obj.length < 1) return true;
      return false;
    }
  }
};