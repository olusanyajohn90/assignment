import Vue from "vue"
import Vuex from "vuex";

export const state = () => ({
    //State
    from: {
        symbol: "$",
        name: "US DOLLAR",
        abbr: "usd"

    },

    to: {
        symbol: "£",
        name: "British Pound",
        abbr: "gbp"

    },


});

export const actions = {
    changeCurrency({ commit }, [toOrFrom, currency]) {
        commit("changeCurrency", [toOrFrom, currency])
    },

};

export const mutations = {
    changeCurrency(

        state, [toOrFrom, currency]) {
        if (toOrFrom == "to") {
            state.to = currency
        } else {
            state.from = currency
        }

    },


};
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
});

export default store;