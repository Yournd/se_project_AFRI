import { useAppContext } from "../context/AppContext";
import ChangeItem from "./ChangeItem";
import "../styles/AnalysisPanel.css";

const AnalysisPanel = () => {
  const { changes, status, openActiveModal } = useAppContext();

  if (status === "idle") return null;
  if (status === "analyzing")
    return <div className="analysis_panel_type_message">Analyzing…</div>;
  if (status === "error")
    return (
      <div className="analysis_panel_type_message">Error analyzing images</div>
    );

  return (
    <div className="analysis_panel__container">
      <div className="grid__wrapper">
        {changes?.map((change, i) => (
          <ChangeItem
            className="analysis_panel"
            key={change.id ?? i}
            change={change}
          />
        ))}
      </div>
      <button
        className="summary__btn"
        disabled={!changes || status === "analyzing"}
        onClick={() => {
          openActiveModal("summary");
        }}
      >
        Click here for full summary!
      </button>
    </div>
  );
};

export default AnalysisPanel;
