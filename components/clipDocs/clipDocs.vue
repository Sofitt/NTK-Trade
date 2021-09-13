<template>
<section id="clipArea" class="clip">
  <div class="clip__header">
    <img src="../../assets/svg/paperclip.svg" alt="" class="clip__img">
    <span class="clip__text">Прикрепить документы</span>
  </div>

</section>
</template>

<script>
export default {
  name: "clipDocs",
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {

let clipArea = document.getElementById('clipArea');

  },
}
</script>

<style lang="scss" scoped>
.clip {
  display: flex;
  flex-flow: column;
  margin-bottom: 32px;

  &__header {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    max-width: 243px;
  }
  &__img {
    width: 32px;
    height: 32px;
  }
  &__text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
