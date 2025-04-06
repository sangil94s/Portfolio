import Image from 'next/image';
import { Motions } from '../Etc/motion';

// 스킬을 소개하는 부분

export default function Skill() {
  return (
    <>
      <div className="bg-black w-full h-screen lg:w-[1920px] lg:h-[700px]" id="skills">
        <section className="flex items-center justify-center m-auto w-6/12">
          <hr className="flex-grow border-gray-300" />
          <h4 className="text-gray-300 text-center text-xl font-bold p-4">사용가능한 스킬</h4>
          <hr className="flex-grow border-gray-300" />
        </section>
        <Motions delay={0.4}>
          <div className="flex justify-center items-center lg:h-[700px]">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8 place-items-center max-w-screen-md m-auto">
              <div className="relative group">
                <Image
                  src={'/skill/Next.png'}
                  width={80}
                  height={80}
                  alt="Next-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next.js
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/react.png'}
                  width={80}
                  height={80}
                  alt="react-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/ts.png'}
                  width={80}
                  height={80}
                  alt="ts-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Typescript
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/tailwindcss.png'}
                  width={80}
                  height={80}
                  alt="Tailwind-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TailwindCSS
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/react-query.png'}
                  width={80}
                  height={80}
                  alt="React-Query-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white z-20 text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React-Query
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/react-hook-form.png'}
                  width={80}
                  height={80}
                  alt="React-Hook-form-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white z-20 text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React-Hook-Form
                </p>
              </div>

              <div className="relative group">
                <Image
                  src={'/skill/vite.png'}
                  width={80}
                  height={80}
                  alt="Vite-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Vite
                </p>
              </div>

              <div className="relative group">
                <Image
                  src={'/skill/zustand.png'}
                  width={80}
                  height={80}
                  alt="Zustand-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Zustand
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/express.png'}
                  width={80}
                  height={80}
                  alt="Express-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Express.js
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/mysql.png'}
                  width={80}
                  height={80}
                  alt="MySQL-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  MySQL
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/Prisma.png'}
                  width={80}
                  height={80}
                  alt="Prisma-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Prisma
                </p>
              </div>
              <div className="relative group">
                <Image
                  src={'/skill/gcp.png'}
                  width={80}
                  height={80}
                  alt="GCP-logo"
                  className="bg-white rounded-xl my-1"
                />
                <p className="bg-white text-sm text-center font-bold rounded-xl w-max p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Google Cloud Platform
                </p>
              </div>
            </div>
          </div>
        </Motions>
      </div>
    </>
  );
}
