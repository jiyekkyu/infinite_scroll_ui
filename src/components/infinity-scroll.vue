<template>
	<section :idx="item"
			 :class="scrollImgCss">
		<div class="img"></div>
	</section>
</template>

<script>
export default {
	name: "Scroll",
	props: {
		item: Number,
	},
	computed: {
		scrollImgCss() {
			return this.item % 2 === 0 ? 'img-right' : 'img-left';
		},
	},
};
</script>
