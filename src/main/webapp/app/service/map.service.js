(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('MapService', MapService);

    MapService.$inject = ['$resource','DataService'];

    function MapService($resource,DataService) {

        return $resource('', {}, {
            'getPopularMap': { method: 'GET', cache: true , url: DataService.getApiEndpoint('Map', 'A1', 'H10') }
        });

    }
})();
