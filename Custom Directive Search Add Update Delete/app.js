var myapp = angular.module("myapp", []);
    myapp.directive('userinfo', function() {
       return{
       restrict:'AE',
           replace:true,
              templateUrl:'N:\HireCraft\Rahul\Custom Directive Search Add Update Delete\hello.html'
       }
    });

    

myapp.controller("CompanyCtrl", function($scope) {
    var ab;
    $scope.cmp = {
        'id' : ''
    };
    
$scope.companies = [
                    {
                        'id' : 1,
                        'name':'HireCraft',
                        'employees':500,
                        'headoffice':'Banglore'
                    },
                    { 
                        'id' : 2,
                        'name':'Infosys Technologies',
                    	'employees': 125000,
                    	'headoffice': 'Bangalore'
                    },
                    { 
                        'id' : 3,
                        'name':'Cognizant Technologies',
	                   	'employees': 100000,
	                   	'headoffice': 'Chennai'
                    },
	               	{ 
                        'id' : 4,
                        'name':'Wipro',
		                 'employees': 115000,
		                 'headoffice': 'Hyderabad'
                    },
		         	{ 
                        'id' : 5,
                        'name':'Tata Consultancy Services (TCS)',
			           	'employees': 150000,
			           	'headoffice': 'Kolakta'
                    },
			     	{ 
                        'id' : 6,
                        'name':'HCL Technologies',
				    	'employees': 90000,
				    	'headoffice': 'Noida'
                    }
                  ];
    
$scope.addRow = function(cmp){
    //console.log($scope.ab + " i m id : ");
    if(angular.isDefined($scope.companies[$scope.ab])){
        if(angular.isDefined($scope.companies[$scope.ab].id) ){
            $scope.companies[$scope.ab] = angular.copy(cmp);
            $scope.ab = 500;
            $scope.cmp = {};
            return;
        }
    }
    
        $scope.cmp.id  = $scope.companies.length ;
        $scope.cmp.id++;
        $scope.companies.push(cmp);
        $scope.cmp = {};

	
};

$scope.edit = function(index){
   // console.log(index);
        $scope.cmp = angular.copy($scope.companies[index]);
        $scope.ab = index;
}
    
$scope.delete = function(index){
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.companies.splice( index, 1 );		
	};
    
    
});