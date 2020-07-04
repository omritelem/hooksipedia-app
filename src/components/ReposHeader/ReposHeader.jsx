import React, { useCallback, useRef } from 'react';
import Loader from '../Loader/Loader';

import './ReposHeader.scss';

const LOADER_SIZE = 40;

const ReposHeader = ({ search, setSearch, searchValue, isSearching, setIsSearching }) => {
    const textNotEmpty = searchValue !== '';
    const inputRef = useRef(null);

    const setSearchText = useCallback((e) => {
        setSearch(e.target.value || '');
        setIsSearching(true);
    }, [setSearch, setIsSearching]);

    const setEmptyText = useCallback((e) => {
        setSearchText(e);
        inputRef.current.focus();
    }, [setSearchText]);

    return (
        <header className='headers-list'>
            <h1>Captain Hooks</h1>
            <input
                className="search"
                type="text"
                value={search}
                placeholder="Search For Hooks"
                onChange={setSearchText}
                ref={inputRef}
            />
            {
                isSearching && <Loader keyProp={0}
                                       className="search-loader"
                                       type="ThreeDots"
                                       color="#00BFFF"
                                       height={LOADER_SIZE}
                                       width={LOADER_SIZE}/>
            }
            {(!isSearching && textNotEmpty && <i className="fa fa-times" onClick={setEmptyText}/>)}
        </header>
    );
};

export default ReposHeader;
