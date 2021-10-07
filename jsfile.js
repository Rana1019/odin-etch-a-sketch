const contain = document.querySelector(".container");
const slide = document.querySelector(".slider");
let val = document.querySelector(".valSlider");



let gridSize = Number(slide.value);
//console.log(gridSize);
//console.dir(contain);
//console.log(contain.clientWidth);
contain.style.width = "640px";
//console.log((contain.clientWidth/gridSize));

// grid made
for(let i = 1; i <= gridSize*gridSize; i++)
{
    let smallSquare = document.createElement("div");
    smallSquare.classList.add("small");
    strwidth = `${contain.clientWidth/gridSize}px`;
    smallSquare.style.minWidth = strwidth;
    smallSquare.style.minHeight = strwidth;
    smallSquare.style.maxHeight = strwidth;
    smallSquare.style.maxWidth = strwidth;
 //   console.log(smallSquare.style.minWidth+" cjeck min width");
   // smallSquare.clientWidth = contain.clientWidth/gridSize;
  //  smallSquare.clientHeight = contain.clientHeight/gridSize;
   
  //  console.log(smallSquare.clientHeight);
  //  console.log(smallSquare.clientWidth);

    contain.appendChild(smallSquare);
 
}

let grid = document.querySelectorAll(".small");


contain.addEventListener("mouseover", handleColor )

function handleColor(event)
{
   // console.log(event+" event dele check");
   // console.dir(event);
 //   console.log(event.currentTarget.nodeName);
    console.log(event.target);
  //  console.log(event);


  event.target.style.backgroundColor = "blue";
  //  event.target.style.backgroundColor = "black";
}



slide.addEventListener("input", changeGrid);



 function changeGrid(event)
 {
    console.log(event.target.value+" value of slider");

     gridSize = Number(event.target.value);
     

 let currentSquares = document.querySelectorAll(".small").length;
 console.log(currentSquares);
    console.log(currentSquares+" curr squares");
    console.log(gridSize+" grid size");
    console.log(typeof(gridSize));
    
    console.log((currentSquares - (gridSize*gridSize))+" diff out of loop");
   
  //  let rows = gridSize;
   // let columns = gridSize;
``
      // make 1 row first
      stringWidth = `${contain.clientWidth/gridSize}px`;
     // let col =  document.createElement("div");
     // col.classList.add("column");
      contain.innerHTML = "";
     // col.innerHTML = "";
      let stringCol =  `<div class = 'small'  style = "min-width: ${stringWidth}; min-height: ${stringWidth}; max-width: ${stringWidth}; max-height: ${stringWidth};" ></div>`;
      console.log(stringCol.repeat(10));
    //  col.innerHTML = stringCol.repeat(gridSize);

    /*  for(let i = 0; i < columns; i++)
      {
         console.log(i+" columns printing");

         col.innerHTML += `<div class = 'small'  style = "min-width: ${stringWidth}; min-height: ${stringWidth}; max-width: ${stringWidth}; max-height: ${stringWidth};" ></div>`;
         console.log(col);
      }*/

      contain.innerHTML = stringCol.repeat(gridSize*gridSize);

  /*    for(let i =0; i< rows; i++)
      {
         contain.innerHTML += col.innerHTML;
         console.log(col.innerHTML+ " checking col innerhtml")
      }*/



/*

    if((gridSize*gridSize) >  currentSquares)
     {
         let diff = (gridSize*gridSize) -  currentSquares;
         for ( let i  = 0; i < diff ; i++ )
         {
            let smallSquare = document.createElement("div");
            smallSquare.classList.add("small");
            
            
            contain.appendChild(smallSquare);
         }
     }
     else if( (gridSize*gridSize) < currentSquares)
     {
        let diff =  currentSquares - (gridSize*gridSize)  ;
        console.log(diff);
        let listOfSmall = document.querySelectorAll(".small");
        for(let i = 0; i < diff; i++)
        {
            document.querySelector(".small").remove();
            console.log("cheking");
        }
        
     }

     // change width height here

     let lastSquares = document.querySelectorAll(".small");
     console.log(lastSquares.length+" ending small nos");
     lastSquares.forEach( (sq) =>
     {
        stringWidth = `${contain.clientWidth/gridSize}px`;
        sq.style.minWidth = stringWidth;
        sq.style.minHeight = stringWidth;
        sq.style.maxHeight = stringWidth;
        sq.style.maxWidth = stringWidth;
        sq.style.backgroundColor = "white";
     })
*/

 //    console.log(event.target.value+" here ev target");
     val.textContent = `Value : ${event.target.value}`;
 //    console.log(gridSize+" inside change grid");

   

 


 

}


// implement to add squares instead of starting from beginning  `

//change how grid is updated
/*
<div class="small" style="min-width: 160px; min-height: 160px; max-height: 160px; max-width: 160px; background-color: blue;"></div>

<div class="small" style="min-width: 160px; min-height: 160px; max-height: 160px; max-width: 160px;"></div> nnow

<div class="small" style="min-width : 160px; min-height : 160px; max-width ; 160px; max-height : 160px;"></div>


<div class="small" style="min-width = 160px; min-height = 160px; max-width = 160px; max-height = 160px;"></div>*/