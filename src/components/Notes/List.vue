<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in items" :key="index">
      <div class="note-header">
        <p v-if="!note.isEditing">{{ note.title }}</p>
        <input
          v-else
          :class="{ 'editing-input': note.isEditing }"
          type="text"
          v-model="note.title"
          @keyup.enter="saveChanges(index)"
        />
        <div class="note-actions">
          <button
            style="cursor: pointer"
            v-if="!note.isEditing"
            @click="toggleEditing(index)"
          >
            <img src="@/assets/icons/edit.png" alt="edit" />
          </button>
          <button style="cursor: pointer" v-else @click="saveChanges(index)">
            <img src="@/assets/icons/save.png" alt="save" />
          </button>
        </div>
        <p style="cursor: pointer" @click="$emit('onRemove', index)">
          &#10005;
        </p>
      </div>
      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
import { mapActions } from 'vuex'
export default {
  components: { TagsList },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['updateNote']),
    toggleEditing(index) {
      this.items[index].isEditing = !this.items[index].isEditing
      this.updateNote({ index, note: this.items[index] })
    },
    saveChanges(index) {
      this.items[index].isEditing = !this.items[index].isEditing
      this.updateNote({ index, note: this.items[index] })
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  position: relative;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.note-actions {
  width: 40px;
  position: absolute;
  right: 50px;
}
.note-actions button {
  background-color: transparent;
  border: none;
}
.editing-input {
  width: 80%;
}
</style>
