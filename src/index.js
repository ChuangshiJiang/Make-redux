
function renderApp(newAppState,oldAppState = {}) {//防止没有 oldAppState
    if(newAppState === oldAppState) return;//数据没有变化就不做渲染
    console.log('render app...');
    renderTitle(newAppState.title,oldAppState.title);
    renderContent(newAppState.content,oldAppState.content);
}

function renderTitle(newTitle,oldTitle = {}) {
    if(newTitle === oldTitle) return ;//数据没有变化就不做渲染
    console.log('render title...');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = newTitle.color;
}

function renderContent(newContent,oldContent = {}) {
    if(newContent === oldContent) return ;//数据没有变化就不做渲染
    console.log('render content...');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red'
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function stateChanger(state,action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                //构建新的对象并返回
                ...state,
                title:{
                    ...state.title,
                    text:action.text
                }
            }
            break;
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title:{
                    ...state.title,
                    color:action.color
                }
            }
            break;
        default:
            return state;
            break;
    }
}

function createStore(state,stateChanger){
    const listeners = [];
    const subscribe = (listener)=>listeners.push(listener);
    const getState = ()=>state
    const dispatch = (action)=>{
        state = stateChanger(state,action)//覆盖原对象
        listeners.forEach((listener)=>listener())
    }
    return {getState,dispatch,subscribe}
}

const store = createStore(appState,stateChanger);
let oldState = store.getState();//缓存旧的 state
store.subscribe(()=>{
    const newState = store.getState();//数据可能变化，获取新的state
    renderApp(newState,oldState);//把新旧的 oldState传进去渲染
    oldState = newState;//渲染完成后新的 newState 变成旧的 oldState
});


renderApp(store.getState())//首次渲染页面

store.dispatch({
    type:'UPDATE_TITLE_TEXT',
    text:'《React.js 小书》'
});//修改标题文本

store.dispatch({
    type:'UPDATE_TITLE_COLOR',
    color:'#33b500'
})//修改标题颜色
