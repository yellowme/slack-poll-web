<template>
  <b-row align-h="center" id="poll-option-input">
    <b-col cols=6>
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('keyupEnter')"
        id="add-option-input"
      >
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PollOptioninput',
  props: ['value']
}
</script>

<style>
#add-option-input {
  width: 100%;
}
</style>
