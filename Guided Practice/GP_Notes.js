/* Warm Up Notes:
***Promises and Async Code:
  - .then() and .catch() = methods
  - Asynchronous Code= 2 things in JS to do 2 things at the same time
    - Use Asynchronous code, then it creates a helper object called "Promise":
        - Informs the browser that the second async task is finished

        - Promise:
            - An object w/a few properties
            - when creating a new promise with the "new" keyword; you pass in a callback function
              - Async function finishes & its successful = call the resolve() function
              - Async function finishes & it failed = call the reject() function
                  - After a resolve() or reject(); you use .then() or .catch() to tell JS what to do next
*/        //The asyncFunction creates and returns a new promise
              const asyncFunction = () => {
                return new Promise ((resolve, reject)=>{
                  //perform some async action
                });
              };
          // This means that when you call asyncFuntion, you use .then() or .catch()
              asyncFunction ()
              .then(()=> {
                console.log('async stuff finished');
              })
              .catch(()=> {
                console.log('async stuff rejected');
              });
              //chaining syntax: .then() is chained off asyncFunction(), and .catch() is chained off of .then()

                  //resolve senerio:
                  const asyncFunction = () => {
                    return new Promise ((resolve, reject)=>{
                      //perform some async action
                      if (asyncFinishesSuccessfully){
                        resolve(dataObject);
                      }
                    });
                  };

                  asyncFunction ()
                  .then(dataPassedFromResolve => {
                    console.log(dataPassedFromResolve);
                  })
                  .catch(()=> {
                    console.log('async stuff rejected');
                  });

                  //reject senerio:
                  const asyncFunction = () => {
                    return new Promise ((resolve, reject)=>{
                      //perform some async action
                      if (asyncFinishesSuccessfully){
                        resolve(dataObject);
                      } else {
                        reject(errorMessage);
                      }
                    });
                  };

                  asyncFunction ()
                  .then(dataPassedFromResolve => {
                    console.log(dataPassedFromResolve);
                  })
                  .catch(errorPassedFromResolve => {
                    console.log(errorPassedFromResolve);
                  });
//When you make an API call, you invoke a function that completes promises under the hood
axios.get('https://swapi.co/api/people') //axios is a third party & .get is a function that creates a new promise ^^^
  .then (response => {
    //do something with the data we are getting
    //in response to the API call we jus made
    console.log('response');
  })
  .catch (err => {
    //handle the error that we receieved from
    // the API
    console.log('response');
  });

//Example:
let time = 0;

const timeMachine = () => {
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve((time += 1000));
    }, 1000);
  });
};

timeMachine()
.then(newTime => { //when the resolve runs, this .then() will run...newTime= resolve((time +=1000));
  const myTime = newTime / 1000;
  return
})
.then (newString => {
  console.log(newString)
});

    //OR

    timeMachine()
    .then(newTime => { //when the resolve runs, this .then() will run...newTime= resolve((time +=1000));
      console.log(newTime);
      return `${myTime} seconds have passed`;
    })
    .then (newString => {
      console.log(newString)
    });

  //Run Reject Function
    const timeMachine = time => {
      return new Promise((resolve,reject)=> {
        setTimeout(()=> {
          if (time >= 1000){
            resolve((time));
          } else {
            reject (('Not enough time passed in'));
          }
        }, time);
      });
    };
        timeMachine(1000) //(999)
        .then(newTime => { 
          const myTime = newTime / 1000;
          console.log `${myTime} seconds have passed`;
        })
        .catch (err => {
          console.log(err);
        })
/*If the promise succeeds, it will return the value as a parameter into a callback passed into .then(). 
If the promise fails, the callback passed into the .catch() runs, taking an error as its argument. */

//HTTP Requests w/Axios: Obtain data from an API

const URL = null

const grabTheData = (event) => {
  console.log('working!')
}

theButton.addEventListener('click', grabTheData)

//endpoints are URLs you can use with web data services

//https://api.thedog.api.com/v1/breeds/:breed_id = endpoint
    //:breed_id = variable number that provides json information w/the breed id
    //https://api.thedog.api.com/v1/breeds/ = if you copy&paste into web browser, it will pull up a whole lot of information
    //https://api.thedog.api.com/v1/breeds/1 = will pull up its object index 1
    /*Steps:
    - enter Network tab (instead of Console)
    - Make sure you see: Hide data URLs All
    - Reload the page
    - Request for information breeds/1 will show up

  * On the web page, they offer a command line tool called Curl
      curl --location --request GET 'https://api.thedogapi.com/v1/breeds/2'
  
  ** If you don't have curl:
    - Online tool: httpie.org
    - Try online (need to install later)
      ~ $ http get https://api.thedog.api.com/v1/breeds/1 --verbose    //make sure to include an id #
          -you'll get a http request and then a http response

  ** Google axios library:
- github one: Promise Based HTTP...
- Table of Contents: Installing
- In warm up project: Grabbed Using jsDelivr CDN: script
- Copy that script tag above the <script defer src="index.js"></script>
- Add in "defer" before src in the tag copied
- Reason for putting it above, bc the code relies on axios
*/

//Using Axios:
const URL = 'https://api.thedog.api.com/v1/breeds/' //later need to provide a id

const grabTheData = (event) => {
  console.log('about to fetch data!')
  axios.get(URL + 1) //only exsist bc of the script inputted in the HTML (global variable)...axios needs to return a promise
    .then(res => {
      // debugger //breakpoint
      // have access to the data from the api
      console.log(res.data)
      event.target.textContent = res.data.name //happens if things go correctly
    })
    .catch(err=> {
      debugger //breakpoint
    })
}
theButton.addEventListener('click', grabTheData)

  //OR

// a function that takes an id, an then returns a function that takes an event object
const URL = 'https://api.thedog.api.com/v1/breeds/' //later need to provide a id

const grabTheData = (id) => (event) => {
  console.log('about to fetch data!')
  axios.get(URL + id) //only exsist bc of the script inputted in the HTML (global variable)...axios needs to return a promise
    .then(res => {
      // debugger //breakpoint
      // have access to the data from the api
      console.log(res.data)
      event.target.textContent = res.data.name //happens if things go correctly
    })
    .catch(err=> {
      debugger //breakpoint
    })
}
theButton.addEventListener('click', grabTheData(1)) //(1) is the id

//Iterating over server data:

const URL = 'https://api.thedogapi.com/v1/breeds?limit=4&page=0'
const container = document.querySelector('.container') //referencing a div

const DogCard = ({name, temperament, ...rest}) => { //build a card out of data   //look at the data thru the web browser network ("all is selected")
//create Element
const card = document.createElement('section')
const h2 = document.createElement('h2')
const p = document.createElement('p')
//Give it Text
h2.textContent = name
p.textContent = temperament
//.appendChild it to the page
card.appendChild(h2)
card.appendChild(p)
//make all this information accessable
return card;
}

  const fetchBreeds = (event) => {
    console.log('about to fetch data!')
    axios.get(URL) //where the information is coming from
      .then(res => { //if the connection is sucessful, run the function in here
        res.data.forEach(breed => { //if its successful, run the data thru a forEach
          const card = DogCard(breed) //when variable "card" is used, run the function of DogCard
          container.appendChild(card) //card is invoked so forth, run DogCard and create it to the page, inside of the container thats on the document (line 215)
        })
      })
      .catch(err => { //if the connection hit an error, show up the debugger
        debugger //is a breakpoint
      })
  }

theButton.addEventListener('click', fetchBreeds)

//---------------------------------------------------------------------------------------
// Guided Practice Notes:
// Imports at the top of the file!
// We never nest imports inside blocks of code!
// no import if used script tag!
import axios from "axios";

console.log("1. about to fetch data with axios");
// Pending vs Fulfilled vs Rejected vs Settled
axios
  .get("https://lambda-times-api.herokuapp.com/friends")
  .then((futureData) => {
    // future code for when the data actually arrives
    // freedom to assume that the data is here
    console.log("2. here is the future data", futureData);
  })
  .catch((drama) => {
    // handle the drama
    console.log(drama);
  });

console.log("3. we requested data with axios");

//---------------------------------------------------------------------------------------
// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//  * With Postman (HTTP Client with GUI)
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]

//---------------------------------------------------------------------------------------
// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards
const entryPoint = document.querySelector(".entry");

//---------------------------------------------------------------------------------------
// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // destructuring
  // instantiating the elements
  const dogCard = document.createElement("div");
  const image = document.createElement("img");
  const heading = document.createElement("h3");
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`;
  image.src = imageURL;
  image.classList.add("dog-image");
  dogCard.classList.add("dog-card");
  // creating the hierarchy
  dogCard.appendChild(image);
  dogCard.appendChild(heading);
  // adding some interactivity
  dogCard.addEventListener("click", () => {
    dogCard.classList.toggle("selected");
  });
  // never forget to return!
  return dogCard;
}

//---------------------------------------------------------------------------------------
// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file

//---------------------------------------------------------------------------------------
// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

axios
  .get(`https://dog.ceo/api/breed/retriever/images/random/6`)
  .then((res) => {
    const images = res.data.message;
    images.forEach((image) => {
      const dogCard = dogCardMaker({ imageURL: image, breed: "retriever" });
      // append to DOM
      entryPoint.append(dogCard);
    });
  })
  .catch((err) => {
    console.log("something went wrong!", err);
  })
  .finally(() => {
    console.log("done");
  });

  //---------------------------------------------------------------------------------------
// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)

// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`

// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration
