const app = Vue.createApp({
  data() {
    return {
      fullName: "Duran",
    };
  },
  methods: {
    updateValue(event) {
      console.log(event.target.value);
      this.fullName=event.target.value
    },
  },
}).mount("#app");
