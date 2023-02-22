export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LargeCard = () => import('../..\\components\\LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c))
export const LargeCardDisplay = () => import('../..\\components\\LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const SmallCard = () => import('../..\\components\\SmallCard.vue' /* webpackChunkName: "components/small-card" */).then(c => wrapFunctional(c.default || c))
export const SmallCardDisplay = () => import('../..\\components\\SmallCardDisplay.vue' /* webpackChunkName: "components/small-card-display" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
