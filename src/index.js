const APP_STATE = {
    title:{
        text:'React.js小书',
        color:'red'
    },
    content:{
        text:'React.js小书内容',
        color:'blue'    
    }
}

//该函数专门用来执行数据的修改(dispatch action 派发动作的意思)
function stateChanger(state,action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
        state.title.text = action.text;
        break;
        case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color;
        break;
        default:
        break;
    }
}

function createStore(state,stateChanger){
    const listeners = [];
    const getState = () => state;
    const subscribe = (listener) => listeners.push(listener);
    const dispatch = (action) => {
        stateChanger(state,action);
        listeners.forEach(listener => {
            listener();
        });
    };
    return {
        dispatch,getState,subscribe
    }
}


function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title){
    let titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text;
    titleDom.style.color = title.color;
}

function renderContent(content){
    let contentDom = document.getElementById('content');
    contentDom.innerHTML = content.text;
    contentDom.style.color = content.color;
}

const store = createStore(APP_STATE,stateChanger);
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());


store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色

