import Image from "next/image";

export function ArrowButton({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex size-6 items-center justify-center md:size-16 ${className}`}
    >
      <Image
        src="/images/arrow-circle.svg"
        alt=""
        width={64}
        height={64}
        className="h-full w-full"
      />
    </span>
  );
}
