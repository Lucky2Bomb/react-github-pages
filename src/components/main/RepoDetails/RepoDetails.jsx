import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getCurrentRepository } from '../../../actions/repos';
import CubeSpinner from '../../utils/cubeSpinner/CubeSpinner';

const RepoDetails = (props) => {
    debugger;
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    console.log(`username ${username}, reponame ${reponame}, setRepo ${setRepo}, setIsFetching ${setIsFetching}`);

    useEffect(() => {
        getCurrentRepository(username, reponame, setRepo, setIsFetching);
    }, []);
    console.log(repo);

    return (
        isFetching ? <CubeSpinner /> :
            <div>
                <button onClick={() => props.history.goBack()} className="back-button">←back</button>
                <h1>{repo.name}</h1>
                <div>
                    <div>id: {repo.id}</div>
                    <div>isPrivate: {repo.id}</div>
                    <div>author: <NavLink to={repo.owner.html_url}>{repo.owner.login}</NavLink></div>   
                </div>
            </div>
    )
}

export default RepoDetails;