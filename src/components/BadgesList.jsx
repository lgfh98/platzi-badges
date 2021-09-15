import React, { useState } from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function Filter(props) {
  return (
    <div className="form-group">
      <label htmlFor="">Filter Badges</label>
      <input
        type="text"
        className="form-control"
        value={props.query}
        onChange={(e) => {
          props.setQuery(e.target.value);
        }}
      />
    </div>
  );
}

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setfilteredBadges] = useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredBadges(result);
  }, [badges, query]);

  return [query, setQuery, filteredBadges];
}

function BadgesList(props) {
  const badges = props.badges;
  const [query, setQuery, filteredBadges] = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <Filter query={query} setQuery={setQuery} />
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <Filter query={query} setQuery={setQuery} />
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
