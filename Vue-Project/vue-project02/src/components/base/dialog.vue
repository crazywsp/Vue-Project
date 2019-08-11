<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself">
        <transition name="drop">
          <div class="dialog-content" v-if="isShow">
            <p class="dialog-close" @click="closeMyself"></p>
            <slot>empty</slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>


