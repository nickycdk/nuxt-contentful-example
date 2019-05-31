import Vuex from 'vuex';

import navigation from './modules/navigation';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      navigation: { ...navigation, namespaced: true }
    },
    strict: false
  })
};

export default createStore
