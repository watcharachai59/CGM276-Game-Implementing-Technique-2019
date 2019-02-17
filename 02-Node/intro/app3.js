
var callback = function(param)
{
    console.log("Kiss ass : ",param)
}

function myFunction(param,func)
{
    func(param);
}

myFunction("Say",callback);