import { Button } from '../ui/button';
import { Motions } from '../Etc/motion';
import { RiNotionFill } from 'react-icons/ri';
import Link from 'next/link';

// 경력 사항 소개 부분

export default function Career() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[600px]" id="career">
        <section className="flex items-center justify-center m-auto w-6/12">
          <hr className="flex-grow border-gray-300" />
          <h1 className="p-4 text-gray-300 text-2xl text-center font-bold">커리어</h1>
          <hr className="flex-grow border-gray-300" />
        </section>

        <Motions delay={0.7}>
          <div className="flex flex-col justify-center items-center m-auto gap-6 lg:gap-8 lg:flex-row lg:h-[600px]">
            <p className="text-white text-xl font-bold"> 2022.12 - 2025.03 </p>
            <section className="p-2">
              <h4 className="text-white text-xl font-bold p-2">킴스인더스트리</h4>
              <p className="text-white text-xs font-bold px-2 py-6">연구개발부 소프트웨어 2팀</p>
              <Link
                aria-label="업무 관련 한 페이지에 몰아서 정리한 부분"
                target="_blank"
                className="cursor-pointer"
                href="https://precious-hyssop-b3b.notion.site/1d050042c170807386a6fbd1ac55a893?pvs=4"
              >
                <Button variant="secondary" className="w-full m-1 font-bold">
                  <RiNotionFill />
                  자세히 보기
                </Button>
              </Link>
            </section>
          </div>
        </Motions>
      </div>
    </>
  );
}
