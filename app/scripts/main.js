(function() {
  window.UI = {};

  UI.openTab = function(element, template) {
    $(".main-menu-item.active").removeClass("active");
    $(element).parents(".main-menu-item").addClass("active");
    return Helpers.loadTemplate(template);
  };

  UI.loadContent = function(filePath) {
    var section, _i, _len, _ref;
    _ref = ["oben", "links", "mitte", "rechts", "unten"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      section = _ref[_i];
      $("#" + section).html("");
    }
    return $.get(filePath, function(data) {
      var sections, text, _results;
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

  $(function() {
    return Helpers.loadTemplate("/templates/home.html");
  });

}).call(this);
