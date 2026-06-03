export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="max-w-xl rounded-lg border bg-background/80 p-12 text-center shadow-lg">
        <h1 className="mb-4 text-6xl font-extrabold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Sorry — we couldn’t find the page you were looking for.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90">Go home</a>
          <a href="/contact" className="text-sm text-muted-foreground underline hover:text-muted-foreground/80">Contact support</a>
        </div>
      </div>
    </div>
  );
}
