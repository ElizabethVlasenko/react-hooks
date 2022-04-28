import React, { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/GithubContext";

export const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const { name: urlName } = useParams();
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
  } = user;
  console.log(repos);

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Main page
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
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
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Open profile
              </a>
              <ul>
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
              <div className="badge bg-info  me-2">Repos: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}></Repos>
    </Fragment>
  );
};
