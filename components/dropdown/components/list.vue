<template>
  <div :id="type+'List'" class="list">
    <div class="list__item" :key="item.id" v-for="(item, index) of items" @click="setTitle(index, item.name)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: ['isShowList', 'type', 'items'],
  components: {},
  data: function () {
    return {
      setTitle(index, name) {
        let currentList = document.getElementById(this.type+'List').childNodes;
        let currentListNode = document.getElementById(this.type+'List');
          if (this.type === 'town') {
            this.$store.commit('townsList/setTown', name)
            this.$store.commit('townsList/setLocation', index);
            for (let i = 0; i < currentList.length; i++) {
              currentList[i].style.fontWeight = 400;
            }
            currentList[index].style.fontWeight = 700;

            this.$emit('changeShowState');
          } else if (this.type === 'vacancy') {
            this.$store.commit('vacanciesList/setVacancy', name);
            currentListNode.previousElementSibling.style.borderBottomColor = '#D3232A';
            currentListNode.previousElementSibling.childNodes[0].style.color = '#D3232A';
            this.$emit('changeShowState');
          }
      }
    }
  },
  methods: {},
  computed: {
    townsList() {
      return this.$store.getters["townsList/getTowns"]
    },
    vacanciesList() {
      return this.$store.getters["vacanciesList/getVacancies"]
    }

  },
  watch: {},
  mounted() {

  },
}
</script>

<style lang="scss">
.list {
  position: absolute;
  //margin-top: 20px;
  padding: 24px 32px;
  background: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);

  &__item {
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;

    &:hover {
      cursor: pointer;
      color: #D3232A;
    }
  }
}
</style>
