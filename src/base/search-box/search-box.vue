<template>
  <div class="search-box" :class="{'active':focused}" ref="searchBox">
    <i class="icon-search"></i>
    <input ref="query" v-model="query" @focus="onfocus" @blur="onblur" class="box" maxlength="1024" autocomplete="off" :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from 'common/js/utils'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data() {
      return {
        query: '',
        focused: false
      }
    },
    created() {
      // 用debounce来节流，300ms内多次请求只触发一次
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 300))
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      },
      onfocus() {
        this.focused = true
      },
      onblur() {
        this.focused = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: #fafafa
    border-radius: 6px
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)
    transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1)
    .icon-search
      font-size: 24px
      color: $color-text-gray
    .box
      flex: 1
      margin: 0 5px
      line-height: 25px
      background: rgba(0, 0, 0, 0)
      color: $color-text-dark
      font-size: $font-size-medium
      &:focus
        outline: none
      &::placeholder
        color: $color-text-dark
    .icon-dismiss
      font-size: 16px
      color: $color-text-dark
    &.active
      box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)
</style>
