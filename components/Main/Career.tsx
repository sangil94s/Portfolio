import Image from 'next/image';
import { RiNotionFill } from 'react-icons/ri';

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
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 lg:flex-row">
          <section className="py-1">
            <Image src={'/Logos.jpg'} width={140} height={100} alt="회사 로고" className="rounded-full" />
            <p className="text-white font-bold">근무 : 2022.12 - 2025.03 </p>
          </section>
          <ul className="list-disc text-white">
            <li className="p-2 font-bold">입사 2달 만에 EJS → React 전환을 제안하고 실행.</li>
            <li className="p-2 font-bold">API 문서조차 없던 환경에 Notion 기반 문서화를 도입, 2개 프로젝트에 적용</li>
            <li className="p-2 font-bold">
              웹에 무관심한 제조업 기업에서 프론트·백엔드 전체를 단독 개발하며 실무 전반을 경험
            </li>
            <section className="grid grid-cols-3 gap-2 text-white text-xl justify-items-center py-4">
              <p>
                <RiNotionFill />{' '}
              </p>
              <p>
                <RiNotionFill />
              </p>
              <p>
                <RiNotionFill />
              </p>
            </section>
          </ul>
        </div>
      </div>
    </>
  );
}
