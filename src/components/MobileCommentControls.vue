<template>
  <div class="visible-xs panel panel-default">
    <div class="panel-body">
      <div id="leftControl" v-on:click="decrementComment" v-bind:class="decrementStyle">
        <span class="glyphicon glyphicon-chevron-left"></span> Previous
      </div>

      <div id="rightControl" v-on:click="incrementComment" v-bind:class="incrementStyle">
        Next <span class="glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'mobile-comment-controls',

  props: {
    canDecrement: Boolean,
    canIncrement: Boolean
  },

  computed: {
    decrementStyle: function () {
      return this.canDecrement ? 'pull-left clickable' : 'pull-left disabled'
    },

    incrementStyle: function () {
      return this.canIncrement ? 'pull-right clickable' : 'pull-right disabled'
    }
  },

  methods: {
    ...mapMutations([
      'decrementComment',
      'incrementComment'
    ])
  }
}
</script>
