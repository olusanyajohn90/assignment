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
    currentValue: ""

});

export const actions = {
    changeCurrency({ commit }, [toOrFrom, currency]) {
        commit("changeCurrency", [toOrFrom, currency])
    },
    changeCurrentValue({ commit }, newValue) {
        commit("changeCurrentValue", newValue)

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

    changeCurrentValue(state, newValue) {
        state.currentValue = newValue
    }

};
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
});

export default store;