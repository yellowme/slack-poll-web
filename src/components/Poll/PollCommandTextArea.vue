<template>
  <div id="poll-command-text-area">
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <span id="instructions">Copy-pasta your command into slack :^)</span>
        <textarea
          :value="value"
          @input="$emit('input', $event.target.value)"
          id="command-input"
        >
        </textarea>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PollCommandTextArea',
  props: ['value']
}
</script>

<style>
#command-input {
  width: 100%;
  height: 92px;
  outline: 0;
  border: 1px solid var(--secondary-border-color);
  border-radius: 4px;
  resize: none;
  padding: 10px 15px 15px 15px;
}

#poll-command-text-area {
  text-align: left;
}
</style>
