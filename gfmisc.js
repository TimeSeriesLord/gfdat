function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function properCounty (condition) {
  if (typeof countiesLookup[condition] !== 'function') {
    return toTitleCase(condition);
  }
  return countiesLookup[condition]();
}


