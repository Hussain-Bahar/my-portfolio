import * as React from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost";
};

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none",
        variant === "ghost"
          ? "bg-transparent hover:bg-gray-200/60 dark:hover:bg-white/10"
          : "bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black",
        className
      )}
      {...props}
    />
  );
}
