<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <div class="ab">
      <tem
      <p v-show="show">I am a show.</p>
    </div>
    <!--<comA :my-value="myValue" @my-event="onComponentaMyEvent">
      <p slot="header">header插槽内容</p>
      <p slot="footer">footer插槽内容</p>
    </comA>
    <p :is="currentView"></p>
    <input type="text" v-model="myValue">
    {{ myValueWithComputed }}
    <select v-model="selection">
      <option v-for="item in selectVal" v-bind:value="item.value">
        {{ item.name }}
      </option>
    </select>
    {{ selection }}
    <div>
      <br>
      <input v-model="myBox" type="radio" value="apple"/>
      <input v-model="myBox" type="radio" value="banana"/>
      <input v-model="myBox" type="radio" value="orange"/>
      {{ myBox }}

      <ul>
        <li v-bind:class="[classA, {'red-font' : hasError }]" v-for="(item, index) in items">
          {{ item.name }} - {{ index }}
        </li>
      </ul>
      <a v-bind:href="link" v-bind:style="aStyle">to link</a>
      <button v-on:click="addItem">addItem</button>
    </div>-->
  </div>
</template>

<script>
import comA from './components/ComponentA'
import Vue from 'vue'
export default {
    components: {
      comA
    },
    watch: {
      myValue: function (val, oldVal) {
        // console.log(val, oldVal)
      }
    },
    computed: {
      myValueWithComputed () {
        return this.myValue
      }
    },
    data () {
      return {
        show: true,
        currentView: 'com-a',
        selection: null,
        myValue: '',
        selectVal: [
            {
              name: 'apple',
              value: 7
            },
            {
              name: 'banana',
              value: 5
            },
            {
              name: 'orange',
              value: 4
            }
        ],
        myBox: [],
        classA: 'blue-font',
        hasError: true,
        link: 'http://www.baidu.com',
        aStyle: {
          'color' : 'yellow',
          'fontSize': '38px'
        },
        items: [
          {
            name: 'apple',
            price: 7
          },
          {
            name: 'banana',
            price: 5
          },
          {
            name: 'orange',
            price: 4
          }
        ],
        objList: {
          color: 'red',
          fontSize: 16
        }
      }
    },
    methods:{
      addItem () {
        Vue.set(this.items, 1, {
          name: 'replace Fruit',
          price: 6
        })
      },
      onComponentaMyEvent (paramFromA) {
        console.log(paramFromA)
      }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
