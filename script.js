
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data=request.response
    var result=JSON.parse(data)
    for (var i of result){
    console.log(i.flag);
    }
}
// }
// {
//     var data=request.response
//     var result=JSON.parse(data)
//     for (var i of result){
//         console.log(i.name.common,i.region,i.subregion,i.population)
//     }
// }
