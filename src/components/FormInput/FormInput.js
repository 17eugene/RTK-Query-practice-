import { Input } from "@mui/material";
import { styled } from "@mui/material";

const StyledFormInput = styled(Input)(({ theme }) => ({
  padding: "0 10px",
  marginRight: "20px",
  background: theme.palette.background.secondary,
  color: theme.palette.danger.main,
  fontWeight: 700
}));

const FormInput = ({ value, onChange, placeholder, name }) => {
  return (
    <StyledFormInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type="text"
    />
  );
};

export default FormInput;
