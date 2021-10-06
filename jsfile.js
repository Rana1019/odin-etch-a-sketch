const contain = document.querySelector(".container");
const slide = document.querySelector(".slider");
let val = document.querySelector(".valSlider");

let gridSize = Number(slide.value);
console.log(gridSize);
//console.dir(contain);
console.log(contain.clientWidth);
contain.style.width = "640px";
console.log((contain.clientWidth/gridSize));

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
grid.forEach(square =>
    {
        square.addEventListener("mouseenter", (ev)=>
        {
           
            ev.target.style.backgroundColor = "black";
        })
    })


slide.addEventListener("input", changeGrid);



 function changeGrid(event)
 {
     contain.innerHTML = "";
     gridSize = Number(event.target.value);
 //    console.log(event.target.value+" here ev target");
     val.textContent = `Value : ${event.target.value}`;
 //    console.log(gridSize+" inside change grid");

     for(let i = 1; i <= gridSize*gridSize; i++)
{
    let smallSquare = document.createElement("div");
    smallSquare.classList.add("small");
    stringWidth = `${contain.clientWidth/gridSize}px`;
    smallSquare.style.minWidth = stringWidth;
    smallSquare.style.minHeight = stringWidth;
    smallSquare.style.maxHeight = stringWidth;
    smallSquare.style.maxWidth = stringWidth;
 //   console.log(smallSquare.style.minHeight+" bot height");
    contain.appendChild(smallSquare);

 }   

 grid = document.querySelectorAll(".small");
 grid.forEach(square =>
    {
        square.addEventListener("mouseenter", (ev)=>
        {
           
            ev.target.style.backgroundColor = "black";
        })
    })

}


// implement to add squares instead of starting from beginning