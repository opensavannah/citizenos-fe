angular
    .module('citizenos')
    .factory('Activity', ['$log', '$resource', 'sLocation', 'sAuth', function ($log, $resource, sLocation, sAuth) {
        $log.debug('citizenos.factory.Activity');

        var Activity = $resource(
            sLocation.getAbsoluteUrlApi('/api/topics/:topicId/activities'),
            {topicId: '@topicId'},
            {
                query: {
                    params: {topicId: '@topicId'},
                    isArray: true,
                    transformResponse: function (data, headerGetter, status) {
                        if (status > 0 && status < 400) { // TODO: think this error handling through....
                            var result = angular.fromJson(data).data;
                            result.forEach(function (activity) {
                                buildActivityString(activity);
                            });
                            console.log(result);
                            return result;
                        } else {
                            return angular.fromJson(data);
                        }
                    }
                }
            }
        );

        var buildActivityString = function (activity) {
            var keys = Object.keys(activity.data);
            var stringparts = [];
            console.log(activity);
            console.log(keys);
            if (keys.indexOf('actor') > -1) {
                console.log('ACTOR', Object.keys(activity.data['actor']));
                stringparts.push(activity.data['actor']['type']);
            }

            if (keys.indexOf('type') > -1) {
                stringparts.push(activity.data['type']);
            }

            if (keys.indexOf('object') > -1) {
                stringparts.push(activity.data['object']['@type']);
            }

            if (keys.indexOf('origin') > -1) {
                stringparts.push(activity.data['origin']['@type']);
            }
            if (keys.indexOf('target') > -1) {
                stringparts.push(activity.data['target']['@type']);
            }
            activity.string = stringparts.join('_').toUpperCase();;
        };

        return Activity;
    }]);