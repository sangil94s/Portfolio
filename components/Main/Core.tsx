import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { RiNotionFill } from 'react-icons/ri';

// 간단하게 핵심역량 소개 부분

export default function Core() {
  return (
    <>
      <div className="bg-black w-full h-max lg:w-[1920px]">
        <h4 className="text-gray-300 text-center text-xl font-bold p-4">핵심 성과</h4>
        <p className="text-white text-center font-bold py-2">회사 재직 시 성과 중 강조할 만한 성과입니다.</p>

        <section className="my-6 w-full grid grid-rows-1 place-items-center max-w-screen-md m-auto gap-2 lg:grid-cols-3 lg:gap-8">
          <div className="w-5/6">
            <Image
              src={'/skill/react.png'}
              width={200}
              height={200}
              alt="React"
              className="m-auto border border-slate-300 rounded-xl"
            />
            <p className="text-white text-xl text-center font-bold p-2">기술 전환 주도</p>
            <p className="text-white text-center text-xs font-bold p-2">입사 후 EJS → React 전환 주도</p>
            <Link
              aria-label="입사 후 EJS에서 React전환기 로 가는 노션 링크"
              target="_blank"
              href="https://precious-hyssop-b3b.notion.site/EJS-React-1be50042c1708059bf84fa78ad718e57?pvs=4"
            >
              <Button variant="secondary" className="w-full m-1 font-bold cursor-pointer">
                <RiNotionFill />
                자세히 보기
              </Button>
            </Link>
          </div>

          <div className="w-5/6">
            <Image
              src={'/data/doc.png'}
              width={200}
              height={200}
              alt="Doc"
              className="m-auto border border-slate-300 rounded-xl"
            />
            <p className="text-white text-xl text-center font-bold p-1">API 문서화 도입</p>
            <p className="text-white text-xs text-center font-bold p-2">문서화 없던 개발팀에 도입</p>
            <Link
              aria-label="회사에 API 문서화 도입기 노션 링크"
              target="_blank"
              href="https://precious-hyssop-b3b.notion.site/API-1be50042c1708091ae92f3df74ffe7cd?pvs=4"
            >
              <Button variant="secondary" className="w-full m-1 font-bold cursor-pointer">
                <RiNotionFill /> 자세히 보기
              </Button>
            </Link>
          </div>

          <div className="w-5/6">
            <Image
              src={'/data/gear.png'}
              width={200}
              height={200}
              alt="React"
              className="m-auto border border-slate-300 rounded-xl"
            />
            <p className="text-white text-xl text-center font-bold p-1">프로젝트 성능 개선</p>
            <p className="text-white text-center text-xs font-bold p-2">레거시의 단점을 신규 프로젝트에 개선</p>

            <Link
              aria-label="신규 프로젝트에서 성능 개선기 로 가는 노션 링크"
              target="_blank"
              href="https://precious-hyssop-b3b.notion.site/React-1be50042c1708056bc1ce79bc6d2166c?pvs=4"
            >
              <Button variant="secondary" className="w-full m-1 font-bold cursor-pointer">
                <RiNotionFill /> 자세히 보기
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
