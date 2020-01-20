<template>
  <div class="actions-drawer" :class="{ open: isActionsDrawerOpen }">
    <span class="actions-drawer-handle" @click="toggleActionsDrawer">
      <img src="../assets/chevrons-left.svg" alt="arrow" class="arrow" />
    </span>
    <button class="edit" @click="openEditModal(todo.id)">
      <img src="../assets/edit.svg" alt="edit" />
    </button>
    <button class="delete" @click="deleteTodo(todo.id)">
      <img src="../assets/trash.svg" alt="delete" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isActionsDrawerOpen: false
    };
  },

  methods: {
    toggleActionsDrawer() {
      this.isActionsDrawerOpen = !this.isActionsDrawerOpen;
    },

    openEditModal(todoId) {
      this.$store.commit('TOGGLE_MODAL', {
        todoId
      });

      this.toggleActionsDrawer();
    },

    deleteTodo(todoId) {
      this.$store.commit('DELETE_TODO', {
        todoId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.actions-drawer {
  background: rgba(53, 73, 93, 0.8);
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: -101px;
  height: 100%;
  padding: 0 0.5rem;
  transition: 0.2s all ease-in;

  &.open {
    right: 0;

    .actions-drawer-handle img {
      transform: rotate(180deg);
    }
  }

  .actions-drawer-handle {
    position: absolute;
    top: 0;
    left: -33px;
    background: #35495d;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 0.3rem;
    cursor: pointer;
  }

  button {
    color: white;
    border: none;
    padding: 0.5rem;
    margin: 0 0.2rem;
    cursor: pointer;
    transition: 0.2s all ease;

    &:first-child {
      margin-right: 0.25rem;
    }
    &:last-child {
      margin-left: 0.25rem;
    }
    &:focus {
      outline: 0;
    }

    img {
      width: 20px;
      height: auto;
    }
  }

  .edit {
    background-color: #35495d;
    &:hover {
      background-color: rgba(53, 73, 93, 0.8);
    }
  }
  .delete {
    background-color: #e25b5b;
    &:hover {
      background-color: rgba(226, 91, 91, 0.8);
    }
  }
}

.arrow {
  display: inline-block;
  transition: 0.2s all ease;
}
</style>
