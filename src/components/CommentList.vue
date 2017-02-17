<template>
  <div class="text-center">
    <div v-if="foundRecords > 0">
      <div class="row">
        <div class="col-xs-12">
          <h3>
            Enjoy <strong class="text-danger">{{ foundRecords }} moments</strong> of Zen
          </h3>
        </div>
      </div>

      <div class="row flex-row">
        <div class="col-xs-2 hidden-xs text-right">
          <div
            v-if="canDecrement"
            v-on:click="decrementComment"
            class="clickable controlButton"
            >
            <span class="glyphicon glyphicon-circle-arrow-left"></span>
          </div>
        </div>

        <div class="col-xs-12 col-xs-8">
          <transition name="fade" mode="out-in">
            <comment
                :first="comments[activeComment]['first']"
                :second="comments[activeComment]['second']"
                :third="comments[activeComment]['third']"
                :author="comments[activeComment]['author']"
                v-bind:key="activeComment"
                >
            </comment>
          </transition>
        </div>

        <div class="col-xs-2 hidden-xs text-left">
          <div
            v-if="canIncrement"
            v-on:click="incrementComment"
            class="clickable controlButton"
            >
            <span class="glyphicon glyphicon-circle-arrow-right"></span>
          </div>
        </div>
      </div>

      <div class="visible-xs panel panel-default">
        <div class="panel-body">
          <div v-if="canDecrement" v-on:click="decrementComment" class="pull-left clickable">
            <span class="glyphicon glyphicon-chevron-left"></span> Previous
          </div>

          <div v-else class="pull-left text-muted">
            <span class="glyphicon glyphicon-chevron-left"></span> Previous
          </div>

          <div v-if="canIncrement" v-on:click="incrementComment" class="pull-right clickable">
            Next <span class="glyphicon glyphicon-chevron-right"></span>
          </div>

          <div v-else class="pull-right text-muted">
            Next <span class="glyphicon glyphicon-chevron-right"></span>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <no-comments></no-comments>
    </div>

    <button v-on:click="resetState" class="btn btn-lg btn-default">
      <span class="glyphicon glyphicon-repeat"></span> Try another video
    </button>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import NoComments from './NoComments.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'comment-list',

  components: { Comment, NoComments },

  mounted: function () {
    var vm = this

    window.addEventListener('keyup', function (event) {
      // If left arrow was pressed...
      if (event.keyCode === 37) {
        vm.$emit('left-pressed')
      }

      // If right arrow was pressed...
      if (event.keyCode === 39) {
        vm.$emit('right-pressed')
      }
    })

    vm.$on('left-pressed', () => {
      if (vm.canDecrement) {
        vm.decrementComment()
      }
    })

    vm.$on('right-pressed', () => {
      if (vm.canIncrement) {
        vm.incrementComment()
      }
    })
  },

  computed: {
    ...mapState([
      'activeComment',
      'comments'
    ]),

    ...mapGetters([
      'canDecrement',
      'canIncrement',
      'foundRecords'
    ])
  },

  methods: {
    ...mapMutations([
      'decrementComment',
      'incrementComment',
      'resetState'
    ])
  }
}
</script>
