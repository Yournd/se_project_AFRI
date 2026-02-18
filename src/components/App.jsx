import { useEffect } from "react";
import "../styles/App.css";
import { AppProvider } from "../context/AppContext";
import Header from "./Header";
import ImageCompareViewer from "./ImageCompareViewer";
import AnalysisPanel from "./AnalysisPanel";
import AnalysisNotesModal from "./AnalysisNotesModal";

const App = () => {
  useEffect(() => {
    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener("dragover", preventDefaults);
    window.addEventListener("drop", preventDefaults);

    return () => {
      window.removeEventListener("dragover", preventDefaults);
      window.removeEventListener("drop", preventDefaults);
    };
  }, []);

  return (
    <AppProvider>
      <div className="app__container">
        <Header />
        <div className="main__content">
          <AnalysisPanel />
          <ImageCompareViewer />
          <AnalysisNotesModal />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
