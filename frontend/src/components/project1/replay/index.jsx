import PropTypes from "prop-types";
import { useContext } from "react";
import context from "@services/context/project1Ctx";
import SReplay from "./style";

function Replay({ color }) {
  const { reset } = useContext(context);

  return (
    <SReplay color={color}>
      <button type="button" onClick={reset}>
        REPLAY
      </button>
    </SReplay>
  );
}

export default Replay;

Replay.propTypes = {
  color: PropTypes.string.isRequired,
};
