import Image from 'next/image';

// 아마도 첫 소개에 배치되는 부분

export default function Introduce() {
  return (
    <div className="flex flex-row justify-center items-center mt-2 bg-gray-100 w-full h-full lg:w-[1920px] lg:h-[270px]">
      <section className="border border-slate-300 rounded-full w-[200px] h-[200px]">
        <Image src={'/Profile.png'} width={200} height={200} alt="프로필 이미지" />
      </section>
      <h1 className="p-10 text-red-600 text-center">첫 소개 부분</h1>
    </div>
  );
}
