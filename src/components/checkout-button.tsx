"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  productId: string;
  label?: string;
  className?: string;
};

export function CheckoutButton({
  productId,
  label = "Pre-order",
  className = "",
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
    <div className={`space-y-3 ${className}`}>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="inline-flex h-[51px] min-w-[169px] items-center justify-center rounded-full bg-black px-8 text-[17px] font-medium tracking-[0.34px] text-white uppercase transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:h-[101px] md:min-w-[335px] md:text-[35px] md:tracking-[0.7px]"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? (
        <p className="text-center text-[12px] text-red-600 uppercase">{error}</p>
      ) : null}
    </div>
  );
}
