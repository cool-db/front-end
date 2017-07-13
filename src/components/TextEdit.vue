<template>
    <input type="text" spellcheck="false"
           :class="textClass"
           :value="textData"
           ref="textEdit"
           @click="focus"
           @blur="lose"
           @change="changeValue">
</template>

<script>
  export default {
    props: {
      content: String,
      onChange: Function
    },
    data () {
      return {
        blurState: false
      }
    },
    mounted () {
      const node = this.$refs.textEdit
      node.style.width = `${parseInt(getComputedStyle(node).fontSize) * node.value.length}px`
    },
    computed: {
      textClass () {
        return 'text-input ' + (this.blurState ? 'text-bg' : '')
      },
      textData () {
        return this.content
      }
    },
    methods: {
      focus () {
        this.blurState = true
      },
      lose () {
        this.blurState = false
      },
      changeValue (e) {
        const node = this.$refs.textEdit
        const etv = e.target.value
        node.style.width = `${parseInt(getComputedStyle(node).fontSize) * etv.length}px`
        const value = etv || this.content
        this.onChange ? this.onChange(value) : this.$emit('update:content', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .text-bg {
        background-color: #EAEAEA !important;
    }

    .text-input {
        border: 0;
        outline: none;
        background-color: #F8F8F8;
        line-height: 32px;
        font-size: 24px;
        border-radius: 4px;

        &:hover {
            background-color: #EAEAEA;
        }
    }
</style>
