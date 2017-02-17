<template>
  <blockquote>
    <p>
      {{ first }}<br />
      {{ second }}<br />
      {{ third }}
    </p>
    <footer>{{ author }}</footer>
  </blockquote>
</template>

<script>
export default {
  name: 'comment',

  props: {
    author: String,
    first: String,
    second: String,
    third: String
  }
}
</script>
