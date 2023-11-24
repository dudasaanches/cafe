botao = document.getElementById("btn")

botao.addEventListener("click", function(){
    form = document.getElementById("formulario1")

    if (form.style.display === "block"){
        form.style.display = "none"
    }

    else{
        form.style.display = "block" 
    }
} )
function alert(){
    Swal.fire({
        imageUrl: "img/cardápio.png",
        imageHeight: 470,
        imageWidth: 4000,
    });
}
