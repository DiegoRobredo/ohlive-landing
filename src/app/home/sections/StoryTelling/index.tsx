"use client";

import SectionContainer from "@/app/components/SectionContainer";
import { $$ } from "@/app/lib/dom-selector";
import { useEffect } from "react";
import { articles } from "@/app/consts/articles";
import "./styles.css";

export default function StoryTelling() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("story-content-visible");
          } else {
            entry.target.classList.remove("story-content-visible");
          }
        });
      },
      { rootMargin: "-30% 0px" }
    );

    const $articles = $$(".story-container .story-content");

    if (!$articles) return;

    $articles.forEach((article) => {
      observer.observe(article);
    });
  }, []);

  return (
    <SectionContainer sectionId="about">
      <h2 className="text-3xl text-secondary">
        Vende más mostrando cómo quedarían tus muebles en casa
      </h2>
      <div className="flex flex-col items-center justify-center gap-y-10 mt-6 story-container">
        {/* <SVGDraw /> */}
        {articles.map(({ id, title, content }) => (
          <article key={id} className="story-content">
            <h3 className="text-2xl text-secondary">{title}</h3>
            {content.map((text) => (
              <p key={text} className="text-md text-secondary mt-1">
                {text}
              </p>
            ))}
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
