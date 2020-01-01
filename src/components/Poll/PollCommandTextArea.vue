<template>
  <div id="poll-command-text-area">
    <b-row align-h="center">
      <b-col cols=6>
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
  width: 100%
}
</style>
