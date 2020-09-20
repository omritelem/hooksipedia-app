import axios from 'axios';

const BASE_URL = 'https://hooksipedia-api.herokuapp.com/repositories';

const ReposAxiosInstance = axios.create({
    baseURL: BASE_URL,
});

const getRepos = async (page, perPage, name) => {
    let url = `${BASE_URL}?page=${page}&perPage=${perPage}`;
    if (name) {
        url = `${url}&name=${name && name.toLowerCase()}`;
    }
    const { data } = await ReposAxiosInstance.get(url);
    return data;
};

export {
    getRepos,
};
