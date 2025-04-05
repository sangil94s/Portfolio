import Career from '@/components/Main/Career';
import Contact from '@/components/Main/Contact';
import Core from '@/components/Main/Core';
import Introduce from '@/components/Main/Introduce';
import Skill from '@/components/Main/Skill';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Introduce />
      <Core />
      <Skill />
      <Career />
      <Contact />
    </div>
  );
}
