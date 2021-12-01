
class Client {
    async getDataCatalog(catalog) {
        if(catalog !== undefined && catalog.length !== 0 && catalog !== "status") {
            return fetch(`https://my-json-server.typicode.com/NiktaYevdokymov21/Project-pizza/${catalog}`).then((response) => {
                return response.json();
            });
        }
    }
    async idExists(catalog,id){

       return await this.getDataCatalog(catalog).then((data) => {
            for (let i = 0; i <data.length ; i++) {
                if(data[i].id === parseInt(id)){
                    return true;
                }
            }
            return false;
        })
    }
    async getObjectInCatalog(catalog,id){
       return  await this.getDataCatalog(catalog).then((data) => {
           for (let i = 0; i <data.length ; i++) {
                if(data[i].id === id){
                    return data[i]
                }
           }
        })
    }
    async setData(order){

        return await fetch(`https://my-json-server.typicode.com/NiktaYevdokymov21/Project-pizza/`,{
            method: 'POST',
            body: JSON.stringify(order)
        }).then(response => {
            if(response.ok){
                return response.json()}
            else{
                window.location.hash = "error"
            }
        })
        }
    }





export default Client