import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PersonalizationPage from "./pages/PersonalizationPage/PersonalizationPage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";
import PersonalizedPlanPage from "./pages/PersonalizedPlanPage/PersonalizedPlanPage";
import SignupPage from "./pages/signup1/signUp";
import SignupPage2 from "./pages/signup2/signUp2";
import ExplorationPage from "./pages/ExplorationPage/ExplorationPage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import LandmarksPage from "./pages/LandmarksPage/LandmarksPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import ExploreCity from "./pages/ExploreCity/ExploreCity";
import Test from "./pages/Test";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="/personalization"
          element={<PersonalizationPage />}
        ></Route>
        <Route
          path="/personalizedPlan"
          element={<PersonalizedPlanPage />}
        ></Route>
        <Route path="/itinerary" element={<ItineraryPage />}></Route>
        <Route path="/discoverLandMark" element={<DiscoverPage />}></Route>
        <Route path="/exploration" element={<ExplorationPage />}></Route>
        <Route path="/CityExploration" element={<ExploreCity />}></Route>
        <Route
          path="/personalization"
          element={<PersonalizationPage />}
        ></Route>
        <Route
          path="/personalizedPlan"
          element={<PersonalizedPlanPage />}
        ></Route>
        <Route path="/itinerary" element={<ItineraryPage />}></Route>
        {/* <Route path="/signUp" element={<SignupPage />}></Route>
        <Route path="/signUp2" element={<SignupPage2 />}></Route> */}
        <Route path="/landmarkspage" element={<LandmarksPage />}></Route>
        <Route path="/loading" element={<LoadingPage />}></Route>
        <Route path="/pnf" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
