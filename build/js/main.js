define("app/sub",[],function(){return{color:"blue",size:"large",showSub:function(){}}}),define("one",[],function(){return{color:"blue",size:"large"}}),define("two",[],function(){return{color:"red",size:"small"}}),define("showcase",["./one","./two"],function(e,t){return{color:"blue",size:"large",log:function(){console.log(e.color),console.log(t.size)}}}),requirejs.config({baseUrl:"js",paths:{libs:"../libs",app:"../app"}}),requirejs(["jquery","app/sub","showcase"],function(e,t,n){e(function(){e("body").css({"background-color":"red"})}),n.log()}),define("main",function(){})