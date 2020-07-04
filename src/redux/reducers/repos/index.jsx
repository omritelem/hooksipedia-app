import { SET_REPOS, SEARCH_REPOS } from '../../actions/action-types';
import { successActionType, pendingActionType, failureActionType } from '../utils/index';
import { DEFAULT_MAX_PAGES } from '../../../utils/constants';

const initialState = {
    data: [],
    isLoading: false,
    success: true,
    maxPages: DEFAULT_MAX_PAGES,
};

const repositories = (state = initialState, action) => {
    switch (action.type) {
        case successActionType(SET_REPOS): {
            return {
                data: [...state.data, ...action.payload.docs],
                maxPages: action.payload.pages,
                isLoading: false,
                success: true,
            };
        }
        case pendingActionType(SET_REPOS): {
            return {
                ...state,
                isLoading: true,
                success: false,
            };
        }
        case failureActionType(SET_REPOS): {
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        }
        case successActionType(SEARCH_REPOS): {
            return {
                data: action.payload.docs,
                maxPages: action.payload.pages,
                isLoading: false,
                success: true,
            };
        }
        case pendingActionType(SEARCH_REPOS): {
            return {
                ...state,
                isLoading: true,
                success: false,
            };
        }
        case failureActionType(SEARCH_REPOS): {
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        }
        default:
            return state;
    }
};

export default repositories;
