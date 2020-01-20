<template>
  <form class="add-todo" @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" placeholder="Enter Todo..." />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        this.newTodo = '';
        return;
      }

      this.$store.commit('ADD_TODO', {
        newTodo: this.newTodo
      });

      this.newTodo = '';
    }
  }
};
</script>

<style lang="scss" scoped>
form.add-todo {
  margin: 2rem 0;
  display: flex;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);

  input[type='text'] {
    font-size: 1rem;
    color: #35495d;
    padding: 0.7rem 0.8rem;
    margin: 0;
    border: none;
    border-radius: 0;
    outline: 0;
    flex: 1;
    transition: 0.2s all ease;

    &:active {
      outline: 0;
    }
    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #bebebe;
    }
  }

  button[type='submit'] {
    font-size: 0.8rem;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 1rem 0.8rem;
    margin: 0;
    border: none;
    border-radius: 0;
    outline: 0;
    cursor: pointer;
    transition: 0.2s all ease;

    &:active,
    &:focus {
      outline: 0;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
