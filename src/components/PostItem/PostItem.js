import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.main,
  padding: "10px",
  border: "2px solid #F8B135",
  borderRadius: "6px",
  width: "350px"
}));

const StyledPostIndex = styled(Typography)(() => ({
    fontSize: "12px"
}))

const StyledPostTitle = styled(Typography)(() => ({
    fontSize: "18px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "1rem"
}))

const StyledPostBody = styled(Typography)(() => ({
    fontSize: "14px",
}))

const PostItem = ({ title, body, index }) => {
  return (
    <StyledBox>
      <StyledPostIndex component="span">{index + 1}</StyledPostIndex>
      <StyledPostTitle component="h5">{title}</StyledPostTitle>
      <StyledPostBody>{body}</StyledPostBody>
    </StyledBox>
  );
};

export default PostItem;
