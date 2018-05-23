/*dispatch 函数，专门负责数据的修改*/

function stateChanger(state,action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return{
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title:{
          ...state.title,
          color:action.color
        }
      }
      case 'UPDATE_CONTENT_TEXT':
      return{
        ...state,
        content:{
          ...state.content,
          text:action.text
        }
      }
    case 'UPDATE_CONTENT_COLOR':
      return {
        ...state,
        content:{
          ...state.content,
          color:action.color
        }
      }
    default:
      return state;
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
    state = stateChanger(state,action)
    listeners.forEach((listener)=>listener());
  };
  return {getState,dispatch,subscribe}
}

function renderApp(newAppState,oldAppState = {}) {
  if(newAppState === oldAppState) return; //数据没有变化就不渲染
  console.log('render app...');
  renderTitle(newAppState.title,oldAppState.title);
  renderContent(newAppState.content,oldAppState.content);
}

function renderTitle(newTitle,oldTitle = {}) {
  if(newTitle === oldTitle) return; //数据没有变化就不渲染
  console.log('render title...');
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}

function renderContent(newContent,oldContent) {
  if(newContent === oldContent) return; //数据没有变化就不渲染
  console.log('render content...');
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = newContent.text;
  contentDOM.style.color = newContent.color;
}

const store = createStore(appState,stateChanger);
let oldState = store.getState();  //缓存旧的 state
store.subscribe(()=> {
  const newState = store.getState();  //数据可能变化，获取新的 state
  renderApp(newState,oldState); //把新旧两个state 传进去比较和渲染
  oldState = newState;  //渲染完成以后，新的 newState 变成旧的 oldState
});

renderApp(store.getState());//页面首次渲染

let changeArr = [
  {
    type: 'UPDATE_TITLE_TEXT',
    text: '《React.js 小书》',
  },
  {
    type: 'UPDATE_TITLE_COLOR',
    color: 'black'
  },
  {
    type: 'UPDATE_CONTENT_TEXT',
    text: 'React.js 小书的内容还是不错的',
  },
  {
    type: 'UPDATE_CONTENT_COLOR',
    color: 'green'
  }
];


//修改标题文本
//store.dispatch();
let index = 0,changeArrLen = changeArr.length;
for(let style of changeArr.entries()){
  setTimeout(() => {
    store.dispatch(style[1]);    
  }, style[0]*1000);
}



