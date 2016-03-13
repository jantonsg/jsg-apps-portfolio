// AppDictionary.factory.js
/*
	AppDictionary:
		· map: 
		· list
*/
'use strict';

module.exports = AppDictionaryFactory;

/* @ngInject */
function AppDictionaryFactory(App){
    var self;

    var AppDictionaryFactory = {
        list: [],
        map: {},
        addAll: addAll,//(apps)
        getOrCreateApp: getOrCreateApp, //(appid)
    };
    self = AppDictionaryFactory;

    return AppDictionaryFactory;

    function addAll(apps){
        if (apps && apps.length > 0){
            apps.forEach(function(anApp){
                self.getOrCreateApp(anApp.appid).take(anApp);
            });
        }
    }

    function getOrCreateApp(appid){
    	var app = self.map[appid];
    	if (!app){
    		app = new App();
    		self.list.push(appid);
    		self.map[appid] = app;
    	}
    	return app;
    }
}