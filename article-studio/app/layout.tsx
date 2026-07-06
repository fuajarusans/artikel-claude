import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Article Studio",
  description: "AI agent multi-client untuk pembuatan artikel SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-20">
            <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="inline-block h-6 w-6 rounded-md bg-brand" />
                <span>Article Studio</span>
              </Link>
              <nav className="flex items-center gap-1 text-sm">
                <Link
                  href="/"
                  className="px-3 py-1.5 rounded-md text-muted hover:text-ink hover:bg-surface-2"
                >
                  Dashboard
                </Link>
                <Link
                  href="/clients"
                  className="px-3 py-1.5 rounded-md text-muted hover:text-ink hover:bg-surface-2"
                >
                  Client
                </Link>
                <Link
                  href="/articles/new"
                  className="px-3 py-1.5 rounded-md bg-brand text-brand-ink font-medium hover:opacity-90"
                >
                  + Artikel Baru
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 mx-auto w-full max-w-6xl px-5 py-7">{children}</main>
          <footer className="border-t border-border text-xs text-muted">
            <div className="mx-auto max-w-6xl px-5 py-4">
              Article Studio · pipeline 4-agent (strategist → researcher → writer →
              editor) · v1
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
