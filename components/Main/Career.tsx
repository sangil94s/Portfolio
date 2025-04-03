import Image from 'next/image';

// 경력 사항 소개 부분

export default function Career() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[270px]">
        <h1 className="py-4 text-white text-2xl text-center font-bold">Career</h1>
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-22 lg:flex-row">
          <section className="border border-slate-300 rounded-full mr-4 w-[200px] h-[200px]">
            <Image src={'/Logos.jpg'} width={200} height={200} alt="회사 로고" className="rounded-full" />
          </section>
          <ul className="list-disc text-white self-center">
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
