const source = document.querySelectorAll("#source");
const alert = document.getElementById("alert");
const close = document.getElementById("close");


source.forEach(show =>{
   
   show.addEventListener("click", () => {
    alert.classList.add("show")
      
   });
   close.addEventListener("click", () => {
    alert.classList.remove("show")
   });

})

/*
show.addEventListener("click", () => {
    alert.classList.add("show")
});
close.addEventListener("click", () => {
    alert.classList.remove("show")
})
*/
