import Image from 'next/image';

// 스킬을 소개하는 부분

export default function Skill() {
  return (
    <>
      <div className="bg-black w-full h-max lg:w-[1920px]">
        <section className="w-6/12 m-auto py-4">
          <h4 className="text-white text-center text-xl font-bold py-4">FrontEnd</h4>
          <div className="flex flex-row justify-center items-center gap-2">
            <Image src={'/skill/Next.png'} width={100} height={100} alt="Next-logo" className="bg-white rounded-xl" />
            <Image src={'/skill/react.png'} width={100} height={100} alt="react-logo" className="bg-white rounded-xl" />
            <Image src={'/skill/ts.png'} width={100} height={100} alt="ts-logo" className="bg-white rounded-xl" />
            <Image
              src={'/skill/tailwindcss.png'}
              width={100}
              height={100}
              alt="Tailwind-logo"
              className="bg-white rounded-xl"
            />
            <Image src={'/skill/vite.png'} width={100} height={100} alt="Vite-logo" className="bg-white rounded-xl" />
            <Image
              src={'/skill/zustand.png'}
              width={100}
              height={100}
              alt="Zustand-logo"
              className="bg-white rounded-xl"
            />
          </div>
        </section>

        <section className="w-6/12 m-auto py-4 my-2">
          <h4 className="text-white text-center text-xl font-bold py-4">BackEnd</h4>
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src={'/skill/express.png'}
              width={100}
              height={100}
              alt="Express-logo"
              className="bg-white rounded-xl"
            />
            <Image src={'/skill/mysql.png'} width={100} height={100} alt="MySQL-logo" className="bg-white rounded-xl" />
            <Image
              src={'/skill/prisma.png'}
              width={100}
              height={100}
              alt="Prisma-logo"
              className="bg-white rounded-xl"
            />
          </div>
        </section>
      </div>
    </>
  );
}
