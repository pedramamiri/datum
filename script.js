var url = "http://api.dryg.net/dagar/v2.1/2015/01";
var listOfDagar;
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    listOfDagar = data;
    console.log(data);
    createListOfDagar();
});

function createListOfDagar() {
var d = new Date();
var day = d.getUTCDate();
Object.getOwnPropertyNames(listOfDagar.dagar[day]).forEach(
    function (val, idx, array) {
        var element = document.createElement('p');
        element.appendChild(document.createTextNode(val + ' -> ' + listOfDagar.dagar[day][val]));
        document.body.appendChild(element);
      /*console.log(val + ' -> ' + listOfDagar.dagar[day][val]);*/
    }
  );
}





