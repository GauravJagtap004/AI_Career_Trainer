"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface StoredUser {
  name?: string;
  email?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<StoredUser>({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user_data");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({});
      }
    }
  }, []);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-8 text-center text-white">
      <h1 className="text-4xl font-semibold">My Profile</h1>
      <div className="mt-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-left">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm text-zinc-500">Name</dt>
            <dd className="mt-1 text-lg">{user.name || "Not signed in"}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Email</dt>
            <dd className="mt-1 break-all text-lg">{user.email || "Not signed in"}</dd>
          </div>
        </dl>
      </div>
      <Link
        href="/dashboard"
        className="mt-6 rounded-full bg-[#B77895] px-8 py-3 font-semibold transition-colors hover:bg-[#ffacf3] hover:text-black"
      >
        View Dashboard
      </Link>
    </main>
  );
}
