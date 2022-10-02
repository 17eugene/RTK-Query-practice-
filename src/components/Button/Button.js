import { Button } from "@mui/material";

const Btn = ({ type, buttonText, onClick }) => {
  return (
    <Button type={type} variant="contained" onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default Btn;
