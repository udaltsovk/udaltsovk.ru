<script lang="ts">
  import { onDestroy } from "svelte";

  interface TechnologyProps {
    name: string;
    description?: string;
    logo?: string;
    glow_color: string;
  }

  const {
    name,
    description,
    logo = name,
    glow_color,
  }: TechnologyProps = $props();

  let card: HTMLElement | undefined;

  const maxRotation = 8;

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function canUseFlashlight(event: PointerEvent) {
    if (event.pointerType !== "mouse") {
      return false;
    }

    return document.body.classList.contains("hasHover");
  }

  function updateFlashlight(event: PointerEvent) {
    if (!card || !canUseFlashlight(event)) {
      return;
    }

    const bounds = card.getBoundingClientRect();
    const leftX = clamp(event.clientX - bounds.left, 0, bounds.width);
    const topY = clamp(event.clientY - bounds.top, 0, bounds.height);
    const centerX = leftX - bounds.width / 2;
    const centerY = topY - bounds.height / 2;
    const rotateX = (-centerY / bounds.height) * maxRotation;
    const rotateY = (centerX / bounds.width) * maxRotation;

    card.style.setProperty("--glow-x", `${leftX}px`);
    card.style.setProperty("--glow-y", `${topY}px`);
    card.style.transform = `
      perspective(48rem)
      scale3d(1.07, 1.07, 1.07)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  function resetFlashlight() {
    if (!card) {
      return;
    }

    card.style.transform = "";
    card.style.removeProperty("--glow-x");
    card.style.removeProperty("--glow-y");
  }

  onDestroy(() => {
    resetFlashlight();
  });
</script>

<article
  class="card"
  bind:this={card}
  onpointerenter={updateFlashlight}
  onpointermove={updateFlashlight}
  onpointerleave={resetFlashlight}
  onpointercancel={resetFlashlight}
  style="--glow-color: {glow_color}"
>
  <div class="info">
    <div class="hero">
      <h4>{name}</h4>
      <img alt="{name} logo" src="/logos/{logo}.webp" height="48" />
    </div>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
  <div class="glow"></div>
</article>

<style lang="less">
  @import (reference) "../../../shared/styles/tokens.less";

  @card-logo-size: 4rem;

  .card {
    padding: @space-md;
    background-color: @color-surface;
    position: relative;
    transition-duration: @duration-card;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: none;
    transform-style: preserve-3d;
    background-size: auto @card-logo-size;
    background-position: top 0.5rem right 0.5rem;
    background-repeat: no-repeat;
    overflow: hidden;
    isolation: isolate;

    :global(body.hasHover) &:hover {
      transition-duration: @duration-card-hover;
      box-shadow: 0 @space-xs @space-lg @space-xs @color-crust;
      z-index: @z-card-hover;
    }
  }

  .info {
    .flex-column();
    position: relative;
    z-index: @z-card-content;
  }

  .hero {
    .flex-between();
  }

  .glow {
    .absolute-fill();
    background-image: radial-gradient(
      circle at var(--glow-x, 150%) var(--glow-y, -50%),
      var(--glow-color, @color-blue),
      @color-crust
    );
    opacity: 0.5;
    pointer-events: none;
    z-index: @z-card-glow;
  }
</style>
