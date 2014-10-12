window.Helpers = {}

Helpers.loadTemplate = (name) ->
  $("#content").load name

Helpers.loadSections = (data) ->
  sections = {}
  sectionKeyIndex = data.indexOf("->") # '->' is the separator for sections
  if (sectionKeyIndex < 0)
    return {oben: data} # default section 'oben'
  loop
    sectionKeyEnd = data.indexOf("\n", sectionKeyIndex)
    if sectionKeyEnd < 0
      return sections # return if there is no content after the section tag
    sectionKey = $.trim(data.substring(sectionKeyIndex + 2, sectionKeyEnd)) # extract section key after the section separator till newline
    nextSectionIndex = data.indexOf("->", sectionKeyEnd)
    if (nextSectionIndex >= 0)
      sectionText = data.substring(sectionKeyEnd + 1, nextSectionIndex)
      sectionKeyIndex = nextSectionIndex
    else
      sectionText = data.substring(sectionKeyEnd + 1)
    sections[sectionKey] = sectionText
    if (nextSectionIndex < 0)
      return sections