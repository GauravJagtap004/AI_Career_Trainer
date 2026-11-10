export default function ServicesPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-8 text-center text-white">
      <h1 className="text-4xl font-semibold">Services</h1>
      <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">AI Interviews</h2>
          <p className="mt-3 text-zinc-400">Practice role-specific interviews with AI-generated questions.</p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Answer Analysis</h2>
          <p className="mt-3 text-zinc-400">Receive technical, communication, and improvement feedback.</p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Progress Tracking</h2>
          <p className="mt-3 text-zinc-400">Review previous sessions, scores, and interview results.</p>
        </article>
      </div>
    </main>
  );
}
