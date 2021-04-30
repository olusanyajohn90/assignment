import Vue from "vue"
import Vuex from "vuex";

export const state = () => ({
    //State
    from: "USD",
    to: ""


});

export const actions = {
    changeTo({ commit }, currency) {
        commit("changeTo")
    },
    changeFrom({
        commit
    }, currency) {
        commit("changeFrom")
    }
};

export const mutations = {
    changeTo(
        state,
        currency) {
        state.to = currency
    },
    changeFrom(
        state,
        currency) {
        state.from = currency
    }
};
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
});

export default store;