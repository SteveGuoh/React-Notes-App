import Linearprogress from "@mui/material/LinearProgress";

function CreateNote({ textHandler, saveHandler, inputText }) {
  // character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        onChange={textHandler}
        placeholder="Type..."
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <Linearprogress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;
