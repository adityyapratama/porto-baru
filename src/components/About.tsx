export default function About() {
  return (
    <section className="panel card flex flex-wrap items-center gap-x-7 gap-y-4 p-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/es-kopi.svg"
        alt="Iced milk coffee with a straw"
        className="mx-auto block h-auto max-w-full"
        style={{ flex: "0 1 230px", width: 230 }}
      />
      <div className="flex min-w-0 flex-col gap-4" style={{ flex: "1 1 320px" }}>
        <h2 className="display">
          I like exploring and finding what&apos;s <span className="hl">interesting</span>.
        </h2>
        <p className="sub max-w-[600px] leading-[1.6]">
          I&apos;m a final-year Computer Science student at Universitas Airlangga and a Junior Software Engineer who has
          shipped real products for clients and organizations. I start by understanding the problem behind each
          requirement, then solve it end to end, from design to launch.
        </p>
      </div>
    </section>
  );
}
