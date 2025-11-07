const API_URL = "https://api.github.com/users/Pradeep4710"

async function handlePromise(){

    try{
        const data = await fetch(API_URL)
        const jsonValue = await data.json()

        console.log(jsonValue);
        console.log(jsonValue.login);
        }
        catch(err){
            console.log(err)
        }

}

handlePromise()

// in order to handle errors in the async and await calls, we wrap out await functions inside the try block and then use the catch() method block after the try in order to catch any error if they occur and then handle it by either showing error on console, redirect, popup etc however the user wants to.