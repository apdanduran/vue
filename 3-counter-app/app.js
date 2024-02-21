const { reactive, computed, createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter3: 0,
    };
  },
  methods: {
    increment() {
      console.log("inc");
      this.counter3++;
    },

    decrement() {
      console.log("dec");
      this.counter3--;
    },

    bigOrSmall3() {
      console.log("dec");
      return this.counter3 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  setup() {
    const state = reactive({
      counter: 0,
      counter2: 0,
    });

    const bigOrSmall1 = computed(() => {
      console.log("inc");
      return state.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    });

    const bigOrSmall2 = computed(() => {
      console.log("dec");
      return state.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    });

    return {
      state,
      bigOrSmall1,
      bigOrSmall2,
    };
  },
});

app.mount("#app");
