// 위로가기 버튼
'use client';
import { AiOutlineArrowUp } from 'react-icons/ai';
export default function Top() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-6 bg-white rounded-full text-2xl p-2 cursor-pointer">
      <AiOutlineArrowUp onClick={scrollTop} />
    </div>
  );
}
