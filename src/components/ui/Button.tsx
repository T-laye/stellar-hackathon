import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
};

const Button = ({
	children,
	className = "",
	variant = "primary",
	size = "md",
}: ButtonProps) => {
	// VARIANT STYLES
	const variantStyles = {
		primary: "bg-[#B0A4EB] text-black",
		outline: "bg-[#00000003] trans-btn-sec",
		ghost: "bg-transparent text-black",
	};

	// SIZE STYLES
	const sizeStyles = {
		sm: "py-2 px-4 text-sm",
		md: "py-3 px-6",
		lg: "py-4 px-8 text-lg",
	};

	return (
		<button
			className={`
        rounded-[31px] max-sm:text-sm font-semibold cursor-pointer transition-all duration-200 hover:opacity-70 hover:scale-105 active:scale-95 min-w-32.75 
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
		>
			{children}
		</button>
	);
};

export default Button;
