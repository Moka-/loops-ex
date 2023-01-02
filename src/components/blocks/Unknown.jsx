import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoop } from "@fortawesome/free-solid-svg-icons";

export default function UnknownBlock() {
  return (
    <>
      <FontAwesomeIcon icon={faPoop} />
      This block type is not supported
    </>
  );
}
