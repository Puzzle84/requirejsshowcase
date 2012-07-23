
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
            var uno = new one.one();
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
            var dos = new two.two();
            return dos.getTitle();
        };
    }

    exports.one = One;
});
define('showcase',["one", "two", "exports"], function(one, two, exports) {
    function Showcase(){
        this.log = function() {
            var dos = new two.two();
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
        libs: '../libs',
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/sub', 'showcase'],
function   ($, sub, showcase) {
    //jQuery and the app/sub module are all
    //loaded and can be used here now.
     $(function() {
        $('body').css({"background-color": "red"});
    });
     var sc = new showcase.showcase();
    sc.log();
});
define("main", function(){});
