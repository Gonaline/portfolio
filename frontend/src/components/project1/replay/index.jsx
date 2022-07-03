import { useContext } from "react";
import context from "@services/context/project1Ctx";
import SReplay from "./style";

function Replay() {
  const { reset } = useContext(context);

  return (
    <SReplay>
      <button type="button" onClick={reset}>
        REPLAY
      </button>
    </SReplay>
  );
}

export default Replay;
