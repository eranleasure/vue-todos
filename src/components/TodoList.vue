<template>
  <ul class="todo-list" v-if="todoList.length">
    <TodoListItem :key="todo.id" :todo="todo" v-for="todo in todoList" />
  </ul>
  <div class="message" v-else>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
  components: {
    TodoListItem
  },

  computed: {
    todoList() {
      switch (this.$store.state.selectedFilter) {
        case 'all':
          return this.$store.state.todos;
        case 'complete':
          return this.$store.state.todos.filter(todo => todo.complete);
        case 'incomplete':
          return this.$store.state.todos.filter(todo => !todo.complete);
        default:
          return this.$store.state.todos;
      }
    },

    message() {
      if (this.$store.state.todos.length) {
        return `No ${this.$store.state.selectedFilter} Todos`;
      } else {
        return 'You have no Todos';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
ul.todo-list {
  margin: 2rem 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.25);
}
.message {
  margin: 1rem auto 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
