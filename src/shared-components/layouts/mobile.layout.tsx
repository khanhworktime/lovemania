export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container max-w-md overflow-x-hidden relative mx-auto bg-background min-h-svh h-svh">
      {children}
    </div>
  );
}
