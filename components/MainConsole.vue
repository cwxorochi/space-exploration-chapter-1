<template>
  <div
    class="main-console-component h-screen flex flex-col justify-center"
    :style="{ 'background-position': bgPos }"
  >
    <div class="container mx-auto">
      <div class="header-title-wrapper mb-10 overflow-hidden transition">
        <h1
          class="main-title text-5xl sm:text-7xl font-theme text-center main-console-title"
        >
          Naluri Space Exploration
        </h1>
      </div>

      <div class="py-12 px-12 border border-white max-w-7xl mx-auto main-console">
        <div class="text-center " v-show="frame === 1">
          <h1 class="frame-1-ele text-4xl text-white font-theme">Chapter 1</h1>
          <h1 class="frame-1-ele text-8xl text-yellow-600 font-theme">The Sun</h1>
          <div class="frame-1-ele">
            <BaseButton class="text-xl mt-16" @click="beginInspect">Inspect The Sun</BaseButton>
          </div>
        </div>
        <div v-show="frame === 2">
          <h1 class="frame-2-ele text-5xl font-theme text-center text-white mb-10">Attributes of <span class="text-yellow-600">The Sun</span></h1>
          <h4 class="frame-2-ele text-2xl text-white mb-4">
            <span class="px-3 py-1 bg-indigo-400 mr-3 rounded-md font-theme text-xl">PI</span>
            3.12312532342623
          </h4>
          <h4 class="frame-2-ele text-2xl text-white">
            <span class="px-3 py-1 bg-indigo-400 mr-3 rounded-md font-theme text-xl">Circumference</span>
            3.12312532342623
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import { del } from 'vue';


export default {
  name: "MainConsole",
  components: { BaseButton },
  data() {
    return {
      frame: 1,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    document.onmousemove = this.handleMouseMove;

    this.$gsap.timeline()
      .from('.main-title', { duration: 1, y: 100 })
      .from('.main-console', { duration: 1, y: 20, opacity: 0, width: '80%' })
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
    beginInspect() {
      this.beginStep2()
    },
    beginStep2() {
      const gsap = this.$gsap

      gsap.timeline()
        .to('.frame-1-ele', { duration: 1, opacity: 0 })
        .call(() => { this.frame = 2 })
        .from('.frame-2-ele', { duration: 1.5, y: 50, opacity: 0, stagger: 0.2, ease: 'back' })
    }
  },
};
</script>

<style lang="scss" scoped></style>
