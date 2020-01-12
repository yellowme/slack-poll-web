<template>
  <div class="Poll">
    <b-container>
      <poll-title v-model="title" @keyupEnter="focusOnNextInput" />
      <poll-option-input v-model="newOptionText" @keyupEnter="addOption" />
      <b-row align-h="center">
        <b-col cols=6>
          <ul id="options-list">
            <li v-for="option in options" :key="option.id" class="option-lsit-item">
              <!-- <input type="text" :value="option.value" class="option-input-element"> -->
              <span class="option-element">{{ option.value }}</span>
              <a class="option-remove-element" @click="removeOption(option)">❌</a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <poll-command-text-area v-model="command" />
      <b-row align-h="center">
        <b-col cols="3">
          <a
            :class="successfulCopy ? 'text-success' : ''"
            @click="copyToClipboard"
          >
            {{ successfulCopy ? 'Copied!' : 'Copy' }}
          </a>
        </b-col>
      </b-row>
      <!-- <b-modal id="success-modal" title="Se copió el comando con éxito">
        <p class="my-4">¡Ahora ve a pegarlo en slack!</p>
      </b-modal> -->
    </b-container>
  </div>
</template>

<script>
import { transcript } from './utils/transcriptor'
import PollTitle from './Poll/PollTitle'
import PollOptionInput from './Poll/PollOptionInput'
import PollCommandTextArea from './Poll/PollCommandTextArea'

export default {
  name: 'Poll',
  components: {
    PollTitle,
    PollOptionInput,
    PollCommandTextArea
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

    focusOnNextInput() {
      document.getElementById('add-option-input').focus()
    },

    removeOption(option) {
      this.options.splice(this.options.indexOf(option), 1)
    },

    copyToClipboard() {
      let command = document.querySelector('#command-input')
      command.select()
      try {
        document.execCommand('copy')
        this.successfulCopy = true
      } catch {
        alert('Oops!')
      }
    }
  },
  watch: {
    command() {
      this.successfulCopy = false
    }
  },
  data() {
    return {
      title: '',
      newOptionText: '',
      options: [],
      multiple: false,
      command: '',
      successfulCopy: false
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

#options-list {
  text-align: left;
  list-style-type: none;
}

/*This is for a input type*/
/* 
.option-input-element {
  border: none;
}

.option-input-element:focus {
  outline: 0;
}
*/

.option-element {
  margin-right: 12px;
}

.option-remove-element {
  cursor: pointer;
}
</style>
