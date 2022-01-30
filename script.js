document.getElementById("NFT").addEventListener("click", function () {
  console.log("I Have been clicked!");
});

// write code that will change the title color to green, and then revert back after clicked again
// Create variable to identify the NFT image
let titleName = document.getElementById("name");
// add click event listener to run a function to change the color when clicked
titleName.addEventListener("click", function (){
  console.log("I was clicked!");
  if (titleName.style.color == "green") {
    console.log("Color changed!");
    titleName.style.color = "white";
  } else {
    console.log("Color reverted!");
    titleName.style.color = "green";
  }
});

// Change NFT card elements with the DOM using the dog object below in a button that will switch between the cards
let dog = {
  name: "Shibe #5079",
  price: "0.09ETH",
  description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
  nft: "https://pbs.twimg.com/profile_images/1465294010910580739/032RShWU_400x400.jpg",
  backgroundColor: "#00FFFF",
  cardColor: "#FFC579",
  otherData: {
      owner: "Lance Toledo",
      daysLeft: "1 day left",
      profileImg: "https://yt3.ggpht.com/ytc/AKedOLSSmstg20Polv3LH4GPl3Ccgt3NmKpN_VEwBLwjdg=s900-c-k-c0x00ffffff-no-rj"
  }
}

// name has already been declared as  a variable above, create variables to get all other elements first

let body = document.getElementById("body");
let NFT = document.getElementById("NFT");
let text = document.getElementById("text");
let card = document.getElementById("container");
let price = document.getElementById("price");
let days = document.getElementById("time");
let owner = document.getElementById("owner");
let profilePic = document.getElementById("ProfilePic");
let button = document.getElementById("btn");


// console.log(dog.nft);
button.addEventListener("click", function (){
  
  NFT.src = dog.nft;
  body.style.backgroundColor = dog.backgroundColor;
  card.style.backgroundColor = dog.cardColor;
  titleName.innerText = dog.name;
  text.innerText = dog.description;
  text.style.color = "#FFFFFF";
  price.innerText = dog.price;
  price.style.color = "#FFFFFF";
  days.innerText = dog.otherData.daysLeft;
  days.style.color = "#FFFFFF";
  owner.innerText = dog.otherData.owner;
  profilePic.src = dog.otherData.profileImg;
  }
);


