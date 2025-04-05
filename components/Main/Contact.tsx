// 깃헙 , 메일 등 연락처 부분
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

export default function Contact() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[240px]" id="contract">
        <section className="flex items-center justify-center m-auto w-6/12">
          <hr className="flex-grow border-gray-300" />
          <h1 className="p-4 text-gray-300 text-2xl text-center font-bold">연락처</h1>
          <hr className="flex-grow border-gray-300" />
        </section>

        <section className="flex flex-col justify-center items-center lg:h-[240px]">
          <p className="py-2 text-white text-sm lg:text-base text-center">아래를 통해 저를 더 확인할 수 있습니다.</p>

          <section className="flex flex-row justify-center items-center gap-6 my-4 text-white text-xl lg:text-4xl">
            <Link href="https://github.com/sangil94s">
              <AiFillGithub />
            </Link>
            <Link href="mailto:bsc5732@naver.com">
              <AiFillMail />
            </Link>
          </section>
        </section>
      </div>
    </>
  );
}
