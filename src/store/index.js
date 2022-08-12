import { createStore } from "vuex";

export default createStore({
  state: {
    // 定义所需要的状态
    list: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "打代码",
        complete: true,
      },
    ],
  },
  // 同步修改state，都是方法
  // 第一个参数是state，第二个参数是需要修改的值
  mutations: {
    // 添加参数
    addTodo(state, payload) {
      state.list.push(payload);
    },
    // 删除任务 splice(下标，个数)
    deleteTodo(state, payload) {
      state.list.splice(payload, 1);
    },
    // 清除已完成
    clear(state, payload) {
      // 把过滤之后的数组传进来
      state.list = payload;
    },
  },
  actions: {},
  modules: {},
});
