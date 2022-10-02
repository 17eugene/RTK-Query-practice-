import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import EditForm from "../EditForm/EditForm";
import {
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../redux/apiSlice/apiSlice";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import Btn from "../Button/Button";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "36px",
  fontWeight: 900,
  marginBottom: "30px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: "20px",
}));

const PostPage = () => {
  const { id } = useParams();
  const [editFormIsOpened, setEditFormIsOpened] = useState(false);
  const { data: post, isFetching, isSuccess, error } = useGetPostQuery(id);
  const [updatePost] = useUpdatePostMutation();

  const editFormOpen = () => {
    setEditFormIsOpened(true);
  };

  const editFormClose = () => {
    setEditFormIsOpened(false);
  };

  const editPost = async (post) => {
    await updatePost(post);
    editFormClose();
  };

  return (
    <>
      {editFormIsOpened ? (
        <EditForm
          id={id}
          title={post.title}
          body={post.body}
          editPost={editPost}
        />
      ) : (
        <StyledBox>
          {isFetching ? (
            <Loader />
          ) : isSuccess ? (
            <StyledPaper>
              <StyledTitle>{post.title}</StyledTitle>
              <Typography>{post.body}</Typography>
              <Btn type="button" buttonText="EDIT" onClick={editFormOpen} />
            </StyledPaper>
          ) : (
            <Box>{error.toString()}</Box>
          )}
        </StyledBox>
      )}
    </>
  );
};

export default PostPage;
