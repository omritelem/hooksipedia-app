import React, { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import classNames from 'classnames';

import RepoItem from '../RepoItem/RepoItem';
import Loader from '../../components/Loader/Loader';

import './ReposList.scss';

import { THRESHOLD } from '../../utils/constants';

const ReposList = ({ hasMoreRepos, loadMoreRepos, repos, showNoResult }) => {

    const noResult = useMemo(() => repos && !repos.length, [repos]);
    const loader = <Loader
        key={ 0 }
        className="loader"
        type="ThreeDots"
        color="#00BFFF"
        height={ 100 }
        width={ 100 }/>;

    return (
        <div className='repos-list'>
            <InfiniteScroll
                className="scroll-list"
                pageStart={ 0 }
                loadMore={ loadMoreRepos }
                hasMore={ hasMoreRepos }
                loader={ loader }
                threshold={ THRESHOLD }>
                { repos.map((item, index) => <RepoItem key={ index } { ...item } />) }
            </InfiniteScroll>
            <div className={ classNames("no-results", { show: !hasMoreRepos && noResult }) }>
                <h1>-------- No Results --------</h1>
            </div>
            <div className={ classNames("end-of-results", { show: showNoResult && !noResult }) }>
                <h1>-------- End Of Results --------</h1>
            </div>
        </div>
    );
};

export default ReposList;
