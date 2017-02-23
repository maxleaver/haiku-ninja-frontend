<template>
  <footer class="row app-footer">
    <div class="col-xs-12 text-center">
      &copy; <span>{{ year }}</span>, Max Leaver
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
