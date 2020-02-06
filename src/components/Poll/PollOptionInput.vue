<template>
  <b-row align-h="center" id="poll-option-input">
    <b-col cols="12" md="6">
      <input
        type="text"
        placeholder="Add an amazing option"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('keyupEnter')"
        id="add-option-input"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PollOptioninput",
  props: ["value"]
};
</script>

<style>
#add-option-input {
  font-family: Lato;
  width: 100%;
  border: 1px solid var(--main-border-color);
  color: var(--main-font-primary-color);
  border-radius: 5px;
  padding: 10px 0px 10px 15px;
  font-weight: normal;
}

#add-option-input::placeholder {
  color: var(--main-font-secondary-color);
}

#add-option-input:focus {
  outline: 0;
}
</style>
