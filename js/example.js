//Philip Yeh Inclass 5
// ADD NEW ITEM TO END OF LIST

var list = document.getElementsByTagName('ul')[0];
//https://www.w3schools.com/jsref/met_document_createtextnode.asp
var newElement = document.createElement('li');
var newElementText = document.createTextNode('cream')


newElement.appendChild(newElementText);
list.appendChild(newElement);

// ADD NEW ITEM START OF LIST
//https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-the-first-child

newElement = document.createElement('li');
newElementText = document.createTextNode('kale')
newElement.appendChild(newElementText);
list.appendChild(newElement, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var coolList = document.getElementsByTagName('li');


for(var i = 0; i < coolList.length; i++){

  coolList[i].className = 'cool'
}



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

  document.getElementsByTagName('h2')[0].innerHTML += '<span>' + coolList.length + '</span>'
