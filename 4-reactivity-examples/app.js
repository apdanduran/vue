const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "çilek"],
      filteredList: [],
    };
  },
  methods: {
    searchList() {
      this.filteredList = this.itemList.filter((i) => i.includes(this.search));
    },
  },
}).mount("#app");
