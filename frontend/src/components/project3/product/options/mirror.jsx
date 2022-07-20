import PropTypes from "prop-types";
import SMirror from "./style";

export default function Mirror({ mirrorChoice, setMirrorChoice }) {
  return (
    <SMirror>
      <>
        <div className="titleOfOption">
          <h5>Sens du sticker : {mirrorChoice ? "inversé" : "non inversé"}</h5>
        </div>
        <div className="choice">
          <button
            type="button"
            onClick={() => {
              setMirrorChoice(false);
            }}
          >
            <img
              className="imgOption"
              alt="sens non inverse"
              src="../src/assets/pictures/project3/options/_b.png"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setMirrorChoice(true);
            }}
          >
            <img
              className="imgOption"
              alt="sens non inverse"
              src="../src/assets/pictures/project3/options/_t.png"
            />
          </button>
        </div>
      </>
    </SMirror>
  );
}

Mirror.propTypes = {
  mirrorChoice: PropTypes.string.isRequired,
  setMirrorChoice: PropTypes.func.isRequired,
};
