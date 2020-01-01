<template>
  <div id="poll-options-list">
    <b-row align-h="center">
      <b-col cols=6>
        <ul id="options-list">
          <li v-for="option in options" :key="option.id">
            <input type="text" :value="option.value">
            <a @click="$emit('click')">❌</a>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PollOptionsList',
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
