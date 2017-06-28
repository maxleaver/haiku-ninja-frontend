<template>
  <div class="col-xs-12 col-xs-8">
    <blockquote>
      <p>
        <span id="firstLine">{{ first }}</span><br />
        <span id="secondLine">{{ second }}</span><br />
        <span id="thirdLine">{{ third }}</span>
      </p>
      <footer id="author">{{ author }}</footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'haiku',

  props: {
    author: String,
    first: String,
    second: String,
    third: String
  }
}
</script>
