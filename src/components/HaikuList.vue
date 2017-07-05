<template>
  <div class="text-center">
    <div v-if="found > 0">
      <haiku-list-header :found="found" />

      <div class="row flex-row">
        <div class="col-xs-2 hidden-xs text-left">
          <haiku-control
            v-if="canDecrement"
            direction="left"
            :clickAction="decrement"
            />
        </div>

        <div class="col-xs-12 col-sm-8">
          <transition name="fade" mode="out-in">
            <haiku
              :first="haiku[active]['first']"
              :second="haiku[active]['second']"
              :third="haiku[active]['third']"
              :author="haiku[active]['author']"
              v-bind:key="active"
              />
          </transition>
        </div>

        <div class="col-xs-2 hidden-xs text-right">
          <haiku-control
            v-if="canIncrement"
            direction="right"
            :clickAction="increment"
            />
        </div>
      </div>

      <mobile-haiku-controls
        :canDecrement="canDecrement"
        :canIncrement="canIncrement"
        :decrement="decrement"
        :increment="increment"
        />
    </div>

    <no-haiku v-else></no-haiku>

    <div class="row hidden-xs">
      <div class="col-xs-12">
        <span v-if="videos.length > 0">
          <button id="videoButton" @click="showVideos" class="btn btn-lg btn-primary">
            <span class="glyphicon glyphicon-apple"></span> <span id="selectText">{{ $t('pickAnotherButton') }}</span>
          </button>

          <span class="separatorText text-center">or</span>
        </span>

        <button id="resetButton" @click="reset" class="btn btn-lg btn-danger">
          <span class="glyphicon glyphicon-repeat"></span> <span id="resetText">{{ $t('resetButton') }}</span>
        </button>
      </div>
    </div>

    <div class="row visible-xs">
      <div class="col-xs-12" v-if="videos.length > 0">
        <button id="videoButton" @click="showVideos" class="btn btn-lg btn-primary">
          <span class="glyphicon glyphicon-apple"></span> <span id="selectText">{{ $t('pickAnotherButton') }}</span>
        </button>
      </div>

      <div class="col-xs-12" v-if="videos.length > 0" style="margin: 5px 0;">
        <span class="separatorText text-center">— or —</span>
      </div>

      <div class="col-xs-12">
        <button id="resetButton" @click="reset" class="btn btn-lg btn-danger">
          <span class="glyphicon glyphicon-repeat"></span> <span id="resetText">{{ $t('resetButton') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HaikuListHeader from './HaikuListHeader'
import Haiku from './Haiku'
import HaikuControl from './HaikuControl'
import MobileHaikuControls from './MobileHaikuControls'
import NoHaiku from './NoHaiku'

export default {
  name: 'haiku-list',

  components: {
    HaikuListHeader,
    Haiku,
    HaikuControl,
    MobileHaikuControls,
    NoHaiku
  },

  props: {
    active: Number,
    canDecrement: Boolean,
    canIncrement: Boolean,
    haiku: Array,
    decrement: Function,
    found: Number,
    increment: Function,
    reset: Function,
    showVideos: Function,
    videos: Array
  },

  created: function () {
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
