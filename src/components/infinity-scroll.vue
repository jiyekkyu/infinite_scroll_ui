<template>
	<section :idx="item"
			 :class="cssFlag ? 'img-right' : 'img-left'">
		<div class="img"></div>
	</section>
</template>

<script>
export default {
	name: "Scroll",
	data() {
		return {
			cssFlag: 0,
		}
	},
	props: {
		item: Number,
	},
	methods: {
		scrollImgCss() {
			if ( ( this.item % 2 ) === 0 ) {
				this.cssFlag = 1;
			}
		},
	},
	created() {
		this.scrollImgCss();
	},
};
</script>
