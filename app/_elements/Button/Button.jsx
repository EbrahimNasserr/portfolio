import "./button.css";

const Button = ({ buttonText }) => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{buttonText}</span>
    </button>
  );
};

export default Button;
