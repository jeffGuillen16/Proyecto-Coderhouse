var formulario=document.getElementById("form");
var addButton=document.getElementById("boton");
var cantAmigos=localStorage.getItem("cantAmigos"); 

window.baseDatos=[];

function Persona(nombre,edad,dni,profesion){
  this.nombre=nombre;
  this.edad=edad;
  this.dni=dni;
  this.profesion=profesion;
}  

function guardarDatos(){

  localStorage.setItem("datos", JSON.stringify(baseDatos));
  
}
  function agregar(){
    var nombre=document.getElementById("nombre").value;
    var edad=document.getElementById("edad").value;
    var dni=document.getElementById("dni").value;
    var profesion=document.getElementById("profesion").value;
    miPersona=new Persona(nombre,edad,dni,profesion);
    baseDatos.push(miPersona); 
   if(cont<cantAmigos){ 
     guardarDatos();  
    alert("agregado");
    cont++;
  }else{
    alert("nose agrega")
  }
  } 
  
  var cont=0; 
  addButton.onclick=agregar;
  
    

registros = localStorage.getItem('datos');
registros = JSON.parse(registros);



