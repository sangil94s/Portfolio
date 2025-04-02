import Image from 'next/image';

// 경력 사항 소개 부분

export default function Career() {
  return (
    <>
      <div className="bg-gray-400 w-full h-full lg:w-[1920px] lg:h-[270px]">
        <h1 className="py-4 text-red-600 text-2xl text-center font-bold">Career</h1>
        <div className="flex flex-row justify-center items-center">
          <section className="border border-slate-300 rounded-full mx-2 w-[200px] h-[200px]">
            <Image src={'/Logos.jpg'} width={200} height={200} alt="회사 로고" className="rounded-full" />
          </section>
          <ul className="list-disc text-red-600 px-4">
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
