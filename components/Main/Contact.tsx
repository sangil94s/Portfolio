// 깃헙 , 메일 등 연락처 부분
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { RiNotionFill } from 'react-icons/ri';

export default function Contact() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[270px]">
        <h1 className="py-4 text-white text-2xl text-center font-bold">연락처</h1>
        <p className="py-2 text-white text-base text-center">
          봐주셔서 감사드리며, 아래를 통해 저를 더 확인할 수 있습니다.
        </p>

        <section className="flex flex-row justify-center items-center gap-6 my-4 text-white text-xl lg:text-4xl">
          <Link href="https://github.com/sangil94s">
            <AiFillGithub />
          </Link>
          <Link href="mailto:bsc5732@naver.com">
            <AiFillMail />
          </Link>
          <Link href="https://precious-hyssop-b3b.notion.site/2-1c850042c17080c8a979c087ba43d1f9?pvs=4">
            <RiNotionFill />
          </Link>
        </section>
      </div>
    </>
  );
}
