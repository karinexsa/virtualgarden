const boxes = document.querySelectorAll(".box");

boxes.forEach(function(item){
    item.addEventListener("mouseenter", function(){
        item.style.opacity=0.8;
    })

    item.addEventListener("mouseout", function(){
        item.style.opacity=1.0;
    })

    item.addEventListener("click", function(){
        item.style.backgroundColor="var(--laranja)";
    })
});
