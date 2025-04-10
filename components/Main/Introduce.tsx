import Link from 'next/link';
import { Button } from '../ui/button';
import { RiNotionFill } from 'react-icons/ri';

// 아마도 첫 소개에 배치되는 부분
export default function Introduce() {
  return (
    <div className="flex flex-col justify-center items-center my-2 w-full h-full lg:w-[1920px] lg:h-[300px]">
      <h1 className="px-4 py-8 text-white text-xl lg:text-4xl text-center font-bold">
        주도적인 2년차 개발자 한상일입니다
      </h1>
      <p className="p-1 text-white text-sm lg:text-base text-center">React로 프론트엔드 개발을 주로 합니다.</p>
      <p className="p-1 text-white text-sm lg:text-base text-center">
        먼저 나서서 제안하거나 진행하는 주도적인 사람입니다.
      </p>
      <Link
        aria-label="이력서 보기"
        className="text-white p-2 font-bold"
        target="_blank"
        href="https://precious-hyssop-b3b.notion.site/2-1c850042c17080c8a979c087ba43d1f9?pvs=4"
      >
        <Button variant="secondary" className="w-full m-1 font-bold">
          <RiNotionFill /> 이력서 보러가기
        </Button>
      </Link>
    </div>
  );
}
