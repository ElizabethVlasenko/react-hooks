import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/GithubContext";

export const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const { name: urlName } = useParams();
  const [reposNumber, setReposNumber] = useState(5);

  const showMore = () => {
    setReposNumber((prev) => prev + 5);
  };
  useEffect(() => {
    //ComponentDidMound()
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    type,
  } = user;
  console.log(user);
  //type: "Organization" type: "User"
  return (
    <Fragment>
      <Link to="/" className="btn btn-secondary mb-2">
        <i className="bi bi-caret-left-fill"></i> Main page
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 text-center border-end">
              <img src={avatar_url} alt={name} style={{ width: "150px" }} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}

              <ul className="list-unstyled mt-3">
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge bg-primary me-2">
                Followers: {followers}
              </div>
              <div className="badge bg-success  me-2">
                Following: {following}
              </div>
              <div className="badge bg-info  me-2">
                Repositories: {public_repos}
              </div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
          <div className="position-absolute top-0 end-0 me-1 btn disabled">
            {type}
          </div>
          <a
            href={html_url}
            className="btn btn-primary position-absolute bottom-0 end-0 m-3"
            target="_blank"
            rel="noreferrer"
          >
            Open profile
          </a>
        </div>
      </div>
      <Repos repos={repos.slice(0, reposNumber)}></Repos>
      {reposNumber < repos.length ? (
        <div
          className="btn btn-secondary mb-2 align-middle mx-auto d-block mb-3"
          style={{ width: "150px" }}
          onClick={showMore}
        >
          Show more
        </div>
      ) : null}
    </Fragment>
  );
};
