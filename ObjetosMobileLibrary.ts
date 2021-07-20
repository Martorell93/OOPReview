//Import clase Mobile Library
import { MobileLibrary } from "./MobileLibrary";
import { Mobile } from './Mobile';

//Declaración de 4 objetos Mobile
//Objeto Nokia 3210
let Nokia3210: Mobile = new Mobile("Nokia3210", "3210", "Nokia", 2,
"Gris", false, 0, 49);

//Objeto Iphone 3G
let Iphone3G: Mobile = new Mobile("Iphone 3G", "3G", "Apple", 16,
"Plata", false, 1, 99);

//Objeto Samsung Galaxy 10
let SamsungGalaxy10: Mobile = new Mobile("Samsung Galaxy 10", 
"Galaxy 10", "Samsung", 64, "Negro", true, 3, 499);

//Objeto Xiaomi mi mix 3
let xiaomiMiMix3: Mobile = new Mobile("Xiaomi mi Mix 3",
"mi Mix 3", "Xiaomi", 128, "Azul", true, 2, 599);

//Array que contiene a los 4 objetos Mobile
let arrayMobiles : Mobile[] = [Nokia3210, Iphone3G, SamsungGalaxy10,
xiaomiMiMix3];

//Objeto clase Mobile Library
let libreriaMobiles: MobileLibrary = new MobileLibrary (
    "Libreria de Mobiles 1", "Madrid (España)", arrayMobiles
)

//Test metodos de la clase Mobile Library
//obtener el nombre
console.log(libreriaMobiles.getName());
//Cambiar el nombre
console.log(libreriaMobiles.setName("Libreria personal"));
//Obtener la localización
console.log(libreriaMobiles.getLocation());
//Cambiar la localización
console.log(libreriaMobiles.setLocation("Lisboa (Portugal)"));
//Obtener los mobiles
console.log(libreriaMobiles.getMobiles());
//Obtener el precio total de los mobiles de la librería
console.log(libreriaMobiles.totalPriceCalculation());