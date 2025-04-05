// 헤더

export default function Header() {
  return (
    <header className="w-full h-8 bg-black fixed top-0 left-0 flex flex-row justify-between">
      <h1 className="text-xl text-white font-bold p-2">헤더</h1>

      <section className="flex gap-2 p-2">
        <h1 className="text-white font-bold">기술</h1>
        <h1 className="text-white font-bold">경력</h1>
        <h1 className="text-white font-bold">연락처</h1>
      </section>
    </header>
  );
}
