<template>
  <div class="row">
    <div v-if="videos.length > 0" class="col-xs-10 col-xs-offset-1">
      <div class="text-center text-muted">
        <h3 class="list-header">
          Here are a bunch of videos for <strong class="text-danger">"{{ searchTerm }}"</strong>
        </h3>

        <p class="lead">
          Pick a video<br />
          from the list below to find<br />
          sweet comment haiku
        </p>
      </div>

      <hr />

      <div id="video-results" v-for="video in videos" :key="video.id">
        <video-result
          :clickAction="fetchHaiku"
          :id="video.id"
          :title="video.title"
          :description="video.description"
          :thumbnailUrl="video.thumbnails.medium.url"
          />
      </div>

      <hr />
    </div>

    <div v-else class="col-xs-10 col-xs-offset-1">
      Sorry, no videos match <strong class="text-danger">"{{ searchTerm }}"</strong>
    </div>

    <div class="col-xs-12 text-center">
      <button id="resetButton" v-on:click="reset" class="btn btn-lg btn-default">
        <span class="glyphicon glyphicon-repeat"></span> <span id="resetText">{{ $t('retrySearchButton') }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import VideoResult from './VideoResult'

export default {
  name: 'video-list',

  components: {
    VideoResult
  },

  props: {
    fetchHaiku: Function,
    reset: Function,
    searchTerm: String,
    videos: Array
  }
}
</script>
