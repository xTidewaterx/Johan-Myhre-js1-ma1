//Question 1

var cat = { 
    "complain": "Meow!" };


    function catComplains () {
console.log(cat.complain);


    }

    catComplains ()




// Question 2 /3/4


function UpdateThatThing() {

    {
        var heading = document.querySelector ("h3");
        heading.innerHTML = "Updated heading";
        heading.style.color = "red";
        heading.style.fontSize= "2em";
        heading.className = "Subheading";   
     };
   }
   UpdateThatThing();
   






// Question 5
//when I write "document.querySelectorAll" nothing happens
{
    var paragraph = document.querySelector ("p");
  paragraph.style.color = "red";
}


//Question 6
function UpdateDiv () {
    {
var div = document.querySelector('div');
div.innerHTML += "New paragraph";
div.style.backgroundColor = "yellow";
};
}

UpdateDiv();

//Question 7

function loopCat (list) {

    
for (var i = 0; i <= [cats.length]; i++) {
	console.log(cats.age);
}




}

loopCat ()

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

