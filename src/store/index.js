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