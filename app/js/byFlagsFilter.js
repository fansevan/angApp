app.filter("byFlagsFilter", function () {
  return function (items, filterFlags) {
  	var allowedFlags = [];
  	for (var i = 0; i < filterFlags.length; i++) {
  		if (filterFlags[i].status)
  			allowedFlags.push(filterFlags[i].name);
  	};

    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      for (var j = 0; j < allowedFlags.length; j++) {
      	if (item.flags.indexOf(allowedFlags[j]) != -1){
      		filtered.push(item);
      		break;
      	}
      };
    }
    return filtered;
  };
});