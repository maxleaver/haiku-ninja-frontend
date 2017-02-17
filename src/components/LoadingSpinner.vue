<template>
  <div class="text-center">
    <h1>Finding Zen</h1>

    <div>
      <span class="glyphicon glyphicon-refresh spin glyphicon-xl text-muted"></span>
    </div>

    <p class="lead">
      Found <span class="found">{{ foundTicker }}</span> Haiku in <span class="searched">{{ searchedTicker }}</span> comments
    </p>

    <button v-on:click="cancelRequest" class="btn btn-lg btn-danger">
      <span class="glyphicon glyphicon-stop"></span> Stop Searching
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'loading-spinner',

  data () {
    return {
      foundInterval: false,
      foundTicker: 0,
      searchedInterval: false,
      searchedTicker: 0
    }
  },

  computed: {
    ...mapState(['recordsSearched']),
    ...mapGetters(['foundRecords'])
  },

  ready: function () {
    this.foundTicker = this.foundRecords ? this.foundRecords : 0
    this.searchedTicker = this.recordsSearched ? this.recordsSearched : 0
  },

  watch: {
    recordsSearched: function (newValue, oldValue) {
      this.startNumberTicker('searchedInterval', 'recordsSearched', 'searchedTicker')
    },

    foundRecords: function () {
      this.startNumberTicker('foundInterval', 'foundRecords', 'foundTicker')
    }
  },

  methods: {
    ...mapActions(['cancelRequest']),

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
