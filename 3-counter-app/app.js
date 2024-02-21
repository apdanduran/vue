const { reactive, computed, createApp, watch } = Vue;

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
    watch(
      () => {
        return state.counter2;
      },
      (newValue, oldValue) => {
        console.log("counter2 changed from", oldValue, "to", newValue);
        // Burada istediğiniz işlemleri gerçekleştirebilirsiniz.
      },
    );
    watch(
        () => {
          return state.counter;
        },
        (newValue, oldValue) => {
          console.log("counter changed from", oldValue, "to", newValue);
          // Burada istediğiniz işlemleri gerçekleştirebilirsiniz.
        },
      );
    return {
      state,
      bigOrSmall1,
      bigOrSmall2,
    };
  },
});

app.mount("#app");
