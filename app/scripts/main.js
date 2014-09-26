(function() {
  window.UI = {};

  UI.openTab = function(element, template) {
    $(".nav li.active").removeClass("active");
    $(element).parent().addClass("active");
    return Helpers.loadContent(template);
  };

  $(function() {
    return Helpers.loadContent("/templates/home.html");
  });

}).call(this);
