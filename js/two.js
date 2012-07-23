define(['one', 'exports'], function(one, exports) {
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