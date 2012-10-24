$(function(){
  if (! ('resource' in settings)) {
    return alert(
      'You must specify the name of your resource element in settings.js')
  }
  if (! ('facets' in settings)) {
    return alert(
      'You must specify your facets in settings.js')
  }
  var template = '' 
    , o = 
      { items : resources.collection[settings.resource]
      , facets : settings.facets
      , numFacets: {}
      , resultSelector   : '#results'
      , facetSelector    : '#facets'
      , paginationCount  : 50
      }
  if ('numericfacets' in settings) {
    o.numFacets = settings.numericfacets
  }
  if ('orderby' in settings) {
    o.orderByOptions = settings.orderby
  }
  if ('facetsort' in settings) {
    o.facetSortOption = settings.facetsort
  }
  if ('link' in settings) {
    template += '<a href="<%= obj.' + settings.link + ' %>">'
  }
  template += '<div class="item">';
  if ('image' in settings) {
    template += '<img src="<%= obj.' + settings.image + ' %>">'
  }
  if ('name' in settings) {
    if (! (settings.name instanceof Array))
      settings.name = [settings.name]
    template += ('<h4>'
      + _.map(settings.name, function (name) { 
          return '<%= obj.' + name + ' %>' 
        }).join(' ')
      + '</h4>')
  }
  template += ('<p class="tags">'
    + _.map(_.union(_.keys(o.facets), _.keys(o.numFacets)), function (facet) {
        return '<% if (obj.' + facet + ') {  %><%= obj.' + facet + ' %><% } %>'
      }).join(', ')
    + '</p>')
  if ('description' in settings) {
    template += '<p class="desc"><%= obj.' + settings.description + ' %></p>'
  }
  template += '</div>'
  if ('link' in settings) {
    template += '</a>'
  }
  o.resultTemplate = template
  // use them!
  $.facetelize(o);
});
