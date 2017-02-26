app.controller("myCtrl", function($scope) {

	var listLength = 15;
	var flagsArray = ["flower","sun", "heart", "flash"];

	$scope.filterFlags = [{name: "flower", status: true },
						  {name: "sun", status: true },
						  {name: "heart", status: true },
						  {name: "flash", status: true }];
	
	$scope.leftColumnMas = [];
	$scope.rightColumnMas = [];

	for (var i = 0; i < listLength; i++) {		
		$scope.leftColumnMas.push( {
			name: "item1-name" + Math.floor((Math.random() * 100) + 1),
			flags: shuffleFlagsFromArray(flagsArray)
		});

		$scope.rightColumnMas.push( {
			name: "item2-name" + Math.floor((Math.random() * 100) + 1),
			flags: shuffleFlagsFromArray(flagsArray)
		});
	};	

	$scope.selectItem = function(item) {
		$scope.selectedItem = item;
	}

	$scope.isActive = function(item) {
        return $scope.selectedItem == item;
 	}

 	$scope.setSortOrder = function()
    {
    	$scope.sortOrder = $scope.sortByName ? 'name': '-name';        
    }

    $scope.changeStatus = function(item) {
    	for (var i = 0; i < $scope.filterFlags.length; i++) {
    		if ($scope.filterFlags[i].name == item.name) {
    			$scope.filterFlags[i].status = $scope.filterFlags[i].status == true ? false : true;
    			break;
    		}
    	};
    }

    $scope.isActiveFlag = function(item) {
        return item.status == true;
 	}

	//Функция для возвращения рандомных флагов из данных    
    function shuffleFlagsFromArray(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;	  
	  while (0 !== currentIndex) {	    
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;	    
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  var howMuchToChoose = Math.floor((Math.random() * 4) + 1);
	  return array.slice(0, howMuchToChoose);;
	}

});

(function(){
    $(window).on("load",function(){
        $(".panel-content").mCustomScrollbar();
    });
})();