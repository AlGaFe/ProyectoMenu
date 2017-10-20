
function calcularPrecio(){
var checkBox=document.getElementsByTagName("input");
total=0;
document.getElementById("precio").innerHTML = total;
    for (var i = 0; i < checkBox.length; i++) {
        if(checkBox[i].checked==true){
            var precio = parseFloat(checkBox[i].value);
            total=precio+total;
            document.getElementById("precio").innerHTML = total;
        }
    }
}
function hacerGrande(producto){
     
     var imagen = document.createElement("img");
     var imagenProducto = producto;
     imagen.src = imagenProducto.src;
     imagen.className = "productoVisionar"; 
    document.getElementById("imagenmuestra").src=imagen.src;
}
function hacerPequeña(producto){
    document.getElementById("imagenmuestra").src="";
    
}