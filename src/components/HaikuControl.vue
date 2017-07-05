<template>
  <div
    v-on:click="clickAction"
    class="clickable controlButton"
    >
    <span v-bind:class="'glyphicon glyphicon-circle-arrow-' + direction"></span>
  </div>
</template>

<script>
export default {
  name: 'haiku-control',

  props: {
    clickAction: Function,
    direction: String
  }
}
</script>
