<template>
    <div>
        <h1>Hello Vuex</h1>
        <p>{{ $store.state.aModule.count }} -- {{ $store.state.bModule.countB }}</p>
        <p>
            <!-- 两个按钮分别调用mutations的add和reduce事件 -->
            <!-- 传入add事件一个对象，每次点击add按钮，count加10 -->
            <button @click="$store.commit('add', { number1: 10})">+</button>
            <!-- 缩写状态事件 -->
            <button @click="reduce">-</button>
        </p>
            <button @click="addPlus">addPlus</button>
            <button @click="reducePlus">reducePlus</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default { 
    methods: {
        ...mapMutations([
            'add',
            'reduce'
        ]),
        ...mapActions([
            'addPlus'
        ]),
        ...mapActions([
            'reducePlus'
        ])
    }/* ,
    computed: {
        ...mapState([
            "count"
        ])
    } */
}
</script>