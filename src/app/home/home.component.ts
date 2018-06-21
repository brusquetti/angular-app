import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 logros : ILogro[];
 titulo  : string = 'Bienvenidos';
 constructor() { }
 ngOnInit() {
 this.logros = this.getLogros();
 }
 getLogros() : ILogro[]{
  return [{
   id:1,
   title:"Logré algo muy interesante",
   description:"Lorem ipsum dolor sit amet"
  }, {
   id:2,
   title:"Logré otra cosa muy interesante",
   description:"Lorem ipsum dolor sit amet"
  }, {
   id:3,
   title:"Logré algo aún mas interesante",
   description:"Lorem ipsum dolor sit amet"
  }
 ]
 }
}
interface ILogro{
  id : number;
  title : string;
  description ?: string;
}
//COMETARIO 
//“ILogro” (Una interfaz solo define una estructura), con los campos id de tipo number, 
//title de tipo string y descripcion de tipo string, donde el valor “?” indica que el campo puede ser opcional.

//También definimos una variable titulo de tipo string que inizializamos en “Bienvenidos”.

//Luego definimos un arreglo de elementos que cumplan la interfaz logros.

//Delegamos la generación de los logros a un método que llamamos “getLogros” y que 
//precisamente devuelve un arreglo con objetos del tipo “ILogro”.