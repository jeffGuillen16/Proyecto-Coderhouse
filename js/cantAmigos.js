/*USO DE EVENT Y LOCALSTORAGE*/
function guardarDatos(){
   
    localStorage.setItem("cantAmigos",cantAmigos.value);
  
  }
document.getElementById("cantAmigos").onchange=guardarDatos;