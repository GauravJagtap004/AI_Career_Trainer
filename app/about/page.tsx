import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-8 py-16 text-white">
      <section className="rounded-3xl border border-zinc-800 bg-zinc-950/70 px-8 py-14 text-center shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#ffacf3]">
          About Interwise
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Practice smarter. Interview with confidence.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Interwise is an AI-powered mock interview platform for practicing
          role-specific questions, reviewing your answers, and tracking your
          interview progress.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-full bg-[#B77895] px-8 py-3 text-lg font-semibold transition-colors hover:bg-[#ffacf3] hover:text-black"
        >
          Open Dashboard
        </Link>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Personalized Practice</h2>
          <p className="mt-3 text-zinc-400">
            Build sessions for your job role, experience level, and tech stack.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Detailed Feedback</h2>
          <p className="mt-3 text-zinc-400">
            Improve technical accuracy, clarity, communication, and next steps.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Progress History</h2>
          <p className="mt-3 text-zinc-400">
            Review previous interviews, scores, answers, and completed results.
          </p>
        </article>
      </section>
    </main>
  );
}
