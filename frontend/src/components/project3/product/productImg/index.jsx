import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import SProductImg from "./style";

export default function ProductImg({
  sticker,
  bigImg,
  setBigImg,
  imgLink,
  bigImgOrientation,
}) {
  const { id } = useParams();

  return (
    <SProductImg
      photo={`${imgLink}${id}.png`}
      bigImg={`${imgLink}${bigImg}.png`}
      technicalSheet={`${imgLink}${id}_ft.png`}
      technicalSheet2={`${imgLink}${id}_ft_2.png`}
    >
      <div className="buttons">
        <button
          className={
            sticker.photoNumber > 0 && `${id}` !== `${bigImg}`
              ? "hover photo"
              : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}`);
          }}
        />
        <button
          className={
            `${bigImg}` !== `${id}_ft` ? "hover technicalSheet" : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}_ft`);
          }}
        />
        <button
          className={
            sticker.ftNumber > 1 && `${bigImg}` !== `${id}_ft_2`
              ? "hover technicalSheet2"
              : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}_ft_2`);
          }}
        />
        <div />
      </div>
      <div
        className={
          !bigImgOrientation ||
          `${bigImg}` === `${id}_ft` ||
          `${bigImg}` === `${id}_ft_2` ||
          `${bigImg}` === `${id}`
            ? "bigImg"
            : `bigImg ${bigImgOrientation}`
        }
      />
    </SProductImg>
  );
}

ProductImg.propTypes = {
  sticker: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  setBigImg: PropTypes.func.isRequired,
  imgLink: PropTypes.string.isRequired,
  bigImgOrientation: PropTypes.bool.isRequired,
};
