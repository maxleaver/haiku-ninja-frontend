<template>
  <div id="app" class="container">
    <page-header></page-header>

    <article class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in" v-if="showForm">
          <video-form
            :errorMessage="errorMessage"
            :hasError="hasError"
            :submit="submit"
            :update="updateUrl"
            :videoUrl="videoUrl"
          ></video-form>
        </transition>

        <transition name="fade" mode="out-in" v-if="isRequesting">
          <loading-spinner
            :cancel="cancelRequest"
            :found="foundRecords"
            :searched="recordsSearched"
          ></loading-spinner>
        </transition>

        <transition name="fade" mode="out-in" v-else-if="showResults">
          <comment-list
            :active="activeComment"
            :comments="comments"
            :canDecrement="canDecrement"
            :canIncrement="canIncrement"
            :decrement="decrementComment"
            :found="foundRecords"
            :increment="incrementComment"
            :reset="resetState"
          >
          </comment-list>
        </transition>
      </div>
    </article>

    <page-footer :year="year"></page-footer>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import VideoForm from './components/VideoForm.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import CommentList from './components/CommentList.vue'
import PageFooter from './components/PageFooter.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'app',

  components: {
    PageHeader,
    VideoForm,
    LoadingSpinner,
    CommentList,
    PageFooter
  },

  computed: {
    ...mapState([
      'activeComment',
      'comments',
      'errorMessage',
      'hasError',
      'isRequesting',
      'recordsSearched',
      'showForm',
      'showResults',
      'videoUrl',
      'year'
    ]),

    ...mapGetters([
      'canDecrement',
      'canIncrement',
      'foundRecords'
    ])
  },

  methods: {
    ...mapActions(['cancelRequest']),

    ...mapMutations([
      'decrementComment',
      'incrementComment',
      'resetState'
    ]),

    updateUrl (e) {
      this.$store.commit('updateUrl', e.target.value)
    },

    submit () {
      this.$store.dispatch('submitForm')
    }
  }
}
</script>
