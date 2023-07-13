import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    addNote(state, note) {
      state.notes.push(note)
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
    updateNote(state, { index, note }) {
      state.notes[index] = note
    }
  },
  actions: {
    fetchNotes({ commit }) {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        const notes = JSON.parse(localNotes)
        commit('setNotes', notes)
      }
    },
    updateNote({ commit, state }, { index, note }) {
      commit('updateNote', { index, note })
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    addNote({ commit }, { value, activeTag }) {
      const note = {
        title: value,
        tags: activeTag ? [activeTag] : []
      }
      commit('addNote', note)
      localStorage.setItem('notes', JSON.stringify([...this.state.notes]))
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
      localStorage.setItem('notes', JSON.stringify([...this.state.notes]))
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})
