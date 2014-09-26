(function() {
  window.UI = {};

  UI.openTab = function(element, template) {
    $(".nav li.active").removeClass("active");
    $(element).parent().addClass("active");
    return Helpers.loadTemplate(template);
  };

  UI.loadContent = function(element, filePath) {
    return $.get(filePath, function(data) {
      data = window.markdown.toHTML(data);
      return $(element).html(data);
    });
  };

  $(function() {
    return Helpers.loadTemplate("/templates/home.html");
  });

}).call(this);
