<template>
  <div id="poll-title">
    <b-row align-h="center">
      <b-col cols=6>
        <input
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
          id="title-input"
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PollTitle',
  props: ['value']
}
</script>

<style>
#title-input {
  width: 100%;
}
</style>
