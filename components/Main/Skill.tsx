import Image from 'next/image';

// 스킬을 소개하는 부분

export default function Skill() {
  return (
    <>
      <div className="bg-gray-400 w-full h-max lg:w-[1920px]">
        <h1 className="py-4 text-red-600 text-2xl text-center font-bold">Skill</h1>

        <section className="w-6/12 border border-slate-300 rounded-md m-auto py-4">
          <p>프론트 파트</p>
        </section>

        <section className="w-6/12 border border-slate-300 rounded-md m-auto py-4 my-2">
          <p>백엔드 파트</p>
          <Image src={'/skill/express.png'} width={100} height={100} alt="Express-logo" className="rounded-full" />
        </section>

        <section className="w-6/12 border border-slate-300 rounded-md m-auto py-4">
          <p>기타 파트</p>
        </section>
      </div>
    </>
  );
}
