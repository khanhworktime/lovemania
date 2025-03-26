import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#4B164C",
};

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-primary-900 h-svh min-h-svh overflow-y-auto pb-4 flex flex-col"
      id="messages-layout"
    >
      {children}
    </div>
  );
}
