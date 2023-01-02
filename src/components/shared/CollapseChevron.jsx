import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./CollapseChevron.css";

export default function Chevron({ isCollapsed, onClick }) {
  const svg = isCollapsed ? faChevronUp : faChevronDown;
  return <FontAwesomeIcon className="collapse-chevron" icon={svg} onClick={onClick} />;
}
