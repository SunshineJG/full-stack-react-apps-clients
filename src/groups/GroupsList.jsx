export const GroupsList = ({ isLoading, groups, ListItemComponent }) =>
  isLoading ? (
    <p>Loading...</p>
  ) : (
    groups.map((group) => <ListItemComponent key={group.id} group={group} />)
  );
