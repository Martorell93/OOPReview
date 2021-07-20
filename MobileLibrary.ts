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
        this.totalPrice;
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
    public totalPriceCalculation():number {
        let result:number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            result += this.mobiles[i].getPrice();
        }
        return result;
    }
}