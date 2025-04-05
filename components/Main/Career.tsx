import { RiNotionFill } from 'react-icons/ri';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { BsCardList } from 'react-icons/bs';
import Link from 'next/link';

// 경력 사항 소개 부분

export default function Career() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[270px]" id="career">
        <section className="flex items-center justify-center m-auto my-4 w-6/12">
          <hr className="flex-grow border-gray-300" />
          <h1 className="p-4 text-white text-2xl text-center font-bold">Career</h1>
          <hr className="flex-grow border-gray-300" />
        </section>

        <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 lg:flex-row">
          <section>
            <p className="text-white text-xl font-bold"> 2022.12 - 2025.03 </p>
          </section>
          <section className="p-2">
            <h4 className="text-white text-xl font-bold p-2">킴스인더스트리</h4>
            <p className="text-white text-xs font-bold p-2">연구개발부-소프트웨어 2팀</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-black font-bold cursor-pointer">
                  <BsCardList />
                  성과 간단히 보기
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full bg-gray-900">
                <ul className="list-disc m-1 p-2  text-white">
                  <li className="p-1">API 문서화 관심없던 조직에 문서화 도입</li>

                  <li className="p-1">EJS만 고집하던 조직에 React 도입 주도</li>

                  <li className="p-1">레거시 프로젝트의 문제점을 찾고 이후 프로젝트에 반영</li>

                  <li className="p-1">프로젝트가 내부 백오피스로 사용, 6개월간 속도 불만 0건 유지</li>
                  <h4 className="text-center font-bold py-4">관련 노션 링크: 각 아이콘을 클릭해주세요.</h4>
                  <section className="flex justify-around text-xl">
                    <Link
                      target="_blank"
                      href="https://precious-hyssop-b3b.notion.site/API-1be50042c1708091ae92f3df74ffe7cd?pvs=4"
                    >
                      <RiNotionFill />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://precious-hyssop-b3b.notion.site/React-1be50042c1708056bc1ce79bc6d2166c?pvs=4"
                    >
                      <RiNotionFill />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://precious-hyssop-b3b.notion.site/EJS-React-1be50042c1708059bf84fa78ad718e57?pvs=4"
                    >
                      <RiNotionFill />
                    </Link>
                  </section>
                </ul>
              </PopoverContent>
            </Popover>
          </section>
        </div>
      </div>
    </>
  );
}
