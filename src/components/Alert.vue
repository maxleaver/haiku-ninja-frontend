<template>
  <div class="alert alert-danger text-center">
    <span class="glyphicon glyphicon-exclamation-sign"></span> <span id="errorMessage">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'alert',

  props: {
    message: String
  }
}
</script>
