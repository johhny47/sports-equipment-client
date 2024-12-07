const Tooltip = ({ text, children }) => {
    return (
      <div className="group relative inline-block">
        {children}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 px-3 -py-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 group-hover:mb-2 transition-opacity duration-300">
          {text}
        </div>
      </div>
    );
  };
  
  export default Tooltip;