import "../styles/globals.css";

export const metadata = {
  title: "Ambar's Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Boxicons CDN */}
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
