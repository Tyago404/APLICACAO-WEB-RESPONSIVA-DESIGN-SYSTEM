import clsx from "clsx";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div
      className={clsx(
        "dark:text-gray-50 text-gray-800",
        "dark:bg-gray-800 bg-gray-50",
        "max-w-[1300px]",
        "mx-auto",
        "min-h-screen",
        "px-8",
        "pt-2"
      )}
    >
      {children}
    </div>
  );
}
