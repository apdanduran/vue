const app = Vue.createApp({
  data() {
    return {
      title: "Title of VueJS",
      content: "Lorem ipsum dolor sit amet",
      url: "www.duranapdan.com",
      eduflow: {
        title: "Sayfamı açmak için tıklayınız.",
        target: "_blank",
        url: "duranapdan.com",
        alt: "duran-apdan",
      },
      owner: "Pogaca",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(message, event) {
      this.changeTitle(`${event.x}, ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
