(function ()
{
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO)
    {
        var ctrl = this;
        //var array;
        AnnouncementDAO.query().then(function(data){
            console.log(data);
            ctrl.announcements = data;
        })
    }

    var module = angular.module('exerciseApp');
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO', AnnouncementListCtrl]);

})();
