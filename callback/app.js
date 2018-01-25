function placeOrder(orderNo)
{
    console.log("orderNo : "+ orderNo);
    serve(function(){console.log("finished"+ orderNo)});
}
function serve(fun)
{
    //console.log("in serve orderNo : "+ orderNo);
    setTimeout(fun,6000);
}
for (var index = 0; index < 5; index++) {
    placeOrder(index);
}

/*here output of all orders came @ same time. 
But it has to wait for 6sec for each order and then need to proceed for other rit??
this is call--- call back concept in Js acts as - threads running simultaniously.
JS make sure server is utilizing properly and does not get blocked / wait for something sitting idle.
*/