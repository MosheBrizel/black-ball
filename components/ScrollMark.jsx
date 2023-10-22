import "./css/ScrollMark.css";

function ScrollMark(props) {
  return (
    <div id={'mark' + props.id} className="scroll-mark">
      <div className="scroll-mark-line scroll-mark-line-left-to-right"></div>
      <div className="scroll-mark-line scroll-mark-line-right-to-left"></div>
    </div>
  );
}

export default ScrollMark;
