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

        <alert v-if="hasError" :message="errorMessage"></alert>

        <input
          @input="update"
          v-on:keydown.enter="submit"
          id="url"
          type="text"
          placeholder="Ex. https://youtu.be/dQw4w9WgXcQ"
          class="form-control input-lg">

        <button v-on:click="submit" class="btn btn-lg btn-success">
          <span class="glyphicon glyphicon-leaf"></span> Find inner peace
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'

export default {
  name: 'video-form',

  components: {
    Alert
  },

  props: {
    errorMessage: String,
    hasError: Boolean,
    submit: Function,
    update: Function,
    videoUrl: String
  }
}
</script>
