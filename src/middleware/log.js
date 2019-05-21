const log = ({dispatch,getState}) => next => action =>{
    console.log('ACTION：' + action.type);

    next(action);
}

export default log;