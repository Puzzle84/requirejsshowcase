define(['two', 'exports'], function(two, exports) {
    function One() {
        this.doSomethingElse = function() {
            var dos = new two.two();
            return dos.getTitle();
        };
    }

    exports.one = One;
});