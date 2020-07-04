import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useDebounce } from 'use-debounce';

import ReposList from '../../components/ReposList/ReposList';
import ReposHeader from '../../components/ReposHeader/ReposHeader';
import { fetchRepos, searchRepos } from "../../redux/actions/repos";
import { PER_PAGE, DEFAULT_MAX_PAGES, DELAY_TIME } from '../../utils/constants';

import './Home.scss';

const Home = () => {
    const [search, setSearch] = useState('');
    const [searchValue] = useDebounce(search, DELAY_TIME);
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [showNoResult, setShowNoResult] = useState(false);
    const [fetchingItems, setFetchingItems] = useState(false);
    const { repos, maxPages } = useSelector(state => ({
        repos: state.repos.data,
        loading: state.repos.isLoading,
        maxPages: state.repos.maxPages,
    }), shallowEqual) || [];
    const dispatch = useDispatch();

    const hasMoreRepos = useMemo(() => {
        const noResult = page > maxPages;
        setTimeout(() => {
            setShowNoResult(noResult);
        });
        return !noResult;
    }, [page, maxPages]);

    const loadMoreRepos = useCallback(() => {
        const getRepos = async (page, perPage, text) => {
            await dispatch(fetchRepos(page, perPage, text));
            setFetchingItems(false);
        };

        if (!fetchingItems && page <= maxPages) {
            setFetchingItems(true);
            setPage(page => page + 1);
            getRepos(page, PER_PAGE, searchValue);
        }
    }, [fetchingItems, dispatch, page, searchValue, maxPages]);

    useEffect(() => {
        const setRepos = async (page, perPage, text) => {
            await dispatch(searchRepos(page, perPage, text));
        };
        setPage(DEFAULT_MAX_PAGES);
        setRepos(1, PER_PAGE, searchValue);
        setIsSearching(false);
    }, [searchValue, dispatch]);

    return (
        <div className='Home'>
            <ReposHeader
                search={search}
                setSearch={setSearch}
                searchValue={searchValue}
                isSearching={isSearching}
                setIsSearching={setIsSearching}
            />
            <ReposList
                repos={repos}
                hasMoreRepos={hasMoreRepos}
                loadMoreRepos={loadMoreRepos}
                showNoResult={showNoResult} />
        </div>
    );
};

export default Home;
