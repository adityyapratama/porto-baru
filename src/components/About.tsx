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
         Final-year Informatics Engineering student at Universitas Airlangga. When someone asks for a button, I want to know what they’re trying to get done. I open one tab to fix a bug and end up with twelve. The coffee goes cold.
        </p>
      </div>
    </section>
  );
}
