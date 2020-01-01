<template>
  <div id="poll-title">
    <b-row align-h="center">
      <b-col cols=6>
        <input
          id="title-input"
          type="text"
          placeholder="Here goes your poll title"
          autocomplete="off"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @keyup.enter="$emit('keyupEnter')"
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
  outline: none;
  border: 0;
  font-size: 48px;
}

#title-input {
  outline: none;
}
</style>
