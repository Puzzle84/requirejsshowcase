define(['exports'], function(exports) {
    function Sub() {
        this.show = function() {
            return "BOOM NY SUB IN THE HOUSE!";
        };
    }

    exports.sub = Sub;
});