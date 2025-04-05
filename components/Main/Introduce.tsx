import Link from 'next/link';
// 아마도 첫 소개에 배치되는 부분
export default function Introduce() {
  return (
    <div className="flex flex-col justify-center items-center mt-2 w-full h-full lg:w-[1920px] lg:h-[270px]">
      <h1 className="p-4 text-white text-4xl text-center font-bold">주도적인 2년차 개발자 한상일입니다</h1>
      <p className="p-2 text-white text-xl text-center">React로 프론트엔드 개발을 주로 합니다.</p>
      <p className="p-2 text-white text-xl text-center">Express로 백엔드 개발도 가능합니다</p>
      <p className="p-2 text-white text-xl text-center">
        필요하다면 먼저 나서서 제안하거나 진행하는 주도적인 사람입니다.
      </p>
      <Link
        className="text-white p-2 font-bold"
        target="_blank"
        href="https://precious-hyssop-b3b.notion.site/2-1c850042c17080c8a979c087ba43d1f9?pvs=4"
      >
        이력서 보러가기
      </Link>
    </div>
  );
}
