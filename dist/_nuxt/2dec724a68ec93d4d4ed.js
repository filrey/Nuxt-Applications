;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    354: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = {
          name: '',
          data: function() {
            return {}
          },
          created: function() {}
        },
        l = n(30),
        c = n(37),
        o = n.n(c),
        m = n(310),
        d = n(313),
        v = n(304),
        f = n(306),
        h = n(349),
        w = n(305),
        V = n(344),
        _ = n(350),
        component = Object(l.a)(
          r,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'div',
              [
                e(
                  'v-container',
                  { attrs: { fluid: '', 'fill-height': '' } },
                  [
                    e(
                      'v-row',
                      { attrs: { align: 'center', justify: 'center' } },
                      [
                        e(
                          'v-col',
                          { attrs: { cols: '12', sm: '8', md: '6' } },
                          [
                            e(
                              'v-card',
                              [
                                e(
                                  'v-form',
                                  {
                                    staticClass: 'ma-3',
                                    attrs: {
                                      name: 'contact',
                                      method: 'POST',
                                      'data-netlify': 'true'
                                    }
                                  },
                                  [
                                    e('input', {
                                      attrs: {
                                        type: 'hidden',
                                        name: 'contact',
                                        value: 'MYFORM'
                                      }
                                    }),
                                    this._v(' '),
                                    e('v-text-field', {
                                      attrs: {
                                        label: 'Name',
                                        type: 'text',
                                        name: 'name'
                                      }
                                    }),
                                    this._v(' '),
                                    e('v-text-field', {
                                      attrs: {
                                        label: 'Email',
                                        type: 'email',
                                        name: 'email'
                                      }
                                    }),
                                    this._v(' '),
                                    e('v-textarea', {
                                      attrs: {
                                        label: 'Message',
                                        name: 'message'
                                      }
                                    }),
                                    this._v(' '),
                                    e('div', {
                                      staticClass: 'mb-3',
                                      attrs: {
                                        'data-netlify-recaptcha': 'true'
                                      }
                                    }),
                                    this._v(' '),
                                    e(
                                      'v-btn',
                                      {
                                        staticClass: 'mb-3',
                                        attrs: {
                                          color: '#01ADB5',
                                          type: 'submit'
                                        }
                                      },
                                      [this._v('Send')]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
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
      o()(component, {
        VBtn: m.a,
        VCard: d.a,
        VCol: v.a,
        VContainer: f.a,
        VForm: h.a,
        VRow: w.a,
        VTextField: V.a,
        VTextarea: _.a
      })
    }
  }
])
