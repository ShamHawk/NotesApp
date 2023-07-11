<template>
  <div class="notes-form-wrapper">
    <form class="notes-form" @submit.prevent="onSubmit">
      <input
        required
        v-model="value"
        placeholder="type your note"
        @keydown.enter="onSubmit"
      />
      <TagsList
        :items="tags"
        @onItemClick="handleTagClick"
        :isActive="activeTag"
      />
      <button class="btn btnPrimary" type="submit">Добавить заметку</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: ['дом', 'работа', 'спорт', 'шоппинг', 'хобби', 'финансы'],
      activeTag: null
    }
  },
  methods: {
    onSubmit() {
      const { value, activeTag } = this
      this.$emit('onSubmit', value, activeTag)
      console.log(value, activeTag)
      this.value = ''
      this.activeTag = null
    },
    handleTagClick(tag) {
      this.activeTag = tag === this.activeTag ? null : tag
    }
  }
}
</script>

<style lang="scss">
.notes-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notes-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin: 10px;
  }
}
.btnPrimary {
  margin-top: 20px;
}
</style>
