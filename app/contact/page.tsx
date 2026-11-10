export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-8 text-center text-white">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 text-zinc-400">
        Have feedback or need help? Contact us using the details below.
      </p>
      <div className="mt-8 flex flex-col gap-4 text-lg">
        <a
          href="tel:+917711997736"
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 transition-colors hover:border-[#B77895]"
        >
          <span className="text-zinc-400">Mobile:</span>{" "}
          <span className="font-semibold text-white">7711997736</span>
        </a>
        <a
          href="mailto:gauravjagtap7736@gmail.com"
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 transition-colors hover:border-[#B77895]"
        >
          <span className="text-zinc-400">Email:</span>{" "}
          <span className="font-semibold text-white">
            gauravjagtap7736@gmail.com
          </span>
        </a>
      </div>
    </main>
  );
}
