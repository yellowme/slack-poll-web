<template>
  <div class="Poll">
    <b-container>
      <poll-title v-model="title" />
      <poll-option-input v-model="newOptionText" @keyupEnter="addOption" />
      <b-row align-h="center">
        <b-col cols=6>
          <ul id="options-list">
            <li v-for="option in options" :key="option.id">
              <input type="text" :value="option.value">
              <a @click="removeOption(option)">❌</a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols=6>
          <textarea v-model="command" id="command-input"></textarea>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="3">
          <a @click="copyToClipboard">Copy</a>
        </b-col>
      </b-row>
      <b-modal id="success-modal" title="Se copió el comando con éxito">
        <p class="my-4">¡Ahora ve a pegarlo en slack!</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { transcript } from './utils/transcriptor'
import PollTitle from './Poll/PollTitle'
import PollOptionInput from './Poll/PollOptionInput'

export default {
  name: 'Poll',
  components: {
    PollTitle,
    PollOptionInput
  },
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

    copyToClipboard() {
      let command = document.querySelector('#command-input')
      command.select()
      try {
        document.execCommand('copy')
        this.$bvModal.show('success-modal')
      } catch {
        alert('Oops!')
      }
    }
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
#title-input,
#add-option-input,
#command-input {
  width: 100%;
}
</style>
