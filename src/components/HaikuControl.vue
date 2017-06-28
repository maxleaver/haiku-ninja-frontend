<template>
  <div
    v-on:click="clickAction"
    class="clickable controlButton"
    >
    <span v-bind:class="glyph"></span>
  </div>
</template>

<script>
export default {
  name: 'haiku-control',

  props: {
    clickAction: Function,
    direction: String
  },

  computed: {
    glyph: function () {
      return 'glyphicon glyphicon-circle-arrow-' + this.direction
    }
  }
}
</script>
