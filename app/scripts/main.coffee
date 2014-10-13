window.UI = {}

UI.openTab = (element, template) ->
  $(".main-menu-item.active").removeClass "active"
  $(element).parents(".main-menu-item").addClass "active"
  Helpers.loadTemplate template

UI.loadContent = (filePath) ->
  $.get filePath, (data) ->
    sections = Helpers.loadSections data
    for section, text of sections
      data = window.markdown.toHTML text
      $("#" + section).html data

$ ->
  Helpers.loadTemplate "/templates/home.html"