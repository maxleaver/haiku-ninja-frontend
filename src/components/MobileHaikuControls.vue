<template>
  <div class="visible-xs panel panel-default">
    <div class="panel-body">
      <div id="leftControl" v-on:click="decrementHaiku" v-bind:class="decrementStyle">
        <span class="glyphicon glyphicon-chevron-left"></span> {{ $t('previousButton') }}
      </div>

      <div id="rightControl" v-on:click="incrementHaiku" v-bind:class="incrementStyle">
        {{ $t('nextButton') }} <span class="glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'mobile-haiku-controls',

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
      'decrementHaiku',
      'incrementHaiku'
    ])
  }
}
</script>
