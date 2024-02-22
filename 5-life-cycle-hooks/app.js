const app = Vue.createApp({
  data() {
    return {
      title: "Test başlığı",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate çalıştı");
  },
  created() {
    console.log("created çalıştı");
    setTimeout(() => {
      this.itemList = [1, 23, 4, 5, 456, 3];
    }, 2000);
  },
  beforeMount() {
    console.log("beforeMount çalıştı");
  },
  mounted() {
    console.log("mounted çalıştı");
  },
  beforeUpdate() {
    console.log("beforeUpdate çalıştı");
  },
  updated() {
    console.log("updated çalıştı");
  },
  beforeUnmount() {
    console.log("beforeUnmount çalıştı");
  },
  unmounted() {
    console.log("unmounted çalıştı");
  },
});
app.mount("#app");
setTimeout(() => {
  app.unmount();
}, 5000);
