import { useAppContext } from "../context/AppContext";
import "../styles/AnalysisNotesModal.css";

const AnalysisNotesModal = () => {
  const { activeChange, setActiveChangeId, activeModal, closeActiveModal } =
    useAppContext();

  if (activeModal !== "notes") return null;

  return (
    <div
      className="analysis_modal_background"
      onClick={() => {
        closeActiveModal();
        setActiveChangeId(null);
      }}
    >
      <div className="analysis_modal">
        <button
          className="analysis_modal__close_btn"
          onClick={() => {
            closeActiveModal();
            setActiveChangeId(null);
          }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3 className="analysis_modal__title">~Analysis Notes~</h3>
        <p className="analysis_modal__accessibility_note">
          Accessibility Notes: {activeChange?.accessibilityNotes}
        </p>
        <p className="analysis_modal__recommended_fixes">
          Recommended Fixes: {activeChange?.recommendedFixes}
        </p>
        <p className="analysis_modal__mobile_impact">
          Mobile Impact: {activeChange?.mobileImpact}
        </p>
      </div>
    </div>
  );
};

export default AnalysisNotesModal;
