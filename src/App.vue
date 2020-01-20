<template>
  <main id="app">
    <header>
      <img :src="logoUrl" alt="vue.js logo" />
      <h1>{{ title }}</h1>
    </header>
    <AddTodoForm />
    <TodoList />
    <TodoListFooter />
    <transition name="fade">
      <EditTodoModal v-if="this.$store.state.isModalOpen" />
    </transition>
  </main>
</template>

<script>
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoListFooter from './components/TodoListFooter';
import EditTodoModal from './components/EditTodoModal';
import logo from './assets/logo.png';

export default {
  name: 'app',

  components: {
    AddTodoForm,
    TodoList,
    TodoListFooter,
    EditTodoModal
  },

  mounted() {
    this.$store.commit('GET_INITIAL_TODOS');
  },

  data() {
    return {
      title: 'Todos',
      logoUrl: logo
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  color: white;
  min-height: 100vh;
  background: linear-gradient(180deg, #35495d 0%, #42b983 100%);

  &.noscroll {
    overflow: hidden;
    height: 100vh;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem 0.5rem;
  margin: 0 auto;
  max-width: 768px;

  header {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    & > h1 {
      display: inline-block;
    }

    & > img {
      height: 40px;
      width: auto;
      margin-right: 1rem;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
