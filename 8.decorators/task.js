const addThree = (a, b, c) => a + b + c;

function cachingDecoratorNew(func) {
  let cache = [];

  function add(...args) {
    const hash = args.toString();
    const findCache = cache.find(item => item.hash === hash);
    if (findCache) {
      console.log("Из кэша: " + findCache.value);
      return "Из кэша: " + findCache.value;
    }
    if (cache.length > 5) {
      cache.splice(0, 1);
    }
    let result = func(...args);
    cache.push(
      {
        hash: hash,
        value: result
      }
    );
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;    
  }
console.log(cache);
  return add;
}


function debounceDecoratorNew(func, ms) {
  let leading = false;
  let timeout;

  return function(...args) {
      if (!leading) {
          func.apply(this, args);
          leading = true;

          timeout = setTimeout(() => {
              leading = false;
          }, ms);
      } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
              func.apply(this, args);
          }, ms);
      }
  };
}

function debounceDecorator2(func, ms) {
  let leading = false;
  let timeout;

  function wrapper(...args) {
    wrapper.count += 1; 
      if (!leading) {
          func.apply(this, args);
          leading = true;

          timeout = setTimeout(() => {
              leading = false;
          }, ms);
      } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
              func.apply(this, args);
          }, ms);
      }
  };
  wrapper.count = 0;
  return wrapper;
}
