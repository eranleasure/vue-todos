import Vue from 'vue';
import Vuex from 'vuex';

import uuid from 'uuid/v4';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      // { id: 1, title: 'Todo item 1', complete: false },
      // { id: 2, title: 'Todo item 2', complete: true },
      // { id: 3, title: 'Todo item 3', complete: false }
    ],
    isModalOpen: false,
    todoInEdit: {},
    filterList: ['all', 'complete', 'incomplete'],
    selectedFilter: 'all'
  },

  getters: {
    completeTodosCount(state) {
      return state.todos.filter(todo => !todo.complete).length;
    }
  },

  mutations: {
    GET_INITIAL_TODOS(state) {
      if (localStorage.getItem('todos') !== null) {
        state.todos = JSON.parse(localStorage.getItem('todos'));
      }
    },

    ADD_TODO(state, payload) {
      state.todos.push({
        id: uuid(),
        title: payload.newTodo,
        complete: false
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    UPDATE_TODO_TITLE(state, payload) {
      state.todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, title: payload.title } : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));

      state.isModalOpen = false;
    },

    TOGGLE_TODO(state, payload) {
      state.todos = state.todos.map(todo =>
        todo.id === payload ? { ...todo, complete: !todo.complete } : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    DELETE_TODO(state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload.todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    TOGGLE_MODAL(state, payload) {
      state.isModalOpen = !state.isModalOpen;

      if (state.isModalOpen === true) {
        state.todoInEdit = state.todos.find(todo => todo.id === payload.todoId);
      }

      document.querySelector('body').classList.toggle('noscroll');
    },

    SET_TODO_FILTER(state, payload) {
      state.selectedFilter = payload;
    }
  }
});
