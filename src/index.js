import food from "./food";

(function start() {
  let display = {
    activeTab: {
      home: 1,
      smoothies: 0,
      food: 0,
      contact: 0,
    },

    init: function () {
      this.cache();
      this.title();
      this.tabButtons();
      this.content();
      this.bindEvents();
    },

    cache: function () {
      this.page = document.getElementById("content");
      this.home = document.getElementsByClassName("home");
      this.smoothies = document.getElementsByClassName("drink");
      this.food = document.getElementsByClassName("food");
      this.contact = document.getElementsByClassName("contactUs");
    },

    bindEvents: function () {
      document
        .getElementById("content")
        .addEventListener("click", this.tabSwitch.bind(this));
    },

    title: function () {
      this.page.classList.add("header");
      this.restaurantName = document.createElement("button");
      this.restaurantName.classList.add("rest-name");
      this.restaurantName.textContent = "Smoothies and Stuff";
      this.page.appendChild(this.restaurantName);
    },

    tabButtons: function () {
      this.homeButton = document.createElement("button");
      this.homeButton.classList.add("home");
      this.homeButton.textContent = "Home";
      this.page.appendChild(this.homeButton);
      this.drinkButton = document.createElement("button");
      this.drinkButton.classList.add("drink");
      this.drinkButton.textContent = "Smoothies";
      this.page.appendChild(this.drinkButton);
      this.foodButton = document.createElement("button");
      this.foodButton.classList.add("food");
      this.foodButton.textContent = "Food";
      this.page.appendChild(this.foodButton);
      this.contactButton = document.createElement("button");
      this.contactButton.classList.add("contactUs");
      this.contactButton.textContent = "Contact Us";
      this.page.appendChild(this.contactButton);
    },

    content: function () {
      this.pageContent = document.createElement("div");
      this.pageContent.classList.add("pageContent");
      this.page.appendChild(this.pageContent);
    },

    tabSwitch: function (event) {
      let classname = event.target.closest("button").className;

      if (classname === "home") {
        this.activeTab.home = 1;
        home.bind(this);
        console.log(this.activeTab.food);
      } else if (classname === "food") {
        this.activeTab.food = 1;
        console.log(this.activeTab.food);
        food(this);
      }
    },

    //reset activeTabs(class)

    //this.activeTab.home = 0, .food = 0 etc
    //this.activeTab.class = 1


    //clear page()
  };

  display.init();
})();

function home() {
  console.log("home");
}
