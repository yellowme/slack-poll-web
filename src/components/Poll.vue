<template>
  <div class="Poll">
    <b-container>
      <poll-title v-model="title" @keyupEnter="focusOnNextInput" />
      <poll-option-input v-model="newOptionText" @keyupEnter="addOption" />
      <b-row align-h="center" id="slack-message-container">
        <b-col cols="6">
          <poll-info :title="title" @typeChanged="typeChanged($event)">
            <slack-section>
              <ul id="options-list">
                <li v-for="(option, key) in options" :key="key" class="option-lsit-item">
                  <input
                    type="text"
                    class="option-input-element"
                    @input="updateOptionPersisted($event, key)"
                    :value="option.value"
                  />
                  <a class="option-remove-element" @click="removeOption(key)">❌</a>
                </li>
              </ul>
            </slack-section>
          </poll-info>
        </b-col>
      </b-row>
      <poll-command-text-area v-model="command" />
      <b-row align-h="center">
        <b-col cols="3">
          <a
            :class="successfulCopy ? 'text-success' : ''"
            @click="copyToClipboard"
          >{{ successfulCopy ? 'Copied!' : 'Copy' }}</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { transcript } from "./utils/transcriptor";

import PollTitle from "./Poll/PollTitle";
import PollInfo from "./Poll/PollInfo";
import PollOptionInput from "./Poll/PollOptionInput";
import PollCommandTextArea from "./Poll/PollCommandTextArea";

import SlackSection from "./Decoration/SlackSection";

export default {
  name: "Poll",
  components: {
    PollTitle,
    PollInfo,
    PollOptionInput,
    PollCommandTextArea,
    SlackSection
  },
  data() {
    return {
      title: "",
      newOptionText: "",
      options: [],
      multiple: false,
      command: "",
      successfulCopy: false
    };
  },
  mounted() {
    this.title = localStorage.getItem("title")
      ? localStorage.getItem("title")
      : "";
    this.options = localStorage.getItem("options")
      ? JSON.parse(localStorage.getItem("options"))
      : [];
  },
  updated() {
    this.updateCommand();
  },
  methods: {
    addOption() {
      if (!this.newOptionText) return;

      this.options.push({
        value: this.newOptionText
      });

      this.newOptionText = "";
      this.updatedOptionsOffline(this.options);
    },
    removeOption(key) {
      this.options.splice(key, 1);
      this.updatedOptionsOffline(this.options);
    },
    updateOptionPersisted({ target: { value } }, id) {
      this.options = this.options.map((option, index) =>
        index === id ? { ...option, value } : option
      );

      this.updatedOptionsOffline(this.options);
    },
    focusOnNextInput() {
      document.getElementById("add-option-input").focus();
    },
    copyToClipboard() {
      let command = document.querySelector("#command-input");
      command.select();

      try {
        document.execCommand("copy");
        this.successfulCopy = true;
      } catch {
        alert("Oops!");
      }
    },
    typeChanged(event) {
      this.multiple = event;
      this.updateCommand();
    },
    updateCommand() {
      this.command = transcript({
        title: this.title,
        options: this.options.map(option => option.value),
        multiple: this.multiple
      });
    },
    updatedOptionsOffline(options) {
      localStorage.setItem("options", JSON.stringify(options));
    }
  },
  watch: {
    command() {
      this.successfulCopy = false;
    },
    title(newTitle) {
      localStorage.setItem("title", newTitle);
    }
  }
};
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
  margin: 0;
  padding: 0;
}

#slack-message-container {
  margin-top: 40px;
  margin-bottom: 40px;
}

/*This is for a input type*/

.option-input-element {
  border: none;
}

.option-input-element:focus {
  outline: 0;
}

.option-element {
  margin-right: 12px;
}

.option-remove-element {
  cursor: pointer;
}
</style>
