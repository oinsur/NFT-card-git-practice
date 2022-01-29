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
  nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600&quot",
  backgroundColor: "#00FFFF",
  cardColor: "#FFC579",
  otherData: {
      owner: "Lance Toledo",
      daysLeft: "1 day left",
      profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c&quot"
  }
}

// name has already been declared as  a variable above, create variables to get all other elements first

let body = document.getElementsByTagName("body");
let NFT = document.getElementById("NFT");
let text = document.getElementById("text");
let card = document.getElementsByClassName("container");
let price = document.getElementsByClassName("price");
let days = document.getElementsByClassName("time");
let owner = document.getElementsByTagName("span");
let profilePic = document.getElementById("ProfilePic");
let button = document.getElementsByTagName("button");

