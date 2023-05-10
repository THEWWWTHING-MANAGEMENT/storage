export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="/">← Home</a>
        {children}
      </body>
    </html>
  );
}
