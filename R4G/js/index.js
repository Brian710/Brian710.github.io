window.onload = function(){
    if(screen.width <= 768){
        console.log("請使用橫式");
        alert("請使用橫式");
    };
    window.addEventListener("resize",()=>{
        if(screen.width <= 768){
            alert("請使用橫式");
            console.log("請使用橫式");
        }
        else{
            location.reload();
        }
    });
};

