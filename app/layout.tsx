import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarvar Shukirlayev — Frontend Developer',
  description:
    'I build clean, responsive, and user-focused web interfaces using modern frontend technologies with attention to performance and simplicity.',
  keywords: [
    'frontend developer',
    'React developer',
    'TypeScript developer',
    'Next.js',
    'Tailwind CSS',
    'web developer Uzbekistan',
    'Sarvar Shukirlayev',
  ],
  authors: [
    { name: 'Sarvar Shukirlayev', url: 'https://github.com/shukirlayev' },
  ],
  creator: 'Sarvar Shukirlayev',
  openGraph: {
    type: 'website',
    title: 'Sarvar Shukirlayev — Frontend Developer',
    description:
      'I build clean, responsive, and user-focused web interfaces using modern frontend technologies.',
    siteName: 'Sarvar Shukirlayev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvar Shukirlayev — Frontend Developer',
    description:
      'I build clean, responsive, and user-focused web interfaces using modern frontend technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
