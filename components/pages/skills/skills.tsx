'use client';

import { useTheme } from 'next-themes';

import Skill from './skill';

type Props = {};

export default function Skills({}: Props) {
  const { theme } = useTheme();

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {/* flask */}
        {theme === 'light' ? (
          <Skill iconName={'flask'} color={'#000000'} proficiency={'90%'} />
        ) : (
          <Skill iconName={'flask'} color={'#FFFFFF'} proficiency={'90%'} />
        )}

        {/* Django */}
        <Skill iconName={'django'} color={'#092E20'} proficiency={'90%'} />

        {/* tensorflow */}
        <Skill iconName={'tensorflow'} color={'#FFD54F'} proficiency={'70%'} />

        {/* pytorch */}
        <Skill iconName={'pytorch'} color={'#EE4C2C'} proficiency={'70%'} />

        {/* numpy */}
        <Skill iconName={'numpy'} color={'#013243'} proficiency={'70%'} />

        {/* pandas */}
        <Skill iconName={'pandas'} color={'#150458'} proficiency={'70%'} />

        {/* linux */}
        <Skill iconName={'linux'} color={''} proficiency={'90%'} />

        {/* opengl */}
        {theme === 'light' ? (
          <Skill iconName={'opengl'} color={'#000000'} proficiency={'70%'} />
        ) : (
          <Skill iconName={'opengl'} color={'#FFFFFF'} proficiency={'70%'} />
        )}

        {/* rasa */}
        <Skill iconName={'rasa'} color={'#6C3E99'} proficiency={'80%'} />

        {/* react */}
        <Skill iconName={'react'} color={'#61DAFB'} proficiency={'90%'} />

        {/* nextjs */}
        <Skill iconName={'nextjs'} color={'#333333'} proficiency={'80%'} />

        {/* nodejs */}
        <Skill iconName={'nodejs'} color={'#008000'} proficiency={'80%'} />

        {/* express */}
        <Skill iconName={'express'} color={'#90EE90'} proficiency={'70%'} />

        {/* mongodb */}
        <Skill iconName={'mongodb'} color={'#3FA037'} proficiency={'80%'} />

        {/* Postgresql */}
        <Skill iconName={'postgresql'} color={'#336791'} proficiency={'80%'} />

        {/* Redis */}
        <Skill iconName={'redis'} color={'#D82C20'} proficiency={'70%'} />

        {/* HTML */}
        <Skill iconName={'html'} color={'#E34F26'} proficiency={'90%'} />

        {/* tailwind */}
        <Skill iconName={'tailwind'} color={'#38B2AC'} proficiency={'60%'} />

        {/* git */}
        <Skill iconName={'git'} color={'#F05032'} proficiency={'90%'} />

        {/* docker */}
        <Skill iconName={'docker'} color={'#2496ED'} proficiency={'70%'} />
      </div>
    </div>
  );
}
