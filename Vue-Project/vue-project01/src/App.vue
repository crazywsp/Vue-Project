<template>
  <div>
    <button v-on:click="back">后退</button>
    <button v-on:click="forward">前进</button>
    <button v-on:click="home">返回首页</button>
    <button v-on:click="query">query</button>
    <button v-on:click="increment">increment</button>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/parent">parent</router-link>
      </li>
      <li>
        <router-link to="/parent1">parent1</router-link>
      </li>
    </ul>
    <p>a - {{ $route.query.a }}, b - {{ $route.query.b }}</p>
    <router-view />
    <p>{{ count }}</p>
  </div>
</template>

<script>

export default {
    data() {
        return {
          count: 0
        }
    },
    methods:  {
      back() {
          this.$router.go(-1)
      },
      forward() {
          this.$router.go(1)
      },
      home() {
          this.$router.push('/')
      },
      query() {
          this.$router.push({ path: '/', query: { a: 1, b: 2 }})
      },
      increment() {
        this.count++
      }
    },
    created() {
        console.log( this )
    }
}

</script>

<style>
</style>
