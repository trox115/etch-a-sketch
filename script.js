function createGrid(x){
    let rows=0;
    
    const container = document.querySelector('#sketch');
    for(rows=0;rows<x;rows++){
        for (var columns = 0; columns < x; columns++) {
            container.insertAdjacentHTML('beforeend',"<div class='grid'></div>");
            
    };
   
};
const grid = document.querySelectorAll('.grid');
for (var i = 0; i < grid.length; i++) {
    grid[i].style.width=960/x;
    grid[i].style.height=960/x;
}
           

}
document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
  });