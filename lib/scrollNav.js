"use client";

/**
 * Scrolls smoothly to a section by id (no hash added to the URL).
 */
export function scrollToSection(
  id,
  options = { behavior: "smooth", block: "start" },
) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView(options);
}

/**
 * Click handler for nav / in-page links.
 * Prevents the default anchor navigation (which would try to load
 * a real route like /about and 404), updates the URL to a clean
 * path via History API, and smooth-scrolls to the section.
 */
export function navigateToSection(e, id) {
  if (e) e.preventDefault();
  const path = id === "home" ? "/" : `/${id}`;
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
  scrollToSection(id);
}

/**
 * On initial load (or hard refresh), scroll to whichever section
 * matches the current clean URL path, e.g. /about -> #about section.
 */
export function scrollToPathOnLoad() {
  const path = window.location.pathname.replace(/^\/+/, "");
  const id = path === "" ? "home" : path;
  requestAnimationFrame(() => {
    setTimeout(
      () => scrollToSection(id, { behavior: "auto", block: "start" }),
      0,
    );
  });
}

/**
 * Keeps scroll position in sync with browser back/forward navigation.
 */
export function setupPopStateSync() {
  const handler = () => scrollToPathOnLoad();
  window.addEventListener("popstate", handler);
  return () => window.removeEventListener("popstate", handler);
}

/**
 * Called continuously while scrolling with whichever section id is
 * currently in view. Uses replaceState (not pushState) so scrolling
 * updates the URL bar without creating a new history entry for every
 * section — the back button still behaves normally.
 */
export function syncUrlForSection(id) {
  if (!id) return;
  const path = id === "home" ? "/" : `/${id}`;
  if (window.location.pathname !== path) {
    window.history.replaceState(null, "", path);
  }
}
