interface ButtonProps {
  text: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button = ({ text, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-green-700 transition-all text-green-100 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-green-200 hover:bg-green-800"
    >
      {text}
    </button>
  );
};

export default Button;
