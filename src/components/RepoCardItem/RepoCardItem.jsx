import React, { useMemo } from 'react';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';

import './RepoCardItem.scss';

const MAX_DESCRIPTION_LENGTH = 100;

const RepoCardItem = ({ id, name, owner, html_url, updated_at, created_at, homepage, description, stargazers_count, forks_count, topics }) => {
    const formattedDescription = useMemo(() => description && description.length < MAX_DESCRIPTION_LENGTH ? description : description && description.substring(0, MAX_DESCRIPTION_LENGTH) + '...', [description]);
    return (
        <div className='repo-card-item'>
            <a href={ html_url }
               target="_blank"
               rel="noopener noreferrer">
                <div className="header">
                    <span className="updated">Updated { moment(updated_at).fromNow() }</span>
                </div>
                <div className="content">
                    <div className="name">
                        <span className="repo-name">{ name }</span>
                        <span className="description" title={ description }>{ formattedDescription }</span>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <i className="fa fa-code-fork"/>
                        <span>{ forks_count }</span>
                    </div>
                    <div>
                        <i className="fa fa fa-star"/>
                        <span>{ stargazers_count }</span>
                    </div>
                    <div className="owner">
                        <span className="name">By { owner && owner.login }</span>
                        <img src={ owner && owner.avatar_url } alt="owner img"/>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default RepoCardItem;
