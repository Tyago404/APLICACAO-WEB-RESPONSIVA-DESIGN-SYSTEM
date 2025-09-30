type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="dark:text-gray-50 dark:bg-gray-800 max-w-[1300px] mx-auto min-h-screen px-8 pt-2 ">
      {children}
    </div>
  );
}
