import { Circles } from "react-loader-spinner";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const StyledLoaderWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
}));

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <Circles
        height="120"
        width="120"
        color="#0F7AEC"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
