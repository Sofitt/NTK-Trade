export const state = () => ({
  vacancies: [
    {name: 'Программист'},
    {name: 'Верстальщик'},
    {name: 'Аналитик'},
    {name: 'SEO специалист'},
    {name: 'Контент менеджер'}
  ],
  showVacancies: false,
  currentVacancy: '',
})
export const mutations = {
  setVacancy(state, name) {
    state.currentVacancy = name;
  }
}
export const actions = {

}
export const getters = {
  getVacancies(state) {
    return state.vacancies;
  },
  getCurrentVacancy(state) {
    return state.currentVacancy;
  }
}
