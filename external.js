let dimension = document.getElementById('userInput');

//create the container div
const container = document.createElement('div');
container.classList.add('grid-container');

//create 16 rows and 16 columns in container div using a loop
function otherName(_dimension) {
    for (i=0; i<dimension.value; i++) {
       let row = document.createElement('div');
       row.classList.add('grid-row');
       for (j=0; j<dimension.value; j++) {
           let div = document.createElement('div');
          div.classList.add('grid-item');
         row.appendChild(div);
        }
        container.appendChild(row);
    }
}
document.body.appendChild(container);

const pen = document.querySelector('div')
pen.addEventListener('mouseover', (e) => {
        e.target.classList.add('my-color-class');
    })

