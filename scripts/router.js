import Client from "./client.js";
import {getStatusShown,changeStatus} from "./main.js";

let client = new Client();


class Router{
    async getCurrentState(){
        let fileName;
        let catalogName;
        let id;
        let location = window.location.hash.split("#")[1];
        if(location === undefined){
            location = ""
        }
        if(!location.includes('/')) {
            switch (location) {
                case "":
                    fileName = "index"
                    catalogName = "db"
                    break;
                case "drinks":
                    fileName = "drinks"
                    catalogName = "drinks"
                    break;
                case "pizzas":
                    fileName = "pizzas"
                    catalogName = "pizzas"
                    break;
                case "sales":
                    fileName = "sales"
                    catalogName = "sales"
                    break;
                case "sides":
                    fileName = "sides"
                    catalogName = "sides"
                    break;
                case "cart":
                        if(localStorage.getItem("cart")===null || JSON.parse(localStorage.getItem("cart")).ids.length === 0 )
                        {
                            window.location.href = ""
                        }
                        else{
                            fileName = "cart"
                            catalogName = "db"
                        }
                    break;
                case "deserts":
                    fileName = "deserts"
                    catalogName = "deserts"
                    break;
                case "error":
                    fileName = "error"
                    catalogName = "db"
                    break;
                default:
                    fileName = "index"
                    catalogName = "db"
                    break;
            }
        }
        else{
            const tempId = location.split('/')[1];
            if(location.split("/")[0] !== "status") {
                const exists = await client.idExists(location.split('/')[0], parseInt(tempId));
                if (!exists || isNaN(+tempId)) {
                    fileName = "index";
                    catalogName = "db";
                } else {
                    id = tempId;
                    switch (location.split('/')[0]) {
                        case "drinks":
                            fileName = "product"
                            catalogName = "drinks"
                            break;
                        case "pizzas":
                            fileName = "product"
                            catalogName = "pizzas"
                            break;
                        case "sales":
                            fileName = "sale"
                            catalogName = "sales"
                            break;
                        case "sides":
                            fileName = "product"
                            catalogName = "sides"
                            break;
                        case "deserts":
                            fileName = "product"
                            catalogName = "deserts"
                            break;
                    }
                }

            }
            else{
                if(getStatusShown()){
                    fileName = "index"
                    catalogName = "db"
                }
                else{
                    fileName = "status";
                    catalogName = "db"
                    changeStatus(true)
                }

            }
        }
        return {
            fileName,
            catalogName,
            id
        }
    }
}

export default Router;
