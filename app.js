let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelectorAll('li.collection-item');

val = listItem;
// val = list;

//get child node

val = list.childNodes;

//get child elements node

val = list.children[0].children[0];
val = list.childElementCount;
//Get parent node

val = listItem.parentNode;
val = listItem.parentElement;
val = list.firstChild;

// Create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

li.appendChild(document.createTextNode('Hello World'));
//Create new link element
const link = document.createElement('a');

//Add class
link.className = ('delete-item secondary-content');
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// li.textContent = 'new li';
li.appendChild(link);
const li2 = document.createElement('li');
li2.className = 'collection-item';
li2.textContent = 'last item';
// li2.appendChild(document.createTextNode('last item'));
//Append li as a child to ul
document.querySelector('ul.collection').appendChild(li);
document.querySelector('ul.collection').appendChild(li2);
console.log(li2);
