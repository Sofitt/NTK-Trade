<template>
  <div class="drop">
    <button type="button" class="drop__btn" @click="showList($event.target)">
    <span id="title" class="drop__title">
      {{ currentTitle }}
    </span>
      <span id="caret" class="drop__icon arrow down"></span>
    </button>
    <list @changeShowState="isShowList = false" @updateValidity="updateValidity()" :isShowList="isShowList" :type="title.type" :items="items" v-show="isShowList === true"></list>
  </div>
</template>

<script>
import list from "~/components/dropdown/components/list";
export default {
  name: "dropdown",
  props: ['title', 'items'],
  components: {list},
  data: function () {
    return {
      isShowList: false,

      titleHTML: '',
      townList: '',
      vacancyList: '',
      caret: '',
    }
  },
  methods: {
    showList(target) {
      this.isShowList = !this.isShowList;
      console.log(target);
      if (target.className !== 'drop__btn') {
        this.caret = target.parentNode.childNodes[2];
      } else {
        this.caret = target.childNodes[2];
      }
    },
    updateValidity() {
      this.$emit('updateValidity');
    },
  },
  computed: {
    currentTitle() {
      if (this.title.type === 'vacancy') {
        return this.$store.getters["vacanciesList/getCurrentVacancy"];
      } else if (this.title.type === 'town') {
        return this.$store.getters["townsList/getCurrentTown"];
      }
    }
  },
  watch: {
    isShowList(value) {
      if (value === true) {
        this.caret.classList.remove('down');
        this.caret.classList.add('up');
      } else if (value === false) {
        this.caret.classList.add('down');
        this.caret.classList.remove('up');
      }
    }
  },
  mounted() {
  },
  created() {
    if (this.title.type === 'vacancy') {
      this.$store.commit('vacanciesList/setVacancy', this.title.name)
    } else if (this.title.type === 'town') {
      this.$store.commit('townsList/setTown', this.title.name)
    }
  }
}
</script>

<style lang="scss">
.drop {

  &__btn {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;
    background: transparent;

    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;
  }

  &__icon {
    margin-bottom: 10px;
    height: 10px;
    width: 10px;
  }
}

</style>
