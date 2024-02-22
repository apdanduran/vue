const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "vue bootcamp ha 1", completed: false },
        { id: 2, text: "vue bootcamp ha 2", completed: false },
        { id: 3, text: "vue bootcamp ha 3", completed: false },
        { id: 4, text: "vue bootcamp ha 4", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },

    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo != todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
});
app.mount("#app");
