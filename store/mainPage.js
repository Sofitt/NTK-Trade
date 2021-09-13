export const state = () => ({
  currentTitle: '',
  form: [{town: 'Нижний Новгород', name: '', email: '', vacancy: '', about: '',}],
  showState: true,

})
export const mutations = {
  setShowState(state) {
    state.showState = !state.showState;
  }
}
export const actions = {}
export const getters = {
  getShowState(state) {
    return state.showState;
  }
}
