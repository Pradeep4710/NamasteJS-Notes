const API_URL = "https://api.github.com/users/Pradeep4710"

async function handlePromise(){
    const data = await fetch(API_URL)

// fetch function is a promise which gives us a response object which contains a response body consisting of a readable stream which can be read by using a funcition/promise such as .json() which will return a readable json output. Fetch is a property which is assigned to the JS engive by our browser as fetch is not part of JS engine.

    const jsonValue = await data.json()

// in console now we can see we get a json result which is consist of username id etc etc using which we can print our actual target variable from the raw json file that we got upon resolfing the fetch promise and converting it to json

    console.log(jsonValue);

// lets print just the username out of al the json we recieved, upon inspecting we can see that te username is stored in the variable named as login:, so...
    
    console.log(jsonValue.login);
}

handlePromise()