;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    333: function(t, e, l) {
      'use strict'
      l(179)
      var n = l(130)
      e.a = Object(n.a)('layout')
    },
    355: function(t, e, l) {
      'use strict'
      l.r(e)
      var n = l(30),
        o = l(37),
        c = l.n(o),
        r = (l(179), l(130)),
        h = Object(r.a)('flex'),
        v = l(333),
        component = Object(n.a)(
          {},
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'v-layout',
              [
                e('v-flex', { staticClass: 'text-center' }, [
                  e('img', {
                    staticClass: 'mb-5',
                    attrs: { src: '/v.png', alt: 'Vuetify.js' }
                  }),
                  this._v(' '),
                  e('blockquote', { staticClass: 'blockquote' }, [
                    this._v(
                      '\n      “First, solve the problem. Then, write the code.”\n      '
                    ),
                    e('footer', [
                      e('small', [e('em', [this._v('—John Johnson')])])
                    ])
                  ])
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = component.exports
      c()(component, { VFlex: h, VLayout: v.a })
    }
  }
])
