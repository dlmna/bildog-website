window.UI = {}


UI.openTab = (element, template) ->
  $(".main-menu-item.active").removeClass "active"
  $(element).parents(".main-menu-item").addClass "active"
  Helpers.loadTemplate template

UI.loadContent = (element, filePath) ->
  $.get filePath, (data) ->
    data = window.markdown.toHTML data
    $(element).html data

$ ->
  Helpers.loadTemplate "/templates/home.html"