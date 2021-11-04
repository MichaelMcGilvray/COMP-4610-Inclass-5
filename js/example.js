/*
Michael McGilvray
michael_mcgilvray@student.uml.edu
In-class exercise 5
*/

// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul");
if (ul.length > 0) {
    var li = document.createElement("li");
    li.innerHTML = "cream";
    ul[0].appendChild(li);
}

// ADD NEW ITEM START OF LIST
if (ul.length > 0) {
    var li = document.createElement("li");
    li.innerHTML = "kale";
    ul[0].prepend(li);
}

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var nodeList = ul[0].children;
for (var i = 0; i < ul[0].childElementCount; i++) {
    nodeList[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2 = document.getElementsByTagName("h2");
if (h2.length > 0 ) {
    var span = document.createElement("span");
    span.innerHTML = " " + nodeList.length;
    h2[0].appendChild(span);
}