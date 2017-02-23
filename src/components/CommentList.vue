<template>
  <div class="text-center">
    <div v-if="found > 0">
      <comment-list-header
        :found="found"
      >
      </comment-list-header>

      <div class="row flex-row">
        <div class="col-xs-2 hidden-xs text-left">
          <comment-control v-if="canDecrement" direction="left" :clickAction="decrement"></comment-control>
        </div>

        <div class="col-xs-12 col-sm-8">
          <transition name="fade" mode="out-in">
            <comment
              :first="comments[active]['first']"
              :second="comments[active]['second']"
              :third="comments[active]['third']"
              :author="comments[active]['author']"
              v-bind:key="active"
              >
            </comment>
          </transition>
        </div>

        <div class="col-xs-2 hidden-xs text-right">
          <comment-control v-if="canIncrement" direction="right" :clickAction="increment"></comment-control>
        </div>
      </div>

      <mobile-comment-controls
        :canDecrement="canDecrement"
        :canIncrement="canIncrement"
      >
      </mobile-comment-controls>
    </div>

    <no-comments v-else></no-comments>

    <button v-on:click="reset" class="btn btn-lg btn-default">
      <span class="glyphicon glyphicon-repeat"></span> <span id="resetText">Try another video</span>
    </button>
  </div>
</template>

<script>
import CommentListHeader from './CommentListHeader'
import Comment from './Comment'
import CommentControl from './CommentControl'
import MobileCommentControls from './MobileCommentControls'
import NoComments from './NoComments'

export default {
  name: 'comment-list',

  components: {
    CommentListHeader,
    Comment,
    CommentControl,
    MobileCommentControls,
    NoComments
  },

  props: {
    active: Number,
    canDecrement: Boolean,
    canIncrement: Boolean,
    comments: Array,
    decrement: Function,
    found: Number,
    increment: Function,
    reset: Function
  },

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
      vm.decrement()
    })

    vm.$on('right-pressed', () => {
      vm.increment()
    })
  }
}
</script>
