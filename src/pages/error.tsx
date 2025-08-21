export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-2 text-center">
      <h2 className="font-bold text-2xl">Error Loading Page</h2>
      <p className="text-lg text-destructive">{error.message}</p>
    </div>
  );
}
