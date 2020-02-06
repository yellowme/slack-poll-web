<template>
  <li>
    <input type="text" class="option-input-element" v-model="option" />
    <a class="option-remove-element" @click="remove">❌</a>
  </li>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    remove() {
      this.$emit('remove')
    }
  },
  computed: {
    option: {
      get() {
        return this.value
      },
      set(event) {
        this.$emit('input', event)
      }
    }
  }
}
</script>
<style scoped>
.option-input-element {
  border: none;
}

.option-input-element:focus {
  outline: 0;
}

.option-remove-element {
  cursor: pointer;
}
</style>