import React, { useCallback, useRef, useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import Loader from '../Loader/Loader';
import SettingsPanel from "../SettingsPanel/SettingsPanel";

import './ReposHeader.scss';

const LOADER_SIZE = 40;

const ReposHeader = ({ search, setSearch, searchValue, isSearching, setIsSearching, setLayoutType }) => {
    const [showSettingsPanel, setShowSettingsPanel] = useState(false);
    const textNotEmpty = searchValue !== '';
    const inputRef = useRef(null);

    const setSearchText = useCallback((e) => {
        setSearch(e.target.value || '');
        setIsSearching(true);
    }, [setSearch, setIsSearching]);

    console.log('textNotEmpty', textNotEmpty);
    console.log('textNotEmpty', textNotEmpty);

    const setEmptyText = useCallback((e) => {
        setSearchText(e);
        inputRef.current.focus();
    }, [setSearchText]);

    const toggleSettingsPanel = useCallback(() => {
        setShowSettingsPanel(showPanel => !showPanel)
    }, [setShowSettingsPanel]);

    return (
        <header className='headers-list'>
            <div className="title">
                <SettingsIcon className="settings-icon" onClick={toggleSettingsPanel} />
                <h1>Captain Hooks</h1>
            </div>
            <div className="user-inputs">
                <SettingsPanel
                    className="settings-panel"
                    show={showSettingsPanel}
                    setLayoutType={setLayoutType}
                />
                {!showSettingsPanel && (
                    <input
                    className="search"
                    type="text"
                    value={search}
                    placeholder="Search For Hooks"
                    onChange={setSearchText}
                    ref={inputRef}
                />)}
                {
                    isSearching && <Loader keyProp={0}
                                           className="search-loader"
                                           type="ThreeDots"
                                           color="#00BFFF"
                                           height={LOADER_SIZE}
                                           width={LOADER_SIZE}/>
                }
                {(!showSettingsPanel && !isSearching && textNotEmpty && <i className="fa fa-times" onClick={setEmptyText}/>)}
            </div>
        </header>
    );
};

export default ReposHeader;
