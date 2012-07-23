//js/showcase.js now has some dependencies, a cart and inventory
//module in the same directory as showcase.js
define(["./one", "./two"], function(one, two) {
        //return an object to define the "js/showcase" module.
        return {
            color: "blue",
            size: "large",
            log: function() {
                console.log(one.color);
                console.log(two.size);
            }
        };
    }
);