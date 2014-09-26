window.UI = {}

UI.openTab = (element, template) ->
  $(".nav li.active").removeClass "active"
  $(element).parent().addClass "active"
  Helpers.loadContent template

$ ->
  Helpers.loadContent "/templates/home.html"