import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ href, children, px = null, className, onClick, isWhite }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 ${
    isWhite ? "text-n-8" : "text-n-1"
  } transition-colors hover:text-color-1 ${px || "px-7"} ${className || ""}`;

  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(isWhite)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(isWhite)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
