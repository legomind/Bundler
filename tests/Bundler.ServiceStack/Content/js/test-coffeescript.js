(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.doCoffeeScript = function(el) {
    return el.style.backgroundColor = 'green';
  };

}).call(this);
