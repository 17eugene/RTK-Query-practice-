import { useState } from "react";
import { Box } from "@mui/material";
import Btn from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { styled } from "@mui/material";
import { useAddPostMutation } from "../../redux/apiSlice/apiSlice";

const StyledFormWrapper = styled(Box)(() => ({
  padding: "30px",
}));

const AddForm = () => {
  const [value, setValue] = useState({ title: "", body: "" });

  const [addPost] = useAddPostMutation();

  const inputChangeHandler = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addPostHandler = async () => {
    await addPost({ title: value.title, body: value.body }).unwrap();
  };
  return (
    <StyledFormWrapper>
      <form>
        <FormInput
          onChange={inputChangeHandler}
          value={value.title}
          name="title"
          placeholder="Enter title here..."
        />
        <FormInput
          onChange={inputChangeHandler}
          value={value.body}
          name="body"
          placeholder="Enter post here..."
        />
        <Btn onClick={addPostHandler} type="button" buttonText="ADD NEW" />
      </form>
    </StyledFormWrapper>
  );
};

export default AddForm;
