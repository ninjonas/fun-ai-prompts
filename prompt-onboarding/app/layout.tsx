import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen">
        <main className="max-w-xl mx-auto py-10 px-4">{children}</main>
      </body>
    </html>
  );
}
