var myapp = angular.module("myapp", ['ui.grid', 'ui.grid.edit']);
myapp.controller("myctrl", function ($scope, uiGridConstants) {
    var ab;
    $scope.emp = {};
    $scope.employee = [];
    
    $scope.countries = [{
        "name": "USA",
        "id": 1
      },{
        "name": "Canada",
        "id": 2
    }];
    $scope.states = [{
        "name": "Alabama",
        "id": 1,
        "countryId": 1
      }, {
        "name": "Alaska",
        "id": 2,
        "countryId": 1
      }, {
        "name": "Arizona",
        "id": 3,
        "countryId": 1
      }, {
        "name": "Alberta",
        "id": 4,
        "countryId": 2
      }, {
        "name": "British columbia",
        "id": 5,
        "countryId": 2
    }];
    
    $scope.updateCountry = function(){
        $scope.emp.country = $scope.country.name;
      $scope.availableStates = [];
      
      angular.forEach($scope.states, function(value){
        if(value.countryId == $scope.country.id){
          $scope.availableStates.push(value);
        }
      });
    }
    
    $scope.updateState = function(){
        $scope.emp.state = $scope.state.name;
    }
    
    
    $scope.employee = [
        {
            fname: "raman",
            lname: "chauhan",
            gender: "male",
            dept: "hr",
            phone: 9784561236,
            email: "abc@yahoo.in",
            sal: 50000,
            country: "India",
            state: "W.B.",
            city: "Kolkata",
            adr: "abc homes"
        },
        {
            fname: "harish",
            lname: "kumar",
            gender: "male",
            dept: "dev",
            phone: 9874563215,
            email: "qwerty@y.com",
            sal: 85000,
            country: "asd",
            state: "sasas",
            city: "xcy",
            adr: "def homes"
    }
        
];

    $scope.addRow = function (emp) {
        console.log(emp);
        $scope.employee.push(emp);

        $scope.emp = {};

    };
    $scope.update = function (emp) {
        $scope.employee[$scope.ab] = angular.copy(emp);

    };
    
    
    var columnDefs = [
        {
            field: 'fname',
            displayName: 'First Name',
            cellFilter: 'uppercase'
        },
        {
            field: 'lname',
            displayName: 'Last Name',
            cellFilter: 'uppercase'
        },
        {
            field: 'gender',
            displayName: 'Gender',
            cellFilter: 'uppercase'
        },
        {
            field: 'dept',
            displayName: 'Department',
            cellFilter: 'uppercase'

        },
        {
            field: 'phone',
            displayName: 'Phone'


        },
        {
            field: 'email',
            displayName: 'Email',
            cellFilter: 'lowercase'

        },
        {
            field: 'sal',
            displayName: 'Salary',

        },
        {
            field: 'country',
            displayName: 'Country',
            cellFilter: 'uppercase'

        },
        {
            field: 'state',
            displayName: 'State',
            cellFilter: 'uppercase'

        },
        {
            field: 'city',
            displayName: 'City',
            cellFilter: 'uppercase'

        },
        {
            field: 'adr',
            displayName: 'Adderess',
            cellFilter: 'uppercase'

        },
        {
            name: 'Action',
            cellEditableCondition: false,
            cellTemplate: '<button ng-click="grid.appScope.generateReport(row.entity,grid.renderContainers.body.visibleRowCache.indexOf(row))"> Modify </button>'
        }
    ];

    $scope.gridOptions = {
        data: 'employee',
        columnDefs: columnDefs
    };

    $scope.generateReport = function (data, index) {
        console.log(data, index);
        $scope.emp = angular.copy(data);
        $scope.ab = index;
    };

});
