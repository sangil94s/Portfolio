import { RiNotionFill } from 'react-icons/ri';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { BsCardList } from 'react-icons/bs';
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

        <div className="flex flex-col justify-center items-center m-auto gap-6 lg:gap-8 lg:flex-row lg:h-[600px]">
          <p className="text-white text-xl font-bold"> 2022.12 - 2025.03 </p>
          <section className="p-2">
            <h4 className="text-white text-xl font-bold p-2">킴스인더스트리</h4>
            <p className="text-white text-xs font-bold px-2 py-6">연구개발부 소프트웨어 2팀</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-black font-bold cursor-pointer">
                  <BsCardList />
                  성과 간단히 보기
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-9/12 lg:w-full bg-gray-900">
                <ul className="list-disc m-1 p-2  text-white">
                  <li className="p-1">진행한 프로젝트 중 2개 프로젝트를 배포까지 담당</li>

                  <li className="p-1">회사의 유일한 웹 개발자로 프론트와 백엔드 모두 담당</li>

                  <li className="p-1">EJS를 고수하던 회사의 기술 스택을 React 기반으로 개선</li>

                  <li className="p-1">개발한 프로젝트가 내부 백오피스로 사용, 6개월간 속도 불만 0건 유지</li>
                </ul>
              </PopoverContent>
            </Popover>
          </section>
        </div>
      </div>
    </>
  );
}
