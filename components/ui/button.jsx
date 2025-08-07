import React from "react";

export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border-transaparent border-gray-100 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${
        variants[variant] || variants.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
