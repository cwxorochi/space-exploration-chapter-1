<template>
  <div class="main-console-component h-screen flex flex-col justify-center" :style="{'background-position': bgPos}">
    <div class="header-title-wrapper" >
      <h1 class="text-7xl font-theme text-center main-console-title">
        Naluri Space Exploration
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainConsole',
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
      }
    },
    mounted () {
      document.onmousemove = this.handleMouseMove;
    },
    computed: {
      bgPos() {
        return `${this.mouseX}% ${this.mouseY}%`
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

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        this.mouseX = event.pageX * 0.02
        this.mouseY = event.pageY * 0.02
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>