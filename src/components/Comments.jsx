import Giscus from "@giscus/react";

/**
 * Fill these in from https://giscus.app after enabling Discussions on the
 * repo and installing the giscus GitHub App. repoId/categoryId are not
 * secret, they're meant to be public in the embedded script.
 */
const GISCUS_CONFIG = {
  repo: "muhammadmahad4/cursortest",
  repoId: "R_kgDOTG7s0Q",
  category: "Comments",
  categoryId: "DIC_kwDOTG7s0c4DBg40",
};

export default function Comments({ term }) {
  return (
    <Giscus
      id="comments"
      repo={GISCUS_CONFIG.repo}
      repoId={GISCUS_CONFIG.repoId}
      category={GISCUS_CONFIG.category}
      categoryId={GISCUS_CONFIG.categoryId}
      mapping="specific"
      term={term}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
