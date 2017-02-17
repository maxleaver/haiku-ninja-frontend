<template>
  <div class="alert alert-danger text-center">
    <span class="glyphicon glyphicon-exclamation-sign"></span> {{ errorMessage }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'alert',

  computed: {
    ...mapState([
      'errorMessage'
    ])
  }
}
</script>
