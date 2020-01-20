<template>
  <li class="todo-list-item">
    <div class="todo">
      <input
        :id="`todo-${todo.id}`"
        name="todo"
        type="checkbox"
        @change="toggleTodo(todo.id)"
        :checked="todo.complete"
        class="custom-checkbox"
      />
      <label :for="`todo-${todo.id}`">{{ todo.title }}</label>
    </div>
    <TodoListItemActions :todo="todo" />
  </li>
</template>

<script>
import TodoListItemActions from './TodoListItemActions';

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  components: {
    TodoListItemActions
  },

  methods: {
    toggleTodo(todoId) {
      this.$store.commit('TOGGLE_TODO', todoId);
    }
  }
};
</script>

<style lang="scss" scoped>
li.todo-list-item {
  background: white;
  color: #35495d;
  padding: 1rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
  position: relative;
  overflow: hidden;
  transition: 0.2s all ease;

  > .todo {
    width: calc(100% - 1.6rem);
    height: 22px;
    overflow: hidden;
  }

  .todo input.custom-checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
    }

    & + label:before {
      content: '';
      margin-right: 0.5rem;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: rgba(66, 185, 131, 0.3);
      transition: 0.2s all ease;
    }

    &:checked + label {
      color: rgba(53, 73, 93, 0.3);
      text-decoration: line-through;
    }

    &:checked + label:before {
      background: #42b983;
    }

    &:checked + label:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 7px;
      width: 4px;
      height: 9px;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
      transform: rotate(45deg);
    }
  }
}
</style>
