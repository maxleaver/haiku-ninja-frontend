<template>
  <div class="row">
    <div class="col-xs-12">
      <h3>
        Enjoy <strong class="text-danger">{{ found }} moments</strong> of Zen
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-list-header',

  props: {
    found: Number
  }
}
</script>
