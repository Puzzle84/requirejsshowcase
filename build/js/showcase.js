define(["one", "two", "exports"], function(one, two, exports) {
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