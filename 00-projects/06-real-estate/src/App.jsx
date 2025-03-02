import { Route, Routes } from "react-router";
import Homepage from "./ui/pages/Homepage/Index";
import WhyChooseUsSection from "./ui/sections/WhyChooseUsSection/Index";
import FindHomeSection from "./ui/sections/FindHomeSection/Index";
import OurMissionSection from "./ui/sections/OurMissionSection/Index";
import TestimonialsSection from "./ui/sections/TestimonialsSection/Index";
import RefresherPage from "./ui/pages/RefresherPage/Index";
import ContextPage from "./ui/pages/ContextPage/Index";
import HomeDetailsPage from "./ui/pages/HomeDetailsPage/Index";
// import WhyChooseUsPage from "./ui/pages/WhyChooseUsPage/Index";
// import FindHomePage from "./ui/pages/FindHomePage/Index";
// import TestimonialsPage from "./ui/pages/TestimonialsPage/Index";
// import OurMissionPage from "./ui/pages/OurMissionPage/Index";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <WhyChooseUsSection />
              <FindHomeSection />
              <OurMissionSection />
              <TestimonialsSection />
            </>
          }
        />
        <Route path="/homes/:id" element={<HomeDetailsPage />} />
        {/* <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/find-home" element={<FindHomePage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        */}
        <Route path="/refresher" element={<RefresherPage />} />
        <Route path="/context" element={<ContextPage />} />
      </Routes>
    </>
  );
}

export default App;
