//Import clase Mobile
import { Mobile } from "./Mobile";

//Declaración clase Mobile Library
export class MobileLibrary
{
    //Declaración tipos de atributos
    private name: string;
    private location: string;
    private mobiles:Mobile[];
    private totalPrice: number;

    //Constructor
    constructor (name:string, location: string, mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    //Métodos
    public getName():string {
        return this.name;
    }
    public getLocation():string {
        return this.location;
    }
    public getMobiles():Mobile[] {
        return this.mobiles;
    }
    public getTotalPrice():number {
        return this.totalPrice;
    }
    public setName(name:string) {
        this.name = name;
    }
    public setLocation(location:string) {
        this.location = location;
    }
    public setMobiles(mobiles:Mobile[]) {
        this.mobiles = mobiles;
    }
    public setTotalPrice(totalPrice:number) {
        this.totalPrice = totalPrice;
    }
    private totalPriceCalculation():number {
        let result:number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            result += this.mobiles[i].getPrice();
        }
        return result;
    }
    public printLibrary () {
        console.log("\n" + "This is all my mobiles: ");
        for (let i = 0; i < this.mobiles.length; i++) {
            console.log("The caracteristics od the mobile " +
            this.mobiles[i].getName() + " are: ");
            console.log(" - Name: " + this.mobiles[i].getName());
            console.log(" - Model: " + this.mobiles[i].getModel());
            console.log(" - Trademark: " + 
            this.mobiles[i].getTradeMark());
            console.log(" - SD Size (GB): " +
            this.mobiles[i].getSdSize());
            console.log(" - Is 5G?: " + this.mobiles[i].getIs5G());
            console.log(" - Number of Camaremas: " + 
            this.mobiles[i].getCameraNumber()+ "\n");
        }
        console.log("Price overall: " + this.getTotalPrice());
    }
}