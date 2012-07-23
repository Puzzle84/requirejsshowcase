requirejs.config({
    //By default load any module IDs from js/libs
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        libs: 'libs',
        app: 'app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/sub', 'showcase'],
function   ($, sub, showcase) {

    // JQuery, app/sub.js and showcase.js are now loaded and ready for use.
     $(function() {
        $('body').css({"background-color": "red"});
    });

    // create a new instance of showcase.
    var sc = new showcase.showcase();
    sc.log();
});