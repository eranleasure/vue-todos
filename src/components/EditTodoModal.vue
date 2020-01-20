<template>
  <div id="modal">
    <div id="modal-content">
      <h2>Edit Todo</h2>
      <form @submit.prevent="saveEdit">
        <input
          type="text"
          ref="modalInput"
          :value="todoTitle"
          @input="updateTodoTitle"
        />
        <div class="button-group">
          <button class="button primary" type="submit">Save</button>
          <button class="button outline" type="button" @click="cancelEdit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachedTodoTitle: this.$store.state.todoInEdit.title,
      todoTitle: this.$store.state.todoInEdit.title
    };
  },

  mounted() {
    this.$refs.modalInput.focus();
  },

  methods: {
    updateTodoTitle(e) {
      this.todoTitle = e.target.value;
    },

    saveEdit() {
      this.$store.commit('UPDATE_TODO_TITLE', {
        ...this.$store.state.todoInEdit,
        title: this.todoTitle
      });
    },

    cancelEdit() {
      this.$store.commit('TOGGLE_MODAL');
    }
  }
};
</script>

<style lang="scss" scoped>
#modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  #modal-content {
    background: white;
    color: #35495d;
    padding: 1rem;
    min-width: 300px;
    max-width: 500px;

    h2 {
      margin-top: 0;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        font-size: 1rem;
        color: #35495d;
        padding: 0.7rem 0.8rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 0 !important;
        outline: 0;
        -webkit-appearance: none;
        transition: 0.2s all ease;

        &:focus,
        &:active {
          outline: 0;
          border-color: #42b983;
        }
      }
    }

    .button-group {
      text-align: right;

      button {
        display: inline-block;
        padding: 0.8rem;
        font-size: 1rem;
        background-color: white;
        border: none;
        color: #35495d;
        cursor: pointer;
        transition: 0.2s all ease;

        &:hover {
          background-color: #eee;
        }

        &:active,
        &:focus {
          outline: 0;
        }

        &:first-child {
          margin-right: 0.5rem;
        }

        &.primary {
          background-color: #42b983;
          color: white;

          &:hover {
            background-color: rgba(66, 185, 131, 0.8);
          }
        }
      }
    }
  }
}
</style>
