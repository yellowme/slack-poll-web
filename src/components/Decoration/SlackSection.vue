<template>
  <div class="slack-section">
    <div class="separator"></div>
    <div class="slack-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlackSection'
}
</script>

<style>
.slack-section {
  text-align: left;
  display: flex;
}

.separator {
  width: 4px;
  align-items: stretch;
  background-color: var(--yellowme-color);
  border-radius: 2px;
}

.slack-slot {
  padding-top: 3px;
  padding-bottom: 4px;
  margin-left: 13px;
}
</style>