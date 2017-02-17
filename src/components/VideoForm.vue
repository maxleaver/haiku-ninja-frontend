<template>
  <div>
    <p class="lead text-center">
      Put the URL<br />
      of a YouTube video<br />
      in the form below.
    </p>

    <div class="form-inline">
      <div class="form-group">
        <label for="url">Enter a YouTube Video</label>

        <alert v-if="hasError"></alert>

        <input
          :value="videoUrl"
          @input="updateUrl"
          v-bind:disabled="isRequesting"
          v-on:keydown.enter="submit"
          id="url"
          type="text"
          placeholder="Ex. https://youtu.be/dQw4w9WgXcQ"
          class="form-control input-lg">

        <button v-if="isRequesting" class="btn btn-lg btn-success" v-bind:disabled="isRequesting">
          <span class="glyphicon glyphicon-refresh spin"></span> Finding inner peace...
        </button>

        <button v-else v-on:click="submit" class="btn btn-lg btn-success">
          <span class="glyphicon glyphicon-leaf"></span> Find inner peace
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'video-form',

  components: {
    Alert
  },

  computed: {
    ...mapState([
      'hasError',
      'isRequesting',
      'videoUrl'
    ])
  },

  methods: {
    ...mapActions(['submitForm']),

    updateUrl (e) {
      this.$store.commit('updateUrl', e.target.value)
    },

    submit () {
      this.$store.dispatch('submitForm', this.videoUrl)
    }
  }
}
</script>
