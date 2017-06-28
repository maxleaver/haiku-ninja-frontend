<template>
  <header class="text-center">
    <div class="header-container">
      <div class="header-row">
        <div class="logo"></div>
        <div>
          <h1>{{ $t('title') }}</h1>
          <p>{{ $t('tagline') }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'page-header'
}
</script>
