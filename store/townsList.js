export const state = () => ({
  towns: [
    {name: 'Москва', location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4495.792145482325!2d37.3804711236514!3d55.70817822420052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54e4569d74089%3A0xc9f1dc4a887332af!2z0KTQsNGB0L7Qu9GM!5e0!3m2!1sru!2sru!4v1631537814340!5m2!1sru!2sru'},
    {name: 'Краснодар', location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.407106949421!2d39.00758328628275!3d45.0633122554158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f045426e978215%3A0x9230d5656f8d7014!2z0JLQtdCx0LrQsNC8INCh0YLRg9C00LjRjyDQmtGA0LDRgdC90L7QtNCw0YA!5e0!3m2!1sru!2sru!4v1631537957809!5m2!1sru!2sru'},
    {name: 'Казань', location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8971.26916005928!2d49.1321356107727!3d55.796410469952036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead1359b393b7%3A0xe3164d3cbdfeadc9!2z0J_Rj9GC0LXRgNC-0YfQutCw!5e0!3m2!1sru!2sru!4v1631537850437!5m2!1sru!2sru'},
    {name: 'Нижний новгород', location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2213.9039796422508!2d43.9447379!3d56.2969703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d58dfdad0d59%3A0x2d00110fcb9eb214!2z0JrQvtC80YHQvtC80L7Qu9GM0YHQutCw0Y8g0L_Quy4sIDIsINCd0LjQttC90LjQuSDQndC-0LLQs9C-0YDQvtC0LCDQndC40LbQtdCz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCA2MDMwMTE!5e0!3m2!1sru!2sru!4v1631526453103!5m2!1sru!2sru'},
  ],
  currentLocation: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2213.9039796422508!2d43.9447379!3d56.2969703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d58dfdad0d59%3A0x2d00110fcb9eb214!2z0JrQvtC80YHQvtC80L7Qu9GM0YHQutCw0Y8g0L_Quy4sIDIsINCd0LjQttC90LjQuSDQndC-0LLQs9C-0YDQvtC0LCDQndC40LbQtdCz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCA2MDMwMTE!5e0!3m2!1sru!2sru!4v1631526453103!5m2!1sru!2sru',
  currentTown: '',
})
export const mutations = {
  /**
   * Текущий город
   * @param state
   * @param name
   */
  setTown(state, name) {
    state.currentTown = name;
  },
  /**
   * Ссылка на карту
   * @param state
   * @param index
   */
  setLocation(state, index) {
    state.currentLocation = state.towns[index].location;
  }
}
export const getters = {
  getTowns(state) {
    return state.towns;
  },
  getCurrentTown(state) {
    return state.currentTown;
  },
  getCurrentLocation(state) {
    return state.currentLocation;
  }
}
