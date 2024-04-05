import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            In my journey through the realms of web development, I wield an
            array of powerful tools and languages, with JavaScript as the
            cornerstone of my craft. With expertise in frameworks like React.js,
            Next.js, Vue.js, and Nuxt.js, I weave intricate spells to craft
            seamless portals, connecting users across the vast digital
            landscape. Guided by the principles of the Jamstack, I channel
            energies to create experiences that are not only fast and secure but
            also dynamically engaging. With mastery over HTML, CSS, Sass, Less,
            JavaScript, TypeScript, and a multitude of modern technologies,
            I&apos;ve developed over 10 projects that showcase my skills and
            creativity. Every creation I produce is not just functional but
            visually captivating, as I leverage my design expertise to bring
            immersive digital experiences to life. Join me as I continue to
            explore new spells and technologies, shaping the very fabric of the
            web&apos;s future.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=shoha-coder&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Shoha_Coder"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=shoha-coder&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Shoha_Coder"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,babel,bootstrap,css,figma,firebase,git,github,html,js,linux,mongodb,netlify,nextjs,npm,react,redux,sass,supabase,tailwind,vercel,vite,vscode,yarn,nuxt,vue,webstorm`}
            alt="Shoha_Coder"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=shoha-coder&theme=dark&hide_border=true&background=EB54500B&border=FEFE5BDB"
            alt="Shoha_Coder"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
