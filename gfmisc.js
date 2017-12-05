function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function properPlace (place) {

	if (typeof namesLookup[place] !== 'function') {
		if (place.includes("county")) {
			place  = place.substring(0,place.indexOf("county"));
			place += " county";
		}	
		return toTitleCase(place);
	}
	return namesLookup[place]();
}

function properCounty (county) {
  if (typeof countiesLookup[county] !== 'function') {
    return toTitleCase(county);
  }
  return countiesLookup[county]();
}

