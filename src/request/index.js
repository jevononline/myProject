import { Toast } from 'antd-mobile';
import axios from 'axios';

// 拦截器
axios.interceptors.request.use((config) => {
    // 如果是get请求，后面加上时间戳，防止浏览器缓存
    if (config.method === 'get') {
        let tag = new Date().getTime();
        if (~config.url.indexOf('?')) {
            config.url += `&_timestrap=${tag}`;
        } else {
            config.url += `?${tag}`;
        }
    }
    config.headers['Cache-Control'] = 'no-cache';
    return config;
});
axios.interceptors.response.use((res) => {
    // Do something with response data
    // 接口返回101未登录时，跳转重新登录
    if (res.errorCode === '101') {
        window.location.href = '/login';
    }
    // 统一错误消息
    if (!res.data.success) {
        Toast.info(res.data.errorMsg);
    }
    return res.data;
}, (error) => {
    Toast.fail('Something went wrong. Please try again later.');
    return Promise.reject(error);
});

const req = {
    login: async() => {
        const res = await axios(`/api/login`);
        return res;
    },
    // 上传图片
    uploadImg: async(data) => {
        console.log(data);
        const res = await axios.post(`/api/agent/file/upload`, data);
        return res;
    },
    // 获取promotions的share
    getLink: async(data) => {
        const res = await axios.post(`/api/shop/product/campaignUrl`, data);
        return res;
    },
    // 退出登陆
    logOut: async() => {
        const res = await axios.post(`/api/agent/user/logout`);
        return res;
    },
};

export default req;
