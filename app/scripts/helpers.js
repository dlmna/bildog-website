(function() {
  window.Helpers = {};

  Helpers.loadContent = function(name) {
    console.log(name);
    return $("#content").load(name);
  };

}).call(this);
