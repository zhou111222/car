import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import { getData } from './action/action';

function* getGitData(action) { // 参数是action创建函数返回的action
    const fn = function() {
        return fetch(`https://api.github.com/users/github`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                return res
            })
    }
    const res = yield call(fn) // 执行p函数，返回值赋值给res

    yield put({ // dispatch一个action到reducer， payload是请求返回的数据
        type: 'GET_DATA_SUCCESS',
        payload: res
    })
}

function* mySaga() { // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery('GET_DATA', getGitData) // 如果有对应type的action触发，就执行goAge()函数
}

export default mySaga; // 导出rootSaga，被store.js文件import