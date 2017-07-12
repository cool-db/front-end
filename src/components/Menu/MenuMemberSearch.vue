<!--/**-->
<!--* Created by dustar on 2017/7/12.-->
<!--*/-->

<!--<template>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--users: [],-->
        <!--results: [],-->
        <!--current: ''-->
      <!--}-->
    },
//    methods: {
//      onChange (value) {
//          querySearch(value, this.)
//      },
//      querySearch (queryString, cb) {
//        let users = this.users;
//        let results = queryString ? users.filter(this.createFilter(queryString)) : users;
//        // 调用 callback 返回建议列表的数据
//        cb(results);
//      },
//      createFilter (queryString) {
//        return (users) => {
//          return (users.name.indexOf(queryString.toLowerCase()) === 0 || users.email.indexOf(queryString.toLowerCase()) === 0)
//        }
//      },
//      loadAll() {
//        return [
//          {
//            name: '西蒙',
//            avatar: null,
//            email: '381029382@qq.com',
//            permission: 'member'
//          }, {
//            name: '西门子',
//            avatar: null,
//            email: '381029382@qq.com',
//            permission: 'member'
//          }, {
//            name: '谢地',
//            avatar: null,
//            email: '381029382@qq.com',
//            permission: 'member'
//          }, {
//            name: 'Andi Obama',
//            avatar: null,
//            email: '381029382@qq.com',
//            permission: 'owner'
//          }
//        ]
//      },
//      handleSelect(item) {
//        console.log(item);
//      },
//      handleIconClick(ev) {
//        console.log(ev);
//      }
//    },
//    mounted() {
//      this.users = this.loadAll();
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
  }
</style>
