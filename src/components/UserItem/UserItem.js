import { Box, Typography } from "@mui/material";

const UserItem = ({ name, age }) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{age}</Typography>
    </Box>
  );
};

export default UserItem;
