export const state = () => ({
  files: [],
})
export const mutations = {
  setFiles(state, data) {
    state.files = data;
  }
}
export const getters = {
  getFiles(state) {
    return state.files;
  }
}
