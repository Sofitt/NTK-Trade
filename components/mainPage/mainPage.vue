<template>
  <section class="main">

    <!-- HEADER -->
    <div class="main__header">
      <h2 class="main__title">Отправьте ваше резюме</h2>
      <div class="main__subtitle">
        <p class="main__text">Постройте своё будущее c РусЭлитТрейдинг в городе</p>
        <!-- DROPDOWN TOWN -->
        <dropdown :title="{name: townTitle, type: 'town'}" :items="towns" class="towns"></dropdown>
      </div>
    </div>

    <!-- INNER -->
    <div class="main__inner">
      <!-- == INPUTS == -->
      <form class="main__form">
        <!-- NAME -->
        <label class="main__form-label">
          <input type="text" class="main__input" placeholder="Как вас зовут?" @keydown="checkValidity()">
        </label>
        <!-- EMAIL -->
        <label class="main__form-label-wName">
          <span class="main__form-title">Ваш E–mail</span>
          <input type="email" class="main__input" placeholder="Введите E-mail" @keydown="checkValidity()">
        </label>
        <!-- DROPDOWN VACANCY -->
        <dropdown :title="{name: 'Выберите вакансию', type: 'vacancy'}" :items="vacancies" class="vacancies"></dropdown>
        <!-- ABOUT SELF -->
        <textarea class="main__input" name="" id="" cols="30" rows="5" placeholder="Напишите о себе кратко" @keydown="checkValidity()"></textarea>

        <!-- DRAG & DROP -->
        <clipDocs></clipDocs>

        <!-- POLITICS -->
        <div class="main__politics">
          <label class="main__politics-block" @click="checkValidity()">
            <input type="checkbox" class="main__checkbox" v-model="agreement">
            <p class="main__politics-text">
              Я соглашаюсь с
              <a href="" class="main__conf link">политикой конфиденциальности</a>
              , нажимая на кнопку “Откликнуться”
            </p>
          </label>
          <!-- SUBMIT BTN -->
          <button disabled id="submit" class="main__submit">Откликнуться</button>
        </div>
      </form>

      <!-- CONTACTS -->
      <contacts></contacts>
    </div>
  </section>
</template>

<script>
import {inputValidator} from "~/backend/helpers/inputValidator";

import dropdown from "~/components/dropdown/dropdown";
import clipDocs from "~/components/clipDocs/clipDocs";
import contacts from "~/components/mainPage/components/contacts";

export default {
  name: "mainPage",
  components: {contacts, clipDocs, dropdown},
  data: function () {
    return {
      inputs: '',
      submitBtn: '',
      agreement: false,
    }
  },
  methods: {
    checkValidity() {
      inputValidator.isValid(this.inputs, this.submitBtn)
    }
  },
  computed: {
    vacancies() {
      return this.$store.getters["vacanciesList/getVacancies"];
    },
    towns() {
      return this.$store.getters["townsList/getTowns"];
    },
    townTitle() {
      return this.towns[3].name;
    }
  },
  watch: {
    // agreement(value) {
    //   if (value === true) {
    //     this.submitBtn.disabled = false;
    //   } else {
    //     this.submitBtn.disabled = true;
    //   }
    // }
  },
  mounted() {
    this.inputs = document.querySelectorAll('.main__input');
    this.submitBtn = document.getElementById('submit');
  },
}
</script>

<style lang="scss">
@import "assets/scss/style";
.main {
  display: flex;
  flex-flow: column;
  padding: 80px 96px 75px;
  background: white;

  // Header
  &__header {
    display: flex;
    flex-flow: column;
    margin-bottom: 66px;
  }

  &__title {
    padding-bottom: 8px;

    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
    letter-spacing: 0px;
    text-align: left;
  }

  &__subtitle {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    max-height: 43px;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
  }

  // Inner
  &__inner {
    display: flex;
    flex-flow: row;
  }

  &__form {
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 614px;
    margin-right: 56px;

    &-label {
      cursor: default;
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: 91px;
      margin-bottom: 40px;

      border-bottom: 2px solid #F4F5F7;

      &-wName {
        cursor: default;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        height: 91px;
        margin-bottom: 40px;

        border-bottom: 2px solid #F4F5F7;
      }
    }

    &-title {
      margin-bottom: 4px;
      cursor: default;

      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  &__input {
    height: 43px;

    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;

    &::placeholder {
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 43px;
      letter-spacing: 0px;
      text-align: left;
    }
  }

  &__politics {
    display: flex;
    flex-flow: column;
    align-items: center;


    &-block {
      display: flex;
      flex-flow: row;
      align-items: center;
      margin-bottom: 24px;

      &:focus-within {
        padding-left: 2px;
        box-shadow: 0px 0px 0px 1px rgba(211, 35, 42, 1);
      }
    }

    &-text {
      padding-right: 131px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
    }
  }

  &__checkbox {
    margin-right: 16px;
  }

  &__submit {
    width: 100%;
    height: 64px;
    background: #D3232A;
    color: #FFFFFF;
    border-radius: 8px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;

    @include transitionAll();
    //transition: all 0.3s ease 0s;

    &:disabled {
      background: #737373;

      &:hover {
        background: #737373;
        cursor: default;
      }
    }

    &:hover {
      background: #ed1d25;
      @include transitionAll();
      //transition: all 0.3s ease 0s;
    }
  }
}

// Link
.link {
  color: rgba(211, 35, 42, 1);
}

textarea {
  height: 100% !important;
  max-height: 192px;
  width: 100%;
  max-width: 614px;
  margin-bottom: 24px;
}

// Custom checkboxes
input[type="checkbox"] {
  appearance: none;
  cursor: pointer;
}

label {
  cursor: pointer;
}

input[type="checkbox"]:before {
  border: 1px solid black;
  border-radius: 5px;
  content: "\00a0";
  display: inline-block;
  padding: 0;
  height: 24px;
  width: 24px;
}

input[type="checkbox"]:checked:before {
  border: 1px solid black;
  border-radius: 5px;
  background: black;
  background-image: url("../../assets/svg/checked.svg");
  background-repeat: no-repeat;
  background-position: center;
}

// Dropdown
.drop {
  &:focus-within {
    margin-left: -1px;
    box-shadow: -5px 0px 0px 0px rgba(211, 35, 42, 0.2);
  }
}
//========Города
.towns {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-left: 16px;
  background: transparent;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 180%;
  .drop__btn {
    display: flex;
    flex-flow: row;
    width: 100%;
    flex: 0;
  }
  .drop__title {
    color: #D3232A;
    border-bottom: 2px dashed rgb(211, 35, 42, 0.2);
  }
  .drop__icon {
    margin-left: 10px;
    border-color: #D3232A;

    &.up {
      position: relative;
      top: 8px;
    }
  }
  .list {
    margin-top: 40px;
  }
}
//========Вакансии
.vacancies {
  width: 100%;
  margin-bottom: 40px;
  .drop__btn {

    width: 100%;
    color: rgba(115, 115, 115, 1);
    border-bottom: 2px solid #F4F5F7;
 }
  .drop__icon {
    &.up {
      position: relative;
      top: 8px;
    }
  }
}

// Adaptive
@media (max-width: 1175px) {
  .main {
    padding: 40px 40px 50px;
    &__inner {
      justify-content: space-between;
    }
  }
}

@media (max-width: 810px) {
  .towns {
    margin-left: 0;
  }
.main {
  &__subtitle {
    flex-flow: column;
  }
  &__inner {
    flex-flow: column;
  }
  &__form {
    margin-right: 0;
    max-width: none;
    margin-bottom: 40px;
  }
}
  textarea {
max-width: 100%;
  }
}
@media (max-width: 615px) {
  .main__title {
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
  }
.main__politics-text {
  padding-right: 60px;
}
}
@media (max-width: 550px) {
  .main__politics-text {
    padding-right: 0;
  }
  .main {
    padding: 29px 24px 37px;
  }
}
@media (max-width: 385px) {
  .main__title {
    font-size: 24px;
  }
}

//@media (max-width: 1175px) {

//}
</style>
