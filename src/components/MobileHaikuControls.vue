<template>
  <div class="visible-xs panel panel-default">
    <div class="panel-body">
      <div id="leftControl" class="pull-left" v-on:click="decrement" v-bind:class="canDecrement ? 'clickable' : 'disabled'">
        <span class="glyphicon glyphicon-chevron-left"></span> {{ $t('previousButton') }}
      </div>

      <div id="rightControl" class="pull-right" v-on:click="increment" v-bind:class="canIncrement ? 'clickable' : 'disabled'">
        {{ $t('nextButton') }} <span class="glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-haiku-controls',

  props: {
    canDecrement: Boolean,
    canIncrement: Boolean,
    decrement: Function,
    increment: Function
  }
}
</script>
