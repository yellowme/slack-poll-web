<template>
  <div class="Poll">
    <input type="text" v-model="title">
    <input type="text" v-model="newOptionText" @keyup.enter="addOption">
    <ul>
      <li v-for="option in options" :key="option.id">
        <input type="text" :value="option.value">
        <!-- {{ option }} -->
        <button @click="removeOption(option)">X</button>
      </li>
    </ul>
    <textarea v-model="command"></textarea>
  </div>
</template>

<script>
import { transcript } from './utils/transcriptor'

export default {
  name: 'Poll',
  methods: {
    addOption() {
      let id = 1
      if (this.options.length > 0) {
        id = this.options[0].id++
      }
      this.options.push({
        id: id,
        value: this.newOptionText
      })
      this.newOptionText = ''
    },

    removeOption(option) {
      this.options.splice(this.options.indexOf(option), 1)
    },
  },
  data() {
    return {
      title: '',
      newOptionText: '',
      options: [],
      multiple: false,
      command: ''
    }
  },
  updated() {
    this.command = transcript({
      title: this.title,
      options: this.options.map(option => option.value),
      multiple: this.multiple
    })
  }
}
</script>

<style scoped>
</style>
