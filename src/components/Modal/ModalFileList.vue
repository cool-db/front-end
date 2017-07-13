<template>
  <div>
    <modal-attach-head
      type="文件" :icon="icon">
    </modal-attach-head>
    <div>
      <multi-list :list="relatefiles">
        <template slot="item" scope="scope">
          <modal-attach-body
            :executor="scope.props.ownerName"
            :avatar="scope.props.avatar">
            <div class="file-slot" @mouseenter="currentMouseOn = scope.index" @mouseleave="currentMouseOn = null">
              <div class="item"><img class="img" :src="scope.props.icon">
                <div>{{scope.props.name}}</div>
              </div>
              <modal-attach-delete :index="scope.index" :mouse="currentMouseOn"></modal-attach-delete>
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
  import ModalAttachDelete from './ModalAttachDelete.vue'

  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        currentMouseOn: null,
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
    computed: {
      ...mapState({
        relatefiles: state => state.task.task.files
      })
    },
    components: {
      ModalAttachDelete,
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
    justify-content: space-between;
    align-items: center;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border: 0.5px darkgrey solid;
  }
</style>
