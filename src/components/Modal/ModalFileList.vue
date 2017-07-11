<template>
    <div>
        <modal-attach-head
                type="日程" :icon="icon">
        </modal-attach-head>
        <div>
            <multi-list :list="fileList">
                <template slot="item" scope="scope">
                    <modal-attach-body
                            :executor="scope.props.executor"
                            :avatar="scope.props.avatar">
                        <div class="file-slot">
                          <img :src="scope.props.icon"><div>{{scope.props.filename}}</div>
                        </div>
                    </modal-attach-body>
                </template>
            </multi-list>
        </div>
    </div>
</template>

<script>
  import ModalAttachHead from './ModalAttachHead.vue'
  import ModalAttachBody from './ModalAttachBody.vue'
  import MultiList from './MultiList.vue'

  import file from '@/assets/icons/new_item/related-file.png'

  export default {
    data () {
      return {
        icon: file,
        fileList: [{
          executor: 'Simon',
          filename: 'hello.jpg',
          icon: file,
          checked: false,
          title: 'first',
          state: '未处理'
        }, {
          executor: ' dustark',
          filename: 'm.gif',
          icon: file,
          checked: true,
          title: 'second',
          state: '已处理'
        }]
      }
    },
    components: {
      ModalAttachHead,
      ModalAttachBody,
      MultiList
    }
  }
</script>

<style lang="scss" scoped>
    .file-slot {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border: 0.5px darkgrey solid;
  }
</style>
