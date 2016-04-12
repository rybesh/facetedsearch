var settings =

// WARNING: Be careful with where you put curly brackets, square 
// brackets, colons, and commas in this file. You should make a
// copy of this example file so you can refer back to it if you
// get confused about what the structure of this file should be.

// Set the value of `resource` to the name of your resource.
// For example, if your `collection` element contains a series
// of `book` elements, you would change `item` to `book` here.

  { resource : 'item'

// Set the value of `facets` to a list of your enumerative facets.
// Each facet is specified by a pair of values, separated by a
// colon. The first value is the name of the property (i.e. XML
// element) in your vocabulary corresponding to your facet. The
// second value is how you want this facet to be titled in the
// HTML interface.

  , facets :
    { animal    : 'Animal'
    , continent : 'Continent'
    , language  : 'Programming Language'
    }

// OPTIONAL.
// Set the value of `numericfacets` to a list of your numeric
// facets. Each facet is specified by a pair of values, separated by a
// colon. The first value is the name of the property (i.e. XML
// element) in your vocabulary corresponding to your facet. NOTE: The
// values of this property must be plain old numbers (decimals or
// integers)! Currency symbols, units of measure, etc. will not
// work. The second value is how you want this facet to be titled in
// the HTML interface.

  , numericfacets :
    { age : 'Age' }

// OPTIONAL.
// By default, the values in your enumerative facets will be listed in
// alphabetical order in the HTML interface. If you want (some subset
// of) them listed in a different order, set the value of `facetsort`
// to a list of pairs of values, where the first value is the name of
// the property for the facet, and the second value is a list of
// values in the order you would like them to be listed.

  , facetsort :
    { continent : [ 'North America', 'South America' ] }

// OPTIONAL.
// If your resources have names, set the value of `name` to either:
//
// 1) The name of the naming property. For example, if your resource
//    descriptions look like this:
//      <book>
//        <title>Moby Dick</title>
//      </book>
//    ...then you could set `name` like this:
//      , name: 'title'
//
// OR
//
// 2) A list of naming properties. For example, here we have two 
//    sub-elements nested within a name element that we want to 
//    display as the resource name:

  , name : [ 'name.firstname', 'name.lastname' ]

// OPTIONAL.
// If your resources have descriptions, set the value of `description`
// to the name of the property holding the descriptive text.

  , description : 'description'

// OPTIONAL.
// If your resources have images, set the value of `image` to the name
// of the property holding the image URL.
//
//  , image : 'imageURL'

// OPTIONAL.
// If your resources have links, set the value of `link` to the name
// of the property holding the link URL.
//
//  , link : 'imageURL'

// OPTIONAL.
// If you want to be able to sort your resources by various values,
// set the value of `orderby` to a list of pairs of values. The first
// value in each pair is the name of the property or nested property
// to sort by. Note that if you specify a nested property you must put
// this value in quotes (see 'name.firstname' and 'name.lastname' in
// the example below). The second value in each pair is how you want
// this sorting option to appear in the HTML interface.

  , orderby :
    { 'name.firstname' : 'First name'
    , 'name.lastname'  : 'Last name'
    , age              : 'Age'
    , animal           : 'Animal'
    }

// Don't delete this closing bracket!
  }
