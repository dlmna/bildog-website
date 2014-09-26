window.UI = {}

UI.openTab = (element, template) ->
  $(".nav li.active").removeClass "active"
  $(element).parent().addClass "active"
  Helpers.loadTemplate template

UI.loadContent = (element, filePath) ->
  $(element).parent().load(filePath)

$ ->
  Helpers.loadTemplate "/templates/home.html"