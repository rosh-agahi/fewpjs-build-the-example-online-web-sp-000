// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal")
modal.classList.add("hidden")

heartStates = {
  '♥' : '♡',
  '♡' : '♥'
}
colorStates = {
  "red" : "",
  "" : "red"
}

let hearts = document.querySelectorAll(".like-glyph")

hearts.forEach(heart => heart.addEventListener("click", likeServerCallback))

function likeServerCallback(event) {
  let heart = event.target;
  mimicServerCall("message")
    .then(function(serverMessage) {
      heart.innerText = heartStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      modal.innerText = "Server Error"
      modal.className = "";
      setTimeout(function() {modal.classList.add("hidden");}, 5000)
    })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
