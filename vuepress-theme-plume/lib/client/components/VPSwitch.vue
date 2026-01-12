<template>
  <!-- eslint-disable-next-line vue-a11y/role-has-required-aria-props -->
  <button class="vp-switch" type="button" role="switch">
    <span class="check">
      <span v-if="$slots.default" class="icon">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
.vp-switch {
  position: relative;
  display: block;
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  background-color: var(--vp-input-switch-bg-color);
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
}

.vp-switch:hover {
  background-color: var(--vp-input-switch-bg-color);
}

.vp-switch:focus-visible {
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.check {
  position: absolute;
  top: 2px;

  /* rtl:ignore */
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: var(--vp-c-neutral-inverse);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 50%;
}

.icon :deep([class^="vpi-"]) {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  color: var(--vp-c-text-2);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .icon :deep([class^="vpi-"]) {
  color: var(--vp-c-text-1);
  transition: opacity 0.25s !important;
}
</style>
