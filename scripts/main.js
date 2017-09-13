// Tasks:
// document.getElementById
// Find just the title
var title = document.getElementById('title')
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
var colorCount = 0;
title.style.color = colors[0];
//on title being clicked: log 'you done clicked it!'
title.addEventListener('click', function () {
  console.log('you done clicked it!');
  if (colorCount === colors.length - 1) {
    colorCount = 0;
  } else {
    colorCount++
  }
  title.style.color = colors[colorCount];
})

// Change the text of the title
title.textContent = 'Choose Your Magical Ingredients'
// title.innerHTML = 'Choose Your <b>Magical Ingredients</b>'
title.style.color = 'orange'
// Add a class to the title
title.className = 'princess-font'

// document.querySelectorAll
// Find all the list items
var allListItems = document.querySelectorAll('li')
// Find all list items of a specific list
// var plants = document.querySelector('.plants')
// Add a class of .green to all .plants list items
var plants = document.querySelectorAll('.plants li i')
for (var i = 0; i < plants.length; i++) {
  plants[i].className += ' green'
}
// Add a class of .blue to all .liquids list items
var liquids = document.querySelectorAll('.liquids li i')
for (var i = 0; i < liquids.length; i++) {
  liquids[i].className += ' blue'
}
// Add a class of .red to all .animal-parts list items
var animalParts = document.querySelectorAll('.animal-parts li i')
for (var i = 0; i < animalParts.length; i++) {
  animalParts[i].className += ' red'
}
var cCList = ['A','B','C','D','E','F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var selectedList = [];
var colorStr = "#"
var listItems = document.querySelectorAll('li');
var list = document.getElementById('itemsList');
var mainCont = document.getElementById('main-cont');
for (let i = 0; i < listItems.length; i++) {
  var selectedListText = "";
  let li = listItems[i];
  li.id = cCList[i % cCList.length];
  li.addEventListener('click', function (event) {
    console.log('clicky', event.target)
    if (selectedList.length > 5) {
      alert("6 item limit, buddy!");
    } else {
      selectedList.push(event.target.textContent);
      event.target.style.color = 'orange';
      event.target.className += ' selected';
      colorStr += event.target.id;
      console.log(colorStr);
    }
    selectedListText = selectedList.join(', ')
    list.textContent = selectedListText;
  })
}

var mixButton = document.getElementById('mix-button');

mixButton.addEventListener('click', function (event) {

  if (selectedList.length === 6) {
    mainCont.style.backgroundColor = `${colorStr}`;
    for (let i = 0; i < listItems.length; i++) {
      let li = listItems[i];
      li.className = "";
      li.style.color = "";
      colorStr = "#"
      selectedList = [];
    }
  }
})






// document.createElement
// Create a new ingredient from scratch!
// var li = document.createElement('li')
// li.textContent = 'Eye of Newt'
// Add it to one of the lists at the top
// var ul = document.querySelector('ul')
// ul.prepend(li)
// Add it to one of the lists at the bottom
// ul.append(li)
// Add it to one of the lists in the middle
// element.remove()
// Find and remove specific items
// document.querySelectorAll('li')[8].remove()
