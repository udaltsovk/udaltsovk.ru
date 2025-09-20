<script>
  import { flavors } from "@catppuccin/palette";
  import { onDestroy } from "svelte";

  const { name, description, logo = name, glow_color } = $props();

  let card;
  let glow;
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${leftX}px
        ${topY}px,
        ${glow_color},
        ${flavors.mocha.colors.crust.hex}
      )
    `;
  }

  function handleMouseEnter() {
    if (!document.body.classList.contains("hasHover")) {
      return;
    }

    bounds = card.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  }

  function handleMouseLeave() {
    if (!document.body.classList.contains("hasHover")) {
      return;
    }

    document.removeEventListener("mousemove", rotateToMouse);
    card.style.transform = "";
    glow.style.backgroundImage = "";
  }

  onDestroy(() => {
    document.removeEventListener("mousemove", rotateToMouse);
  });
</script>

<article
  class="card"
  bind:this={card}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
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
  <div class="glow" bind:this={glow}></div>
</article>

<style>
  .card {
    padding: 1rem;
    background-color: var(--ctp-mocha-surface0);
    position: relative;
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);
    background-size: auto 4rem;
    background-position: top 0.5rem right 0.5rem;
    background-repeat: no-repeat;
  }

  body.hasHover .card:hover {
    transition-duration: 150ms;
    box-shadow: 0 0.25rem 1.25rem 0.25rem var(--ctp-mocha-crust);
    z-index: 10;
  }

  .info {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: radial-gradient(
      circle at 150% -50%,
      var(--glow-color, --ctp-mocha-blue),
      var(--ctp-mocha-crust)
    );
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }
</style>
