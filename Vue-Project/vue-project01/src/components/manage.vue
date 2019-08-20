<template>
    <!-- 外层容器 -->
    <el-container>
        <el-header class="nav nav-background app1 " id="app1" style="height:50px;position: absolute;width:100%;z-index:99">
            <el-row>
                <el-col :span="8">
                    <img class="logo" src="../../static/img/cgn-logo.png"/>
                </el-col>
                <el-col :span="8">
                    &nbsp;&nbsp;
                </el-col>
                <el-col :span="8">
                    <div style="float: right;">
                        <font class="top-name" id="nowUser">{{ nowUser }}</font>
                        <font>
                            <span style="color: #fff; cursor: default;">
                                切换用户
                            </span>
                        </font>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container style="height: 100%;">
            
        </el-container>
    </el-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>