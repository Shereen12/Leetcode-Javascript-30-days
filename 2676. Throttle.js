/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let storedArgs;
  let limit = null;
  let currentTimeOut = null;
  let firstCurrentTime = null;
  let called = false;
  return function(...args) {
      if (!firstCurrentTime) {
        firstCurrentTime = Date.now();
        limit = Date.now() + t;
        return fn(...args);
      }
      storedArgs = args;
      if(Date.now() < limit){
        clearTimeout(currentTimeOut);
        currentTimeOut = setTimeout(() => fn(...storedArgs), limit - Date.now() + 1);
        called = true;
      }
      else {
        if(called){
          limit += t;
        }
        called = false;
        if(limit < Date.now()) {
          limit = Date.now() + t;
          return fn(...storedArgs);
        }
        else {
          currentTimeOut = setTimeout(() => fn(...storedArgs), limit - Date.now() + 1);
          called = true;
        }
      }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
