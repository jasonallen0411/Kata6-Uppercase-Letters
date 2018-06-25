$("#kataSix").click(function(){
var upArray = ["megan", "ralph", "bob", "lisa"];

function toUppercase(upArray) {
    return upArray.charAt(0).toUpperCase() + upArray.slice(1).replace(/ -/, ':');
}

var arrayUppercase = upArray.map(toUppercase);

$("#kataSixArea").html(arrayUppercase);
alert(arrayUppercase);

console.log(arrayUppercase);
});













