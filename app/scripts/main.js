(function() {
  window.UI = {};

  UI.openTab = function(element, template) {
    $(".main-menu-item.active").removeClass("active");
    $(element).parents(".main-menu-item").addClass("active");
    return Helpers.loadTemplate(template);
  };

  UI.loadContent = function(filePath) {
    return $.get(filePath, function(data) {
      var section, sections, text, _results;
      sections = Helpers.loadSections(data);
      _results = [];
      for (section in sections) {
        text = sections[section];
        data = window.markdown.toHTML(text);
        _results.push($("#" + section).html(data));
      }
      return _results;
    });
  };

  UI.openDefaultTemplate = function(element, filePath) {
    UI.openTab(element, "/templates/default.html");
    return UI.loadContent(filePath);
  };

  $(function() {
    return Helpers.loadTemplate("/templates/home.html");
  });

}).call(this);
