<template>
  <div class='m-header'>
    <div class="icon"></div>
    <h1 class="text">Petrichor Music</h1>
    <div class="topfr">
      <span class="topbton">下载APP</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin'

  .m-header
    position: relative
    height: 44px
    text-align: start
    padding: 0 10px
    color: $fffafa
    font-size: 0
    background-color: $color-theme;
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 3px
      width: 36px
      height : 36px
      margin-right: 3px
      bg-image('logo')
      background-size: 36px 36px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      opacity: 0.8
      font-size: $font-size-medium-x
    .topfr
      float: right
      height: 30px
      padding: 7px 0
      .topbton
        position: relative
        display: inline-block
        height: 30px
        line-height: 30px
        padding: 0 10px
        color: #fffafa
        font-size: 15px
        &:after
          position: absolute
          content: ""
          top: 0
          left: 0
          width: 100%
          height: 100%
          pointer-events: none
          box-sizing: border-box
          border: 1px solid rgba(255, 255, 255, .5)
          border-radius: 37.5%/100%
          transform-origin: top left
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme

</style>
