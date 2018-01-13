(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', '$anchorScroll', '$location','DataUtils','MapService'];

    function HomeController($scope, $state, $anchorScroll, $location,DataUtils,MapService) {
        var vm = this;
        vm.scrollTo = scrollTo;
        vm.popularMaps = [];

        loadPopularMaps();

        function scrollTo(id) {
            $location.hash(id);
            $anchorScroll();
        }
    
        function loadPopularMaps() {
            MapService.getPopularMap({}, onSuccess, onError);

            function onSuccess(data) {
                vm.popularMaps = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();
