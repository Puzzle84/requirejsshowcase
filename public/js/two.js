define(['one', 'exports'], function(one, exports) {
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