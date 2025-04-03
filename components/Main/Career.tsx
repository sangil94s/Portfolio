import Image from 'next/image';

// 경력 사항 소개 부분

export default function Career() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[270px]">
        <section className="flex items-center justify-center m-auto my-4 w-6/12">
          <hr className="flex-grow border-gray-300" />
          <h1 className="p-4 text-white text-2xl text-center font-bold">Career</h1>
          <hr className="flex-grow border-gray-300" />
        </section>
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-22 lg:flex-row">
          <Image src={'/Logos.jpg'} width={100} height={100} alt="회사 로고" className="rounded-full" />
          <ul className="list-disc text-white self-center">
            <li>1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
