(function() {
  window.Helpers = {};

  Helpers.loadTemplate = function(name) {
    return $("#content").load(name);
  };

  Helpers.loadSections = function(data) {
    var nextSectionIndex, sectionKey, sectionKeyEnd, sectionKeyIndex, sectionText, sections;
    sections = {};
    sectionKeyIndex = data.indexOf("->");
    if (sectionKeyIndex < 0) {
      return {
        oben: data
      };
    }
    while (true) {
      sectionKeyEnd = data.indexOf("\n", sectionKeyIndex);
      if (sectionKeyEnd < 0) {
        return sections;
      }
      sectionKey = $.trim(data.substring(sectionKeyIndex + 2, sectionKeyEnd));
      nextSectionIndex = data.indexOf("->", sectionKeyEnd);
      if (nextSectionIndex >= 0) {
        sectionText = data.substring(sectionKeyEnd + 1, nextSectionIndex);
        sectionKeyIndex = nextSectionIndex;
      } else {
        sectionText = data.substring(sectionKeyEnd + 1);
      }
      sections[sectionKey] = sectionText;
      if (nextSectionIndex < 0) {
        return sections;
      }
    }
  };

}).call(this);
