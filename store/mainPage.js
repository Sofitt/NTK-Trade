export const state = () => ({
  dataToSend: '',
})
export const mutations = {
  /**
   * Формирует массив данных на основании введенной в поля информации
   * @param state
   * @param data
   */
  setDataToSend(state, data) {
    state.dataToSend = data;
    console.log(data);
  }
}
