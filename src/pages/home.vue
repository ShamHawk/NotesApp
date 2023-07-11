<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: 'анжуманя',
          tags: ['спорт']
        },
        {
          title: 'прес качат',
          tags: ['спорт']
        },
        {
          title: 'бегит',
          tags: []
        }
      ]
    }
  },
  mounted() {
    this.getNodes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    getNodes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit(value, activeTag) {
      const note = {
        title: value,
        tags: activeTag ? [activeTag] : []
      }
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    editNote(index) {
      this.editingInput.index = index
      this.editingInput.value = this.notes[index]
    },
    onEdit(index) {
      this.editedNote.value = this.notes.splice(
        index,
        1,
        this.editingInput.value
      )
      this.editingInput.index = null
      this.editingInput.value = ''
    }
  }
}
</script>
