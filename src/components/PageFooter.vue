<template>
  <footer class="row app-footer">
    <div class="col-xs-12 text-center">
      <span>&copy; {{ year }}, Max Leaver</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',

  props: {
    year: Number
  }
}
</script>
