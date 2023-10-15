import { Link } from "react-router-dom";

export const MyGroupsList = ({ group }) => (
  <div className="list-itme">
    <div className="list-item-data">
      <Link to={`/groups/${group.id}`}>
        <h3>{group.name}</h3>
      </Link>
      <p>Owned by: {group.owner.fullName}</p>
      <p>{group.members.length} members</p>
    </div>
  </div>
);
