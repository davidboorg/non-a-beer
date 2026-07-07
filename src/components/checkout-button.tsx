"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  productId: string;
  label?: string;
};

export function CheckoutButton({
  productId,
  label = "Pre-order now",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="inline-flex min-h-14 w-full items-center justify-center bg-black px-8 py-4 text-[14px] font-bold tracking-[0.24px] text-white uppercase transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
      >
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error ? (
        <p className="text-[12px] text-red-600 uppercase">{error}</p>
      ) : null}
    </div>
  );
}
