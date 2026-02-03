export default function Button({ 
  type = "button", 
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
  children, 
  ...props 
}) {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const variantClass = variants[variant] || variants.primary;
  const finalClassName = `${baseStyles} ${variantClass} ${className}`;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={finalClassName}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
