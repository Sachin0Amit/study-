export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-4">The page or chapter you are looking for does not exist.</p>
      <a href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
        Back to Library
      </a>
    </div>
  )
}
