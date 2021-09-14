<template>
  <section id="clipArea" class="clip"
           @dragover.prevent @drop.prevent @drop="dragFile">
    <div class="clip__header">
      <img src="../../assets/svg/paperclip.svg" alt="" class="clip__img">
      <span class="clip__text">Прикрепить документы</span>
    </div>
    <input type="file" class="clip__input" multiple @change="uploadFile">
    <div class="clip__list" v-if="file.length">
      <div class="clip__item" :key="item.id" v-for="(item, index) in file">
        <span class="clip__item-text">{{ item.name }}</span>
        <button class="clip__btn" type="button"
                @click="remove(index, $event.target)"
        >
          <img src="../../assets/svg/trash.svg" alt="" class="clip__remove">
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "clipDocs",
  components: {},
  data: function () {
    return {
      file: []
    }
  },
  methods: {
    /**
     * Загрузка файла через инпут
     * @param e
     */
    uploadFile(e) {
      this.file.push(e.target.files[0]);
      this.$store.commit('clip/setFiles', this.file);
    },
    /**
     * Загрузка dragDrop
     * @param e
     */
    dragFile(e) {
      this.file.push(e.dataTransfer.files[0]);
      this.$store.commit('clip/setFiles', this.file);
    },
    /**
     * Удалить item
     * @param index
     * @param target
     */
    remove(index, target) {
      this.file.splice(index, 1);
      this.$store.commit('clip/setFiles', this.file);
      console.log(this.file);
      console.log(target.parentNode);
    }
  },
  computed: {},
  watch: {
  },
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
&__list {
  margin-top: 24px;
}
  &__item {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid rgba(211, 35, 42, 0);

    &:hover {
      border-bottom: 1px solid #D3232A;
    }

    &-text {
      color: #737373;

      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 180%;
      /* or 25px */
    }
  }

  &__btn {
    background: transparent;
  }

  &__remove {
    width: 24px;
    height: 24px;
  }
}
</style>
