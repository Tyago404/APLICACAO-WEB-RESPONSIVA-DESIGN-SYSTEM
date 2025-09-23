type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="dark:text-gray-50 dark:bg-gray-700 min-h-screen">
      {children}
    </div>
  );
}
