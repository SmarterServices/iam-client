(function() {
    'use strict';

    angular.module('blocks.iam')
        .service('iamService', iamService);


    iamService.$inject = ['localStorageService'];

    function iamService(localStorageService) {

        var self = this;
        self.processIamData = processIamData;
        self.authorize = authorize;
        self.getActionCriteria = getActionCriteria;


        var processedIamKey = 'processedIam';

        function processIamData(iamData) {
            var processedIamData = iamModule.processIamData(iamData);
            localStorageService.set(processedIamKey, processedIamData);
        }

        function authorize(resource, action ) {
            return iamModule.authorize(resource, action, getProcessedIamData());
        }

        function getActionCriteria(action, processedIam) {
            return iamModule.getActionCriteria(action, processedIam, getProcessedIamData());
        }

        function getProcessedIamData() {
            return localStorageService.get(processedIamKey).iam;
        }

    }

})();
