import "./globals.css";

export const metadata = {
    title: "My ID",
    description: "A small Web App to generate UUID on the fly.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
