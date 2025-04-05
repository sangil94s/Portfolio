import Link from 'next/link';

// 헤더

export default function Header() {
  return (
    <header className="w-full h-10 bg-black fixed top-0 left-0 right-0 z-20 flex flex-row justify-between">
      <h1 className="text-xl text-white font-bold p-2"></h1>

      <section className="flex gap-2 p-2">
        <Link href="#skill" className="text-white font-bold">
          기술
        </Link>
        <Link href="#career" className="text-white font-bold">
          경력
        </Link>
        <Link href="#contract" className="text-white font-bold">
          연락처
        </Link>
      </section>
    </header>
  );
}
