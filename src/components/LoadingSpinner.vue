<template>
  <div class="text-center">
    <h1>{{ $t('loadingHeader') }}</h1>

    <div>
      <span class="glyphicon glyphicon-refresh spin glyphicon-xl text-muted"></span>
    </div>

    <p id="resultCounter" class="lead" v-if="isFetchingHaiku">
      {{ $tlang('en', 'foundHaiku', { found: foundTicker, searched: searchedTicker }) }}
    </p>

    <button v-on:click="cancel" class="btn btn-lg btn-danger">
      <span class="glyphicon glyphicon-stop"></span> <span id="buttonText">{{ $t('stopSearchButton') }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'loading-spinner',

  props: {
    isFetchingHaiku: Boolean,
    cancel: Function,
    found: Number,
    searched: Number
  },

  data () {
    return {
      foundInterval: false,
      foundTicker: 0,
      searchedInterval: false,
      searchedTicker: 0
    }
  },

  created: function () {
    this.foundTicker = this.found ? this.found : 0
    this.searchedTicker = this.searched ? this.searched : 0
  },

  watch: {
    searched: function (newValue, oldValue) {
      this.startNumberTicker('searchedInterval', 'searched', 'searchedTicker')
    },

    found: function () {
      this.startNumberTicker('foundInterval', 'found', 'foundTicker')
    }
  },

  methods: {
    startNumberTicker: function (intervalName, newValue, oldValue) {
      clearInterval(this[intervalName])

      if (this[newValue] === this[oldValue]) {
        return
      }

      this[intervalName] = window.setInterval(function () {
        if (this[oldValue] !== this[newValue]) {
          var change = (this[newValue] - this[oldValue]) / 10

          change = change >= 0 ? Math.ceil(change) : Math.floor(change)

          this[oldValue] = this[oldValue] + change
        }
      }.bind(this), 25)
    }
  }
}
</script>
