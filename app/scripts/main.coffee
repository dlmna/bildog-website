window.UI = {}

UI.openTab = (element, template) ->
  $(".nav li.active").removeClass "active"
  $(element).parent().addClass "active"
  Helpers.loadTemplate template

UI.loadContent = (element, filePath) ->
  $.get filePath, (data) ->
    data = window.markdown.toHTML data
    $(element).html data

$ ->
  Helpers.loadTemplate "/templates/home.html"