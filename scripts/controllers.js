function HelloCtrl($scope) {
	$scope.name = "bi an";
}

var myController = function($scope){
    $scope.userList = ['Rikky'];
    
    $scope.addNewUser = function(){      
      $scope.userList.push($scope.NewUser);
    };    
}

var myFireBaseController = function($scope){
    $scope.msg = 'Loading...';
    var messageRef = new Firebase('https://rikkydb.firebaseio.com/AngularDemoDb/message/');
    messageRef.on('value', function(snapshot){
        $scope.msg = snapshot.val();
        $scope.$apply(); // Thắc mắc chỗ này ư? Mình sẽ giải thích ngay sau đây!
    });
 
    $scope.updateMsg = function(){
        messageRef.set($scope.newMsg);
    }
};
 
 var myClockController = function ($scope) {
    $scope.timer = 1;
    $scope.count10 = function () {
        setInterval(function () {
            if (10 > $scope.timer) {
                $scope.timer++;
            } else {
                $scope.timer = 1;
            }
            $scope.$apply(); // Để đồng bộ được các giá trị bị thay đổi trong callback
        }, 1000);
    };
};
