<template>
  <footer>
    <div class="stats">
      {{ completeTodosCount }}
      {{ completeTodosCount === 1 ? 'Todo' : 'Todos' }} Left
    </div>
    <div class="filters">
      <button
        v-for="(filter, index) in filterList"
        :key="index"
        :class="selectedFilter === filter ? 'active' : null"
        @click="updateFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      filterList: this.$store.state.filterList,
      selectedFilter: this.$store.state.selectedFilter
    };
  },

  beforeMount() {
    this.updateFilter(this.$store.state.selectedFilter);
  },

  methods: {
    updateFilter(filter) {
      this.selectedFilter = filter;
      this.$store.commit('SET_TODO_FILTER', filter);
    }
  },

  computed: {
    completeTodosCount() {
      return this.$store.getters.completeTodosCount;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stats {
    font-size: 0.8rem;
  }

  .filters {
    text-align: right;
    flex: 1;

    button {
      padding: 0.5rem;
      margin-left: 3px;
      text-transform: uppercase;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 0.7rem;
      cursor: pointer;
      transition: 0.2s all ease;

      &.active {
        background: rgba(255, 255, 255, 0.4);
        font-weight: bold;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      &:active,
      &:focus {
        outline: 0;
      }
    }
  }
}
</style>
