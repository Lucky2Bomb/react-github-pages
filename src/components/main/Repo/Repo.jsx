import React, { useState } from 'react'
import './Repo.scss'
import { NavLink } from 'react-router-dom';

const Repo = (props) => {
    const repo = props.repo;
    const [more, setMore] = useState(false);
    let dateCreated = new Date(repo.created_at);
    let dateUpdated = new Date(repo.updated_at);
    return (
        <div className="repo">
            <div className="repo__header">
                <div className="repo__name"><NavLink to={`/repository/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className="repo__stars"> <span className="repo__star-icon">★</span> {repo.stargazers_count}</div>
            </div>

            <div className="repo__body">
                <div className="repo__item">{repo.description}</div>

                {more && <>
                    <div className="repo__item">date created: {dateCreated.toDateString()}</div>
                    <div className="repo__item">date last updated: {dateUpdated.toDateString()}</div>
                    <div className="repo__item">repository link: <a href={repo.html_url}>{repo.html_url}</a></div>
                </>}
                <div className="repo__more-info" onClick={() => setMore(!more)}>{more ? `▲ more info ▲` : `▼ more info ▼`}</div>
            </div>
        </div>
    )
}

export default Repo
