<template>
  <div id="videoResult" v-on:click="clickAction({ id: id })" class="row clickable video">
    <div class="col-xs-4">
      <img v-bind:src="thumbnailUrl" v-bind:alt="title" class="img-thumbnail">
    </div>
    <div class="col-xs-8">
      <h4 class="text-primary"><strong>{{ title }}</strong></h4>
      <p class="text-muted">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-result',

  props: {
    clickAction: Function,
    description: String,
    id: String,
    thumbnailUrl: String,
    title: String
  }
}
</script>
