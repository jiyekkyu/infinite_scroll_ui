<template>
	<div class="scroll">
		<div class="header">
			Infinite Scroll WEB
		</div>
		<div class="img-box" ref="img-box" @scroll="scrollEvent">
			<infinity-scroll
				v-for="item in items"
				:key="'item'"
				:item="item"></infinity-scroll>
		</div>
		<button	v-if="btnFlag"
				class="up-btn"
				value="up"
				@click="scrollUp"></button>
	</div>
</template>

<script>
export default {
	name: "Scroll",
	data() {
		return {
			items: 3,
			btnFlag: false,
		}
	},
	methods: {
		scrollUpBtnShow() {
			if ( this.$refs["img-box"].scrollTop !== 0 ) {
				this.btnFlag = true;
			} else {
				this.btnFlag = false;
			}
		},
		scrollEvent(e) {
			const { scrollTop, clientHeight, scrollHeight } = e.target;

			if ( scrollTop == ( scrollHeight - clientHeight ) ) {
				this.items = this.items + 1;
			}
			this.scrollUpBtnShow();
		},
		scrollUp(e) {
			this.$refs["img-box"].scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		},
	},
};
</script>
