import "../styles/globals.css";

export const metadata = {
  title: "Ambar's Portfolio",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: [
      {
        url: "/logo1.png",
        sizes: "32x32", // हे ब्राउझरला इमेजची साईज सांगते
        type: "image/png",
      },
    ],
  },
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
