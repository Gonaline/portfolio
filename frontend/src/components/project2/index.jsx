import PropTypes from "prop-types";
import SProject1 from "./style";

export default function Project2({
  // color,
  backgroundColor,
  // otherColor,
  // flashColor,
  // title,
}) {
  return (
    <SProject1 backgroundColor={backgroundColor}>
      <section>
        <div className="container">
          <div className="box">
            <img src="https://source.unsplash.com/1000x806" alt="test1" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x800" alt="test2" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x802" alt="test3" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x804" alt="test4" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x806" alt="test5" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x804" alt="test6" />
            <span>CSS</span>
          </div>
          <div className="box">
            <img src="https://source.unsplash.com/1000x806" alt="test7" />
            <span>CSS</span>
          </div>
        </div>
      </section>
    </SProject1>
  );
}

Project2.propTypes = {
  // title: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  // otherColor: PropTypes.string.isRequired,
  // flashColor: PropTypes.string.isRequired,
};
