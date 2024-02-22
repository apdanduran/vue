const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    counterBoxClass() {
      return {
        "bg-success": this.counter > 0,
        "bg-danger text-white": this.counter < 0,
      };
    },
  },
});
app.mount("#app");
