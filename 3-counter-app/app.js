const { reactive, computed, createApp } = Vue;

const app = createApp({
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

    const increment = () => {
      state.counter++;
    };

    const decrement = () => {
      state.counter--;
    };

    const increment2 = () => {
      state.counter2++;
    };

    const decrement2 = () => {
      state.counter2--;
    };

    return {
      state,
      bigOrSmall1,
      bigOrSmall2,
      increment,
      decrement,
      increment2,
      decrement2,
    };
  },
});

app.mount("#app");