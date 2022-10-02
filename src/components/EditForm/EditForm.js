import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { Paper } from "@mui/material";
import { styled } from "@mui/material";
import Btn from "../Button/Button";

const StyledPaper = styled(Paper)(() => ({
  padding: "20px",
}));

const EditForm = ({ id, title, body, editPost }) => {
  const [editTitle, setEditTitle] = useState(title || "");
  const [editBody, setEditBody] = useState(body || "");

  const onChangeEditInput = (e) => {
    switch (e.target.name) {
      case "title":
        setEditTitle(e.target.value);
        break;

      case "body":
        setEditBody(e.target.value);
        break;

      default:
        return;
    }
  };

  return (
    <StyledPaper>
      <form>
        <FormInput
          placeholder="Enter post title here..."
          value={editTitle}
          onChange={onChangeEditInput}
          name="title"
        />
        <FormInput
          placeholder="Enter post text here..."
          value={editBody}
          onChange={onChangeEditInput}
          name="body"
        />
        <Btn
          type="button"
          buttonText="SUBMIT"
          onClick={() => editPost({ id, title: editTitle, body: editBody })}
        />
      </form>
    </StyledPaper>
  );
};

export default EditForm;
