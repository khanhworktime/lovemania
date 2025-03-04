export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container max-w-md overflow-hidden mx-auto bg-background min-h-screen h-screen">
      {children}
    </main>
  );
}
