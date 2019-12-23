export const namespaced = true;

export const state = {
  notifications: []
};

let nextId = 1;
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },
  DELETE(state, notificationTORemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationTORemove.id
    );
  }
};

export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  remove({ commit }, notificationTORemove) {
    commit("DELETE", notificationTORemove);
  }
};
