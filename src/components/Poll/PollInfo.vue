<template>
  <div id="poll-info">
    <slack-section>
      <div id="info-group">
        <h4 id="poll-title">{{ title }}</h4>
        <div>By: You</div>
        <div>
          Mode:
          <a id="poll-type" @click="togglePollType">{{ multiple ? 'Multiple' : 'Single' }}</a>
        </div>
      </div>
    </slack-section>
  </div>
</template>

<script>
import SlackSection from '../Decoration/SlackSection'

export default {
  name: 'PollInfo',
  components: {
    SlackSection
  },
  props: ['title'],
  methods: {
    togglePollType() {
      this.multiple = !this.multiple
      this.$emit('typeChanged', this.multiple)
      this.$emit('updated')
    }
  },
  data() {
    return {
      multiple: false
    }
  }
}
</script>

<style>
#poll-info {
  margin-bottom: 10px;
}

#poll-title {
  font-family: LatoBold;
  font-size: 19px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
}

#poll-type {
  font-family: LatoBold;
  font-weight: bold;
  text-decoration: underline;
}
</style>