import { SET_REPOS, SEARCH_REPOS } from '../action-types';
import { getRepos } from '../../api';

const fetchRepos = (page, perPage, name) => (dispatch) => dispatch({
    type: SET_REPOS,
    payload: getRepos(page, perPage, name),
});

const searchRepos = (page, perPage, name) => (dispatch) => dispatch({
    type: SEARCH_REPOS,
    payload: getRepos(page, perPage, name),
});

export {
    fetchRepos,
    searchRepos,
}
