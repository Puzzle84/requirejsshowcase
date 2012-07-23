
define('app/sub',[],function() {
        //return an object to define the "app/sub" module.
        return {
            color: "blue",
            size: "large",
            showSub: function() {
            }
        };
    }
);
define('two',['one', 'exports'], function(one, exports) {
    function Two() {
        this.doSomething = function(){
            // create a new instance of one.
            var uno = new one.one();
            // circulare reference from: two.js to one.js and back to two.js
            return uno.doSomethingElse();
        };

        this.getTitle = function() {
            return 'RequireJS Roxxors';
        };
    }

    exports.two = Two;
});
define('one',['two', 'exports'], function(two, exports) {
    function One() {
        this.doSomethingElse = function() {
            // new instance of two.js
            var dos = new two.two();

            return dos.getTitle();
        };
    }

    exports.one = One;
});
define('showcase',["one", "two", "exports"], function(one, two, exports) {
    function Showcase(){
        this.log = function() {
            // create a new instance of two.js
            var dos = new two.two();

            // call dos.doSomething
            // circular reference: two.js calls one.js and one.js calls two.js
            console.log(dos.doSomething());
        };
    }

    exports.showcase = Showcase;
});
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
define("main", function(){});
