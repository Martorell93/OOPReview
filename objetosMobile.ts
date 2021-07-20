//Objetos creados a partir de la clase Mobile

//Import class Mobile
import { Mobile } from "./Mobile";

//Objeto Nokia 3210
let Nokia3210: Mobile = new Mobile("Nokia3210", "3210", "Nokia", 2,
"Gris", false, 0, 49);

//Objeto Iphone 3G
let Iphone3G: Mobile = new Mobile("Iphone 3G", "3G", "Apple", 16,
"Plata", false, 1, 99);

//Objeto Samsung Galaxy 10
let SamsungGalaxy10: Mobile = new Mobile("Samsung Galaxy 10", 
"Galaxy 10", "Samsung", 64, "Negro", true, 3, 499);

//Modificar Nokia 3210
Nokia3210.setCameraNumber(4);
Nokia3210.setIs5G(true);

//Crear array de objetos de la clase Mobile
let arrayMobile:Mobile[] = [Nokia3210, Iphone3G, SamsungGalaxy10];

//Mostrar los atributos de cada uno de los objetos del array
for (let i = 0; i < arrayMobile.length; i++) {
    arrayMobile[i].printAll();
}