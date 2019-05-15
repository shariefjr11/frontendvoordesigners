/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var dragElementen = document.querySelector('muziek');

function handelDragStart(e) {
  // Target (this) element is the source node.
  dragElementen = this;
}
function handelDragOver(e) {
    //NODIG! Deze code staat je toe om te kunnen droppen!//
  if (e.preventDefault) {
    e.preventDefault(); 
  }
}
function handelDrop(e) {
  // this/e.target is current target element.

  // Don't do anything if dropping the same song we're dragging.
  if (dragElementen != this) {
    // Set the source songs HTML to the HTML of the column we dropped on.
    //this.innerHTML = e.dataTransfer.getData('text/html');
    
    //Zodra het element wordt gedragd wordt er een kopie gemaakt van het element en bij het loslaten wordt de originele verwijderd//  
    this.parentNode.removeChild(dragElementen);
    
    //dit zorgt ervoor dat het dragelement op de html blijft na het droppen van het element//
      // wat wil je droppen??? tekst of html.
    var dropHTML = e.dataTransfer.getData('text/html');
      
    //opzoeken//
    this.insertAdjacentHTML('beforebegin',dropHTML);
      
    //Dit zorgt ervoor dat het nummer weer naar boven kan worden gedropt//
    var dropElem = this.previousSibling;
    voegDnDHandelingen(dropElem);   
  }
}


function voegDnDHandelingen(nummers) {
  nummers.addEventListener('dragstart', handelDragStart, false);
  nummers.addEventListener('dragover', handelDragOver, false);
  nummers.addEventListener('drop', handelDrop, false);
}

var muzieknummers = document.querySelectorAll('#nummers .muziek');

//telkens wanneer je een event wil uitvoeren voor de muzieknummers, wordt de functie voegDn
[].forEach.call(muzieknummers, voegDnDHandelingen);

