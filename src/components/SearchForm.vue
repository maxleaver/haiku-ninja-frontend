<template>
  <div>
    <p class="lead text-center">
      Search YouTube comments<br />
      for hidden moments of Zen<br />
      in cat videos.
    </p>

    <div class="form-inline">
      <div class="form-group">
        <alert v-if="hasError" :message="errorMessage"></alert>

        <input
          @input="update"
          v-on:keydown.enter="submit"
          type="text"
          v-bind:placeholder="$t('inputPlaceholder')"
          class="form-control input-lg"
          >

        <button id="search-submit" v-on:click="submit" class="btn btn-lg btn-success">
          <span class="glyphicon glyphicon-leaf"></span> {{ $t('submitButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'

export default {
  name: 'search-form',

  components: {
    Alert
  },

  props: {
    errorMessage: String,
    hasError: Boolean,
    submit: Function,
    update: Function,
    formInput: String
  }
}
</script>
