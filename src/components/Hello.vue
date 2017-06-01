<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <h2>counter</h2>
        <div>
            <el-button @click="visible = true">按钮</el-button>
            <el-dialog v-model="visible" title="Hello world">
                <p>欢迎使用 Element</p>
            </el-dialog>
            <button @click="add">+</button>
            <span>{{ count }}</span>
            <button @click="sub">-</button>
            <button @click="reset">reset</button>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        visible: true
      }
    },

    computed: mapGetters([
      'count'
    ]),

    methods: {
      ...mapMutations({
        'add': 'hello/INCREASE',
        'sub': 'hello/DOWN',
        'reset': 'hello/RESET'
      })
    }
  }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
