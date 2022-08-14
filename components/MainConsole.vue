<template>
  <div
    class="main-console-component h-screen flex flex-col justify-center"
    :style="{ 'background-position': bgPos }"
  >
    <div class="container mx-auto px-2">
      <div class="header-title-wrapper mb-10 overflow-hidden transition">
        <h1
          class="main-title text-5xl sm:text-7xl font-theme text-center main-console-title"
        >
          Naluri Space Exploration
        </h1>
      </div>

      <div class="py-6 px-6 sm:py-12 sm:px-12 border border-white max-w-7xl mx-auto main-console" style="opacity: 0;">
        <div class="text-center " v-show="frame === 1">
          <h1 class="frame-1-ele text-3xl sm:text-4xl text-white font-theme">Chapter 1</h1>
          <h1 class="frame-1-ele text-5xl sm:text-8xl text-yellow-600 font-theme">The Sun</h1>
          <div class="frame-1-ele">
            <BaseButton class="text-lg sm:text-xl mt-16" @click="beginStep2" :disabled="isLoading || onlyFireOnce">Inspect The Sun</BaseButton>
          </div>
        </div>
        <div v-show="frame === 2">
          <h1 class="frame-2-ele text-4xl sm:text-5xl font-theme text-center text-white mb-10">Attributes of <span class="text-yellow-600">The&nbsp;Sun</span></h1>
          <h4 class="frame-2-ele text-xl sm:text-2xl text-white mb-4 flex gap-1 flex-col items-start flex-wrap">
            <div class="px-3 py-1 bg-indigo-400 mr-3 rounded-md font-theme text-xl flex gap-1 items-center">
              <span class="mr-2">Pi = </span> <img src="@/assets/images/pi-formula.svg" alt="" class="w-72">
            </div>

            <div v-if="isLoading">
              Calculating... <CircleLoader/>
            </div>
            <span v-else-if="!isLoading && sun" class="break-all text-sm">
              {{ sun.pi }}
            </span>
          </h4>

          <h4 class="frame-2-ele text-xl sm:text-2xl text-white mb-4 flex gap-1 flex-col items-start flex-wrap">
            <div class="px-3 py-1 bg-indigo-400 mr-3 rounded-md font-theme text-xl flex gap-1 items-center">
              <span class="mr-2">Radius (km) = r</span>
            </div>

            <div v-if="isLoading">
              Calculating... <CircleLoader/>
            </div>
            <span v-else-if="!isLoading && sun" class="break-all text-sm">
              {{ sun.radius }}
            </span>
          </h4>

          <h4 class="frame-2-ele text-xl sm:text-2xl text-white flex gap-1 flex-col items-start flex-wrap">
            <span class="px-3 py-1 bg-indigo-400 mr-3 rounded-md font-theme text-xl">
              Circumference (km) = 2πr
            </span>
            <div v-if="isLoading">
              Calculating... <CircleLoader/>
            </div>
            <span v-else-if="!isLoading && sun" class="break-all text-sm">
              {{ sun.circumference }}
            </span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from "@/components/base/BaseButton.vue";
// import { del } from 'vue';


export default {
  name: "MainConsole",
  // components: { BaseButton },
  data() {
    return {
      onlyFireOnce: false,
      isLoading: false,
      frame: 1,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    document.onmousemove = this.handleMouseMove;

    this.$gsap.timeline()
      .from('.main-title', { duration: 1, y: 100 })
      .to('.main-console', { opacity: 1, duration: 1} )
      .from('.main-console', { duration: 1, y: 20, width: '80%' }, '<')
      .from('.frame-1-ele', { duration: 1.5, y: 50, opacity: 0, stagger: 0.2, ease: 'back'})

    // setTimeout(() => {
      
    //   const myAudio = new Audio(require('@/assets/tracks/xanadu.mp3').default); 
    //   myAudio.loop = true
    //   myAudio.play()

    //   song.isOnBeat()
    // }, 4000)
  },
  computed: {
    bgPos() {
      return `${this.mouseX}% ${this.mouseY}%`;
    },
    sun() {
      return this.$store.state.sunAttr
    }
  },
  methods: {
    handleMouseMove(event) {
      let eventDoc, doc, body;
      event = event || window.event; // IE-ism
      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX =
          event.clientX +
          ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY =
          event.clientY +
          ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
          ((doc && doc.clientTop) || (body && body.clientTop) || 0);
      }
      this.mouseX = event.pageX * 0.02;
      this.mouseY = event.pageY * 0.02;
    },
    async beginStep2() {
      this.onlyFireOnce = true
      this.isLoading = true

      const gsap = this.$gsap

      gsap.timeline()
        .to('.frame-1-ele', { duration: 1, opacity: 0 })
        .call(() => { this.frame = 2 })
        .from('.frame-2-ele', { duration: 1.5, y: 50, opacity: 0, stagger: 0.2, ease: 'back' })

      const res = await this.$store.dispatch('getSunAttributes')

      this.isLoading = false
    },

  },
};
</script>

<style lang="scss" scoped></style>
