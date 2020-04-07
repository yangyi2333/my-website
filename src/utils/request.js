import axios from 'axios'
import React from 'react';

const service = axios.create({
    baseURL: 'localhost:9030',
    timeout: 20000,
    headers: {
        common: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    }
})

// axios.defaults.timeout = 2000;
// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.common['Authorization'] = 'Basic dHRhOnR0YXNlY3JldA==';
// http request 拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    })

// http response 拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && (error.response.status == '401' || error.response.status == '601')) {
            return Promise.reject(error) // 返回接口返回的错误信息
        }
    })
/**
 * 封装request方法
 * @param url
 * @param params
 * @param method
 * @param baseUrl
 * @param config
 * @returns {Promise}
 */
export function request (method = 'get', url, params = {}, baseUrl = '', config ={}){
    const data_type = method === 'get' ? 'params' : 'data';
    return new Promise((resolve, reject) => {
        service({
            url: (baseUrl||'eduadmin/') + url,
            method: method,
            [data_type]:params,
            ...config
        }).then((res) => {
            if(res && res.status === 200){
                if (res.data.code === 0) {
                    resolve(res.data)
                }else{
                    console.log(res.data.msg)
                }
            }

        }).catch((error) => {
            reject(error)
            console.log(error)
        })
    })
}
/**
 * 封装并发请求方法
 * @requsetArray url
 * @callback params
 */
export function multiple (requsetArray, callback) {
    //两个请求执行完成后，才执行axios.spread()中的函数，且axios.spread()回调函数的的返回值中的请求结果的顺序和请求的顺序一致
    axios.all(requsetArray).then(axios.spread(callback));
}
/**
 * 封装文件导出方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function exportWay (method = 'get', url, params = {}, baseUrl = '', config ={}){
    const data_type = method === 'get' ? 'params' : 'data';
    return new Promise((resolve, reject) => {
        service({
            url: (baseUrl||'eduadmin/') + url,
            method: method,
            [data_type]:params,
            ...config
        }).then(res=>{
            const blob = new Blob([res.data], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
            const fileName = res['headers']['content-disposition'].split('filename=')[1];
            if ('download' in document.createElement('a')) { // 非IE下载
                const elink = document.createElement('a')
                elink.download = fileName
                elink.style.display = 'none'
                elink.href = URL.createObjectURL(blob)
                document.body.appendChild(elink)
                elink.click()
                URL.revokeObjectURL(elink.href) // 释放URL 对象
                document.body.removeChild(elink)
            } else { // IE10+下载
                navigator.msSaveBlob(blob,fileName)
            }
        }).catch((error) => {
            reject(error)
            console.log(error)
        })
    })
}
/**
 * 封装用户操作请求，包括登录、验证码、修改密码等不需要token的操作
 * @param url
 * @param data
 * @returns {Promise}
 */
export function requestAuth (method, url, params = {}){
    return new Promise((resolve, reject) => {
        params.clientId = 'adminweb:123';
        axios({
            url: url,
            method: method,
            params: params,
            responseType: 'application/json'
            // headers: {
            //     Authorization: 'Basic dHRhOnR0YXNlY3JldA==',
            // }
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                resolve(res.data)
            } else {
                alert(res.data.msg)
            }
        }).catch((err) => {
            reject(err)
        })
    })
}
