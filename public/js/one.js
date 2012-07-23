define(['two', 'exports'], function(two, exports) {
    function One() {
        this.doSomethingElse = function() {
            // new instance of two.js
            var dos = new two.two();

            return dos.getTitle();
        };
    }

    exports.one = One;
});