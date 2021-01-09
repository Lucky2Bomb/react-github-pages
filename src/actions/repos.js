import axios from 'axios';
import { API_URL } from '../config';
import { setRepos, setIsFetching } from '../reducers/reposReducer';

export const getRepos = (currentPage, perPage, searchQuery = "stars:%3E1") => {
    if(searchQuery === "") {
        searchQuery = "stars:%3E1";
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`${API_URL}/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setRepos(response.data));
    }
}

export const getCurrentRepository = async (username, repoName, setRepo, setIsFetching) => {
    setIsFetching(true);
    const response = await axios.get(`${API_URL}/repos/${username}/${repoName}`);
    setRepo(response.data);
    setIsFetching(false);
}