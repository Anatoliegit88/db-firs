const { createApp } = Vue;
createApp({
  data() {
    return {
      used_cars: [
        { text: "id" },
        { text: "isbn" },
        { text: "type" },
        { text: "car brand" },
        { text: "model" },
        { text: "variant" },
        { text: "age" },
        { text: "condition" },
        { text: "fuel type" },
        { text: "fuel consumption" },
        { text: "km" },
        { text: "power" },
        { text: "gear" },
        { text: "color" },
        { text: "nr.of doors" },
        { text: "nr.of seats" },
        { text: "environment" },
      ],
    };
  },
}).mount("#app");
