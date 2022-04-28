import React from "react";

const formatDate = (date) => {
  const upDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(upDate);
  return formattedDate;
};

export const Repos = ({ repos }) => (
  <React.Fragment>
    {repos.map((repo) => (
      <div className="card mb-3" key={repo.id}>
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <h4>{repo.name}</h4>
              <div className="badge bg-primary">Watchers: {repo.watchers}</div>

              {repo.description ? (
                <p className="mt-2 mb-0">{repo.description}</p>
              ) : (
                <p className="mt-2 mb-0">
                  <i>No description</i>
                </p>
              )}
            </div>
            <div className="col-3 text-end d-flex flex-column justify-content-between align-items-end">
              <p className="align-text-bottom m-0">
                Last update: {formatDate(repo.updated_at)}
              </p>
              <a
                href={repo.html_url}
                className="btn btn-dark mt-3"
                target="_blank"
                rel="noreferrer"
              >
                Open repository
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </React.Fragment>
);
