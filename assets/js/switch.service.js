(function () {
	'use strict';

    angular
        .module('app')
        .factory('switchService', switchService);

    switchService.$inject = ['$http','$q'];
    function switchService($http,$q){
    	var service = {
    		index:index,
            update:update,
            destroy:destroy,
            create:create,
            getByType:getByType,
            start:start,
            shutdown:shutdown,
            startAll:startAll,
            getAllTypes:getAllTypes,

    	};
    	return service;

        function request(method, url, data){
            var deferred = $q.defer();

            $http({method: method, url: '/switch' + url, data: data})
              .success(function(data, status, headers, config){
                  deferred.resolve(data);
              })
              .error(function(data, status, headers, config){
                if(status === 400){
                  deferred.reject(data);
                }
              });

            return deferred.promise;
       
        }

        function index(){
            return request('GET','/index',{});
        }

        function getByType(Switch){
            return request('POST','/getByType',Switch);
        }
        function getAllTypes(){
        	return request('GET','/getAllTypes',{});

        }


        function update(Switch){
            return request('POST','/update',Switch);
        }

        function destroy(Switch){
            return request('POST','/destroy',Switch);
        }

        function create(Switch){
            return request('POST','/create',Switch);
        }


        function start(Switch){
            return request('POST','/start',Switch);
        }

        function shutdown(Switch){
            return request('POST','/shutdown',Switch);
        }
        function startAll(ArrayOfSwitch){
        	return request('POST','/startAll',ArrayOfSwitch);

        }




        /*
        function startAll(){
            return $http({method:'POST',url:'/switch/startAll'}).
            succes(function(data,status,headers,config){
                // this callback will be called asynchronously
                // when the response is available
            })
            .erro(function(data,status,headers,config){
                // this callback will be called asynchronously
                // when the response is available
            });

        }
        function shutdownAll(){
            return $http({method:'POST',url:'/switch/shutdownAll'}).
            succes(function(data,status,headers,config){
                // this callback will be called asynchronously
                // when the response is available
            })
            .erro(function(data,status,headers,config){
                // this callback will be called asynchronously
                // when the response is available
            });

        }


*/



    };
})();