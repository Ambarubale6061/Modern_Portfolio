import "../styles/globals.css";

export const metadata = {
  title: "Ambar's Portfolio",
  description: "Frontend Developer Portfolio",
  themeColor: "#2563eb",
  manifest: "/assets/favicons/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/assets/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/assets/favicons/apple-touch-icon.png",
    shortcut: "/assets/favicons/favicon.ico",
  },
  other: {
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/assets/favicons/browserconfig.xml",
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
        {/* Safari pinned tab */}
        <link
          rel="mask-icon"
          href="/assets/favicons/safari-pinned-tab.svg"
          color="#2563eb"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
