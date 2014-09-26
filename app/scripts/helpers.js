(function() {
  window.Helpers = {};

  Helpers.loadTemplate = function(name) {
    return $("#content").load(name);
  };

}).call(this);
