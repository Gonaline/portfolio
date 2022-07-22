import PropTypes from "prop-types";
import SMirror from "./style";

export default function Mirror({
  mirrorChoice,
  setMirrorChoice,
  whiteOpacity,
  borderColor,
}) {
  return (
    <SMirror whiteOpacity={whiteOpacity} borderColor={borderColor}>
      <>
        <div className="titleOfOption">
          <h5>Sens du sticker : {mirrorChoice ? "inversé" : "non inversé"}</h5>
        </div>
        <div className="choice">
          <button
            // className={mirrorChoice ? "selected" : ""}
            // className={
            //   `${color.img}` === `${colorChoice2}` ? "selected" : ""
            // }
            type="button"
            onClick={() => {
              setMirrorChoice(false);
            }}
          >
            <img
              className="imgOption"
              alt="sens non inverse"
              src="/src/assets/pictures/project3/options/_b.png"
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
              src="/src/assets/pictures/project3/options/_t.png"
            />
          </button>
        </div>
      </>
    </SMirror>
  );
}

Mirror.propTypes = {
  whiteOpacity: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  mirrorChoice: PropTypes.string.isRequired,
  setMirrorChoice: PropTypes.func.isRequired,
};
