

const once = (func) => {
  var ran = false;
  var memo;

  return function() {
    if (ran) return memo;
    ran = true;
    memo = func.apply(this, arguments);
    func = null;
    return memo;
  };
};

const init = () => {
  return console.info('initialized 🚀');
};

const initOnce = once(init)
initOnce(); // initialized 🚀
initOnce();
initOnce();