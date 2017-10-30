<template>
  <div class='m-header'>
    <div class="icon"></div>
    <h1 class="text">Petrichor Music</h1>
    <router-link to="/user" class="mine" tag="div">
      <i class="iconF-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin'
.m-header
  position relative
  height 44px
  text-align start
  padding 0 10px
  color $color-background
  font-size 0
  background-color $color-theme
  .icon
    display inline-block
    vertical-align top
    margin-top 3px
    width 36px
    height 36px
    margin-right 3p
    bg-image('logo')
    background-size 36px 36px
  .text
    display inline-block
    vertical-align top
    line-height 44px
    opacity 0.8
    font-size $font-size-medium-x
  .mine
    position absolute
    top 0
    right 0
    .iconF-mine
      display block
      padding 10px
      font-size 24px
      color $color-background
</style>
