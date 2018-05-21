/*dispatch 函数，专门负责数据的修改*/

function stateChanger(state,action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text;
      break;
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color;
      break;
    default:
      break;
  }
}

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function createStore(state,stateChanger){
  const listeners = [];
  const subscribe = (listener)=>listeners.push(listener);
  const getState = ()=>state;
  const dispatch = (action)=>{
    stateChanger(state,action)
    listeners.forEach((listener)=>listener());
  };
  return {getState,dispatch,subscribe}
}

function renderApp(appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}

function renderTitle(title) {
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}

function renderContent(content) {
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}


const store = createStore(appState,stateChanger);
store.subscribe(()=> renderApp(store.getState()));

renderApp(store.getState());//页面首次渲染
setTimeout(() => {
  store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: '《React.js 小书》',
    color: 'yellow'
  });

  setTimeout(() => {
    store.dispatch({
      type: 'UPDATE_TITLE_COLOR',
      text: 'lalala',
      color: 'black'
    });
  }, 1000);

}, 1000);


