define(["one", "two", "exports"], function(one, two, exports) {
    function Showcase(){
        this.log = function() {
            var dos = new two.two();
            console.log(dos.doSomething());
        };
    }

    exports.showcase = Showcase;
});