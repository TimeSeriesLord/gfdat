function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function properCounty (county) {
  if (typeof countiesLookup[county] !== 'function') {
    return toTitleCase(county);
  }
  return countiesLookup[county]();
}


