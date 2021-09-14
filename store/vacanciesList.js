export const state = () => ({
  vacancies: [
    {name: 'Программист'},
    {name: 'Верстальщик'},
    {name: 'Аналитик'},
    {name: 'SEO специалист'},
    {name: 'Контент менеджер'}
  ],
  currentVacancy: '',
})
export const mutations = {
  /**
   * Установить значение для списка вакансий
   * @param state
   * @param name
   */
  setVacancy(state, name) {
    state.currentVacancy = name;
  }
}
export const getters = {
  getVacancies(state) {
    return state.vacancies;
  },
  getCurrentVacancy(state) {
    return state.currentVacancy;
  }
}
