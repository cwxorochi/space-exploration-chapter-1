<template>
  <div class="sp sp-circle"></div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.sp {
	width: 32px;
	height: 32px;
	clear: both;
	margin: 20px auto;
}


/* Spinner Circle Rotation */
.sp-circle {
	border: 4px rgba(#000,0.25) solid;
	border-top: 4px rgba(#000,1) solid;
	border-radius: 50%;
	-webkit-animation: spCircRot .6s infinite linear;
	animation: spCircRot .6s infinite linear;
}
@-webkit-keyframes spCircRot {
	from { -webkit-transform: rotate(0deg); }
	to { -webkit-transform: rotate(359deg); }
}
@keyframes spCircRot {
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
}


</style>