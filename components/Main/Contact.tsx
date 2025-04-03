// 깃헙 , 메일 등 연락처 부분
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { RiNotionFill } from 'react-icons/ri';

export default function Contact() {
  return (
    <>
      <div className="bg-black w-full h-full lg:w-[1920px] lg:h-[270px]">
        <h1 className="py-4 text-white text-2xl text-center font-bold">연락처 소개 부분</h1>
        <p className="py-2 text-white text-xl text-center">대충 연락을 기다리고 있다는 포장글</p>

        <section className="flex flex-row justify-center items-center gap-6 my-4 text-white text-xl lg:text-4xl">
          <Link href="https://github.com/sangil94s">
            <AiFillGithub />
          </Link>
          <AiFillMail />
          <RiNotionFill />
        </section>
      </div>
    </>
  );
}
