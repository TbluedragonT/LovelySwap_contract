import styled from "styled-components";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Sidebar from "./Layout/Sidebar";
// import BackMarquee from "./Component/BackMarquee/BackMarquee";
import BackMarquee from "./Component/BackMarquee/BgLayerComponent";
import Buy from "./Page/Buy";
import Sell from "./Page/Sell";

const App = () => {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Header />
        <SectionCenter>
          <Sidebar />
          <SectionContent>
            <Routes>
              <Route path="/" element={<Buy />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
            </Routes>
          </SectionContent>
          <BackMarquee />
        </SectionCenter>
        <Footer />
      </StyledComponent>
    </BrowserRouter>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #181b2e;
  overflow-y: auto;
`;

const SectionCenter = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 4;
`;

export default App;
