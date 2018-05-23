/*dispatch 函数，专门负责数据的修改*/

function userReducer(state, action) {
  if (!state) {
    return {};
  }
  switch (action.type) {
    case 'ADD_USER':
      return action.user;
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.user
      };
    case 'DELETE_USER':
      return [];
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = [];
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = userReducer(state, action)
    listeners.forEach((listener) => listener());
  };
  dispatch({}); //初始化state
  return { getState, dispatch, subscribe }
}

function renderUser(newUser, oldUser = []) {
  if (newUser === oldUser) return; //数据没有变化就不渲染
  console.log('render user...');
  renderName(newUser.name, oldUser.name);
  renderAge(newUser.age, oldUser.age);
  renderGender(newUser.gender, oldUser.gender);
}

function renderName(newName, oldName) {
  if (newName === oldName) return; //数据没有变化就不渲染
  console.log('render title...');
  const titleDOM = document.getElementById("name");
  titleDOM.innerHTML = newName;
}

function renderAge(newAge, oldAge) {
  if (newAge === oldAge) return; //数据没有变化就不渲染
  console.log('render age...');
  const contentDOM = document.getElementById("age");
  contentDOM.innerHTML = newAge;
}

function renderGender(newGender, oldGender) {
  if (newGender === oldGender) return; //数据没有变化就不渲染
  console.log('render gender...');
  const contentDOM = document.getElementById("gender");
  contentDOM.innerHTML = newGender;
}

const store = createStore(userReducer);
let oldUser = store.getState();  //缓存旧的 state
store.subscribe(() => {
  const newUser = store.getState();  //数据可能变化，获取新的 state
  renderUser(newUser, oldUser); //把新旧两个state 传进去比较和渲染
  oldUser = newUser;  //渲染完成以后，新的 newState 变成旧的 oldState
});

renderUser(store.getState());//页面首次渲染

store.dispatch({
  type:'ADD_USER',
  user:{
    name:'Jack',
    age:20,
    gender:'male'
  }
});

setTimeout(() => {
  store.dispatch({
    type:'UPDATE_USER',
    user:{
      name:'Tom',
      age:21,
      gender:'female'
    }
  });
  setTimeout(() => {
    store.dispatch({
      type:'DELETE_USER',
    });
  }, 1000);
}, 1000);




