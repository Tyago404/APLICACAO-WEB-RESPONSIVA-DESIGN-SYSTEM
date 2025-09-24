type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="dark:text-gray-50 dark:bg-gray-800 max-w-screen min-h-screen">
      {children}
    </div>
  );
}
