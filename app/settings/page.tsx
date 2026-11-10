"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  useEffect(() => {
    setReduceMotion(localStorage.getItem("reduce_motion") === "true");
    setEmailUpdates(localStorage.getItem("email_updates") !== "false");
  }, []);

  const saveSettings = () => {
    localStorage.setItem("reduce_motion", String(reduceMotion));
    localStorage.setItem("email_updates", String(emailUpdates));
    window.alert("Settings saved on this device.");
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-8 text-center text-white">
      <h1 className="text-4xl font-semibold">Settings</h1>
      <div className="mt-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-left">
        <label className="flex cursor-pointer items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <span>
            <span className="block font-semibold">Reduce motion</span>
            <span className="text-sm text-zinc-400">Minimize interface animations.</span>
          </span>
          <input
            type="checkbox"
            checked={reduceMotion}
            onChange={(event) => setReduceMotion(event.target.checked)}
            className="h-5 w-5"
          />
        </label>
        <label className="mt-5 flex cursor-pointer items-center justify-between gap-4">
          <span>
            <span className="block font-semibold">Interview updates</span>
            <span className="text-sm text-zinc-400">Keep interview notifications enabled locally.</span>
          </span>
          <input
            type="checkbox"
            checked={emailUpdates}
            onChange={(event) => setEmailUpdates(event.target.checked)}
            className="h-5 w-5"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={saveSettings}
        className="mt-6 rounded-full bg-[#B77895] px-8 py-3 font-semibold transition-colors hover:bg-[#ffacf3] hover:text-black"
      >
        Save Settings
      </button>
    </main>
  );
}
