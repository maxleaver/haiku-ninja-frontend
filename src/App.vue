<template>
  <div id="app" class="container">
    <page-header />

    <article class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in" v-if="showForm">
          <search-form
            :errorMessage="errorMessage"
            :hasError="hasError"
            :submit="submitForm"
            :update="updateForm"
            :formInput="formInput"
          />
        </transition>

        <transition name="fade" mode="out-in" v-if="isFetchingHaiku || isFetchingVideos">
          <loading-spinner
            :isFetchingHaiku="isFetchingHaiku"
            :cancel="cancel"
            :found="foundHaiku"
            :searched="recordsSearched"
            />
        </transition>

        <transition name="fade" mode="out-in" v-else-if="showHaiku">
          <haiku-list
            :active="activeHaiku"
            :canDecrement="canDecrement"
            :canIncrement="canIncrement"
            :decrement="decrementHaiku"
            :found="foundHaiku"
            :haiku="haiku"
            :increment="incrementHaiku"
            :reset="resetApp"
            :showVideos="showVideoResults"
            :videos="videos"
            />
        </transition>

        <transition name="fade" mode="out-in" v-else-if="showVideos">
          <video-list
            :fetchHaiku="fetchHaiku"
            :reset="resetApp"
            :search-term="formInput"
            :videos="videos"
            />
        </transition>
      </div>
    </article>

    <page-footer :year="year" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import SearchForm from './components/SearchForm'
import LoadingSpinner from './components/LoadingSpinner'
import HaikuList from './components/HaikuList'
import VideoList from './components/VideoList'
import PageFooter from './components/PageFooter'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'app',

  components: {
    PageHeader,
    SearchForm,
    LoadingSpinner,
    HaikuList,
    VideoList,
    PageFooter
  },

  computed: {
    ...mapState([
      'activeHaiku',
      'haiku',
      'errorMessage',
      'formInput',
      'hasError',
      'isFetchingHaiku',
      'isFetchingVideos',
      'nextPageToken',
      'recordsSearched',
      'showForm',
      'showHaiku',
      'showVideos',
      'videos',
      'year'
    ]),

    ...mapGetters([
      'canDecrement',
      'canIncrement',
      'foundHaiku'
    ])
  },

  methods: {
    ...mapActions([
      'cancel',
      'decrementHaiku',
      'fetchHaiku',
      'incrementHaiku',
      'resetApp',
      'showVideoResults',
      'submitForm',
      'updateForm'
    ])
  }
}
</script>
