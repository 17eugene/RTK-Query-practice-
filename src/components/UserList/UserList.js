import { List, ListItem } from "@mui/material";
import UserItem from "../UserItem/UserItem";
import { useGetUsersQuery } from "../../redux/apiSlice/apiSlice";

const UserList = () => {
  const { data: users } = useGetUsersQuery();
  return (
    <List>
      {users &&
        users.map((user) => (
          <ListItem key={user.id}>
            <UserItem name={user.name} age={user.age} />
          </ListItem>
        ))}
    </List>
  );
};

export default UserList;
