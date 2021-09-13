<template>
  <section class="contacts">
    <div class="contacts__map">
      <iframe :src="mapLink" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contacts__info">
      <h2 class="contacts__title">Контакты:</h2>
      <div class="contacts__inner">
        <span class="contacts__number mb">+7 495 929-70-78</span>
        <a href="" class="contacts__email mb">welcome@ret-team.su</a>
        <p class="contacts__subtitle mb">Мы работаем в будни с 9:00 до 18:00.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contacts",
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  computed: {
    mapLink() {
      return this.$store.getters["townsList/getCurrentLocation"];
    }
  },
  watch: {
    mapLink(value) {
      console.log(value);
    }
  },
  mounted() {

  },
}
</script>

<style lang="scss">
.contacts {
  display: flex;
  flex-flow: column;

  &__map {
    width: 578px;
    height: 440px;
    max-height: 440px;
  }

  &__info {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 48px 45px;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);
  }

  &__title {
    margin-bottom: 24px;

    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;
  }

  &__inner {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &__number {
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0px;
    text-align: left;
  }

  &__email {
    color: #D3232A;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
  }

  &__subtitle {
    color: #737373;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 180%;
  }
}

.mb {
  margin-bottom: 16px;

  &:first-child {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 1280px) {
  .contacts {
    &__map {
      width: 500px;
      height: 400px;
    }
  }
}
@media (max-width: 1175px) {
  .contacts {
    &__map {
      width: 300px;
      height: 200px;
    }
    &__info {
      padding: 24px;
      width: 300px;
    }
    &__title {
      margin-bottom: 10px;
    }
    &__number {
      font-size: 26px;
    }
  }
}
@media (max-width: 810px) {
.contacts {
  width: 100%;
  align-self: center;

  &__map {
    width: 100%;
    height: 300px;
  }
  &__info {
    padding: 24px;
    width: 100%;
  }
}
}
</style>
