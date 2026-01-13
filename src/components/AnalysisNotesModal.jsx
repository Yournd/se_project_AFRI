import { useAppContext } from "../context/AppContext";
import "../styles/AnalysisNotesModal.css";

const AnalysisNotesModal = () => {
  const { analysis } = useAppContext();
  const change = analysis?.changes;

  return (
    <div className="analysis_modal_background">
      <div className="analysis_modal">
        <h3 className="analysis_modal__title">Analysis Notes:</h3>
        <p className="analysis_modal__accessibility_note">
          Accessibility Notes: {change?.accessibilityNotes}
        </p>
        <p className="analysis_modal__recommended_fixes">
          Recommended Fixes: {change?.recommendedFixes}
        </p>
      </div>
    </div>
  );
};

export default AnalysisNotesModal;
