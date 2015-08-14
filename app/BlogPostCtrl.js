(function ()
{
    'use strict';
    function BlogPostCtrl(PostDAO)
    {
        var ctrl = this;
        var array;
        PostDAO.query().then(function(data){
            console.log(data);
            ctrl.posts = data;
        })
    }

    var module = angular.module('exerciseApp');
    module.controller('BlogPostCtrl', ['PostDAO', BlogPostCtrl]);
})();
