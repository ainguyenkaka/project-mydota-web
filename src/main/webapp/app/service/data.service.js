(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$resource'];

    function DataService($resource) {
        var spreadsheetId = '1FpmP6K9Az1YQcrMckd1-isv5QRdL8E9JPT_QksfJ5Jg';
        var apiKey = 'AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I';

        function getApiEndpoint(sheetName, start, end) {
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '!' + start + '%3A' + end + '?key=' + apiKey;
        }

        var service = {
            getApiEndpoint: getApiEndpoint
        };
        return service;
    }
})();
