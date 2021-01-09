import React, { useEffect, useState } from 'react'
import "./Main.scss"
import { useDispatch, useSelector } from 'react-redux';
import Repo from './Repo/Repo';
import { getRepos } from '../../actions/repos';
import CubeSpinner from '../utils/cubeSpinner/CubeSpinner';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from './../utils/createPages';

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const perPage = useSelector(state => state.repos.perPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const [searchValue, setSearchValue] = useState("");


    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];

    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepos(currentPage, perPage, searchValue));
    }, [currentPage]);

    function buttonSearchHundler() {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(currentPage, perPage, searchValue));
    }

    return (
        <div className="main">
            <div className="main__search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="enter name of repository..." className="main__search-input" />
                <button onClick={() => buttonSearchHundler()} className="main__search-button">search</button>
            </div>
            {
                !isFetching ? repos.map(repo => <Repo key={repo.id} repo={repo} />) :
                    <CubeSpinner />
            }

            {!isFetching && <div className="pages">
                {pages.map((page, index) =>
                    <div
                        key={index}
                        className={currentPage == page ? "current-page" : "page"}
                        onClick={() => dispatch(setCurrentPage(page))}
                    >{page}</div>)}
            </div>}
        </div>
    )
}

export default Main
