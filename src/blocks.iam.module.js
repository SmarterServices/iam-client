(function() {
    'use strict';

    angular.module('blocks.iam', [])
        .service('iamService', iamService);


    function iamService() {

        var self = this;
        self.processIamData = processIamData;
        self.authorize = authorize;
        self.getActionCriteria = getActionCriteria;


        function processIamData(iamData) {
            return iamModule.processIamData(iamData);
        }

        function authorize(resource, action, processedIam) {
            return iamModule.authorize(resource, action, processedIam);
        }

        function getActionCriteria(action, processedIam) {
            return iamModule.getActionCriteria(action, processedIam);
        }

    }

})();
