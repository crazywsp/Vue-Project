<template>
  <div class="home">
    <el-card class="box-card">
      <div slot="header">
        <span>卡片名称</span>
      </div>
      <div>
        <el-form
          :inline="true"
        >
          <el-form-item
          >
            <el-input type="text" v-model="msg"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleEnter">Click Me</el-button>
          </el-form-item>
        </el-form>
        <ul>
          <li v-for="(item,index) in toList" :key="index">{{item.id }}----------{{item.msg}}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    toList() {
      return this.$store.getters.toList;
    }
  },
  created() {
    // console.log( this.$store.state.user.toList);
    // console.log( this.$store.getters.toList);
  },
  methods: {
    ...mapActions(["SET_TOLIST"]),
    handleEnter() {
      if(!this.msg) return
      let i = this.toList.length;
      let item = {
        id: i,
        msg: this.msg
      };
      this.SET_TOLIST(item);
      this.msg = "";
    }
  },
  components: {}
};
</script>
