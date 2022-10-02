import { Link } from "react-router-dom";
import { List, ListItem, Box } from "@mui/material";
import Loader from "../Loader/Loader";
import PostItem from "../PostItem/PostItem";
import AddForm from "../AddForm/AddForm";
import Btn from "../Button/Button";
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "../../redux/apiSlice/apiSlice";

const PostList = () => {

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const [deletePost] = useDeletePostMutation();

  const deletePostHandler = async (id) => {
    await deletePost(id).unwrap();
  };

  return (
    <>
      <AddForm />
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <List>
          {posts &&
            posts.map((post, index) => (
              <ListItem key={post.id}>
                <Link to={`${post.id}`}>
                  <PostItem
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    index={index}
                  />
                </Link>
                <Btn
                  onClick={() => deletePostHandler(post.id)}
                  buttonText="DELETE"
                />
              </ListItem>
            ))}
        </List>
      ) : isError ? (
        <Box>{error.toString()}</Box>
      ) : null}
    </>
  );
};

export default PostList;
