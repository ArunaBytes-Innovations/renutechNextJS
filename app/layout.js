import "./globals.css";

export const metadata = {
  title: "RenuTech",
  description: "RenuTech is a tech fest organised by SPNREC, Araria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scrollbar">{children}</body>
    </html>
  );
}
