<template>
  <div id="app" class="container">
    <page-header></page-header>

    <article class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in" v-if="showForm">
          <video-form></video-form>
        </transition>

        <transition name="fade" mode="out-in" v-if="isRequesting">
          <loading-spinner></loading-spinner>
        </transition>

        <transition name="fade" mode="out-in" v-else-if="showResults">
          <comment-list></comment-list>
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
import { mapGetters, mapState } from 'vuex'

function getInitialState () {
  return {
    abortSearch: false
  }
}

export default {
  name: 'app',

  components: {
    PageHeader,
    VideoForm,
    LoadingSpinner,
    CommentList,
    PageFooter
  },

  data () {
    return getInitialState()
  },

  computed: {
    ...mapState([
      'hasError',
      'isRequesting',
      'showForm',
      'showResults',
      'year'
    ]),

    ...mapGetters([
      'foundRecords'
    ])
  }
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import '~bootstrap-sass/assets/stylesheets/_bootstrap.scss';
@import url('https://fonts.googleapis.com/css?family=Arapey:400i|Lato:100,400,700');

html, body {
  font-family: 'Lato', 'Proxima Nova', 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif !important;
  background-color: #FAFAFA;
}

h1 {
  font-weight: 400;
}

h2, h3 {
  font-weight: 100;
}

.glyphicon-xl {
  font-size: 6em;
}

header {
  margin: 40px 0 20px;
}

header h1 {
  font-size: 3em;
  font-weight: 400;
  margin: 10px 0 0;
}

header p {
  font-family: 'Arapey', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.4em;
  color: #999;
}

.header-container {
  display: inline-block;
  text-align: left;
}

.header-row {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.flex-row {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.logo {
  background-image: url('~assets/red-circle.png');
  background-size: cover;
  height: 80px;
  width: 80px;
  margin-right: 20px;
}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: all .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.form-inline {
  text-align: center;
  padding: 20px 0;
  background-color: #FFF;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
}

.form-inline, .form-group {
  width: 100%;
}

.form-group {
  padding: 0 15px;
}

.form-inline button {
  width: 100%;
  margin-top: 10px;
}

blockquote {
  font-size: 1.6em;
  border: none;
  padding: 0;
  margin: 20px 0 30px;
}

blockquote p {
  font-weight: bold;
}

blockquote footer {
  font-size: 0.7em;
  font-weight: 100;
  color: #999;
}

.controlButton {
  font-size: 4em;
}

.clickable {
  color: $state-danger-text;
  transition: all .2s ease-in-out;
}

.clickable:hover {
  cursor: pointer;
  color: $brand-danger;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: $screen-sm-min) {
  .logo {
    height: 150px;
    width: 150px;
    margin: 0 auto;
  }

  .header-container {
    display: inline-block;
    text-align: center;
  }

  .header-row {
    flex-direction: column;
  }

  .form-inline input {
    width: 50% !important;
  }

  .form-inline button {
    width: auto;
    margin: 0;
  }

  blockquote {
    font-size: 2.2em;
  }
}

.app-footer {
  margin: 60px 0;
  color: #999;
}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: all .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.spin {
    -webkit-transform-origin: 50% 50%;
    transform-origin:50% 50%;
    -ms-transform-origin:50% 50%; /* IE 9 */
    -webkit-animation: spin 1.5s infinite linear;
    -moz-animation: spin 1.5s infinite linear;
    -o-animation: spin 1.5s infinite linear;
    animation: spin 1.5s infinite linear;
}

@-moz-keyframes spin {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
