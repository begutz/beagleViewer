const DOG_URL = "https://dog.ceo/api/breed/beagle/images/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })

    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      img.style.width = "25%";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
document.querySelector(".add-doggo").addEventListener("click", function(event) {
  event.target.innerText = "Click to add more beagle photos!";
});
