/**
* Created by dustar on 2017/7/11.
*/

<template>
  <el-cascader
    :options="items"
    @active-item-change="handleItemChange"
    v-model="select"
    :props="props"
    placeholder="请选择文件"
  ></el-cascader>
</template>

<script>
  export default {
    name: 'ModelSelectAttachItem',
    data () {
      return {
        items: [{
          label: '图片',
          items: []
        }, {
          label: '视频',
          items: []
        }],
        props: {
          value: 'label',
          children: 'items'
        }
      }
    },
    props: ['current'],
    computed: {
      select: function (a) {
        this.$emit('update:current', a)
      }
    },
    methods: {
      handleItemChange (val) {
        console.log('active item:', val)
        setTimeout(_ => {
          if (val.indexOf('图片') > -1 && !this.items[0].items.length) {
            this.items[0].items = [{
              label: 'a.jpg'
            }, {
              label: 'b.jpg'
            }]
          } else if (val.indexOf('视频') > -1 && !this.items[1].items.length) {
            this.items[1].items = [{
              label: 'c.avi'
            }, {
              label: 'd.wmv'
            }]
          }
        }, 300)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
