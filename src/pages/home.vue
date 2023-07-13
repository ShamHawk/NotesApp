<template>
  <div>
    <Form @onSubmit="handleSubmit" />
    <List @onRemove="handleRemove" :items="notes" />
  </div>
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Form,
    List
  },
  computed: {
    ...mapGetters(['getNotes']),
    notes() {
      return this.getNotes
    }
  },
  mounted() {
    this.fetchNotes()
  },
  methods: {
    ...mapActions(['fetchNotes', 'addNote', 'removeNote']),
    handleSubmit(value, activeTag) {
      this.addNote({ value, activeTag })
    },
    handleRemove(index) {
      this.removeNote(index)
    }
  }
}
</script>
