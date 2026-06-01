export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300";

  const sizeClasses = { 
    sm: "px-5 py-2.5 text-sm",
    default: "px-7 py-3 text-base",  
    lg: "px-10 py-4 text-lg font-bold",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;         
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );  
};