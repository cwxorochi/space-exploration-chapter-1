export const state = () => ({
  sunAttr: null,
});

export const mutations = {
  setSun(state, payload) {
    state.sunAttr = payload
  },
};

export const actions = {
  async getSunAttributes(state) {
    // make request
    try {
        const res = await this.$axios('/sun-attributes')
        if (res.data) {
          state.commit('setSun', res.data.data)
        }
        return res
    } catch (err) {
        return false
    }
  },
};
