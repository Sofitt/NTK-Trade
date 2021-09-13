<template>
<section id="clipArea" class="clip"
         @dragover="dragover" @dragleave="dragleave" @drop="drop">
  <div class="clip__header">
    <img src="../../assets/svg/paperclip.svg" alt="" class="clip__img">
    <span class="clip__text">Прикрепить документы</span>
  </div>
  <div class="clip__list" v-for="file in filelist">
    ${ file.name }
    <button class="clip__btn" type="button"
            @click="remove(filelist.indexOf(file))"
            title="Remove file">remove</button>
  </div>
</section>
</template>

<script>
export default {
  name: "clipDocs",
  delimiters: ['${', '}'],
  components: {},
  data: function () {
    return {
      filelist: [],
    }
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  },
  computed: {},
  watch: {},
  mounted() {

  }
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
