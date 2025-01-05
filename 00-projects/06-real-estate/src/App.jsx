import { Route, Routes } from "react-router";
import Homepage from "./ui/pages/Homepage/Index";
import WhyChooseUsSection from "./ui/sections/WhyChooseUsSection/Index";
import FindHomeSection from "./ui/sections/FindHomeSection/Index";
import OurMissionSection from "./ui/sections/OurMissionSection/Index";
import TestimonialsSection from "./ui/sections/TestimonialsSection/Index";
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
        {/* <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/find-home" element={<FindHomePage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
