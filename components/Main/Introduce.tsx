import Link from 'next/link';
import { Button } from '../ui/button';
import { RiNotionFill } from 'react-icons/ri';

// 아마도 첫 소개에 배치되는 부분
export default function Introduce() {
  return (
    <div className="flex flex-col justify-center items-center my-2 w-full h-full lg:w-[1920px] lg:h-[300px]">
      <h1 className="px-4 py-8 text-white text-xl lg:text-4xl text-center font-bold">
        기술 전환을 성공한 2년 차 개발자 한상일입니다
      </h1>
      <p className="p-1 text-white text-sm lg:text-base text-center">
        React로 프론트엔드 개발을 주로 하며 Express로 백엔드 개발도 합니다.
      </p>
      <p className="p-1 text-white text-sm lg:text-base text-center">API 문서화하자 등 먼저 주도적으로 제안합니다.</p>
      <p className="p-1 text-white text-sm lg:text-base text-center">
        레거시 프로젝트 (EJS)에서 신규 프로젝트 (React)로 개선을 성공했습니다.
      </p>
      <Link
        aria-label="이력서 보기"
        className="text-white p-2 font-bold"
        target="_blank"
        href="https://precious-hyssop-b3b.notion.site/REV5-_2-XXX-1-1d450042c17080718ce8c89220019741?pvs=4"
      >
        <Button variant="secondary" className="w-full m-1 font-bold cursor-pointer">
          <RiNotionFill /> 이력서 보러가기
        </Button>
      </Link>
    </div>
  );
}
