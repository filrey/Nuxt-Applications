;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    319: function(t, o, e) {
      var content = e(340)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(11).default)('1df579f2', content, !0, { sourceMap: !1 })
    },
    334: function(t, o, e) {
      t.exports = e.p + 'img/947f826.JPG'
    },
    335: function(t, o, e) {
      t.exports = e.p + 'img/6be8921.JPG'
    },
    336: function(t, o, e) {
      t.exports = e.p + 'img/c081363.JPG'
    },
    337: function(t, o, e) {
      t.exports = e.p + 'img/504ce31.JPG'
    },
    338: function(t, o, e) {
      t.exports = e.p + 'img/e3d3b64.png'
    },
    339: function(t, o, e) {
      'use strict'
      var n = e(319)
      e.n(n).a
    },
    340: function(t, o, e) {
      ;(t.exports = e(10)(!1)).push([
        t.i,
        '@media only screen and (min-width:768px){.width-80{width:80%}}',
        ''
      ])
    },
    353: function(t, o, e) {
      'use strict'
      e.r(o)
      var n = e(1),
        r = {
          components: {},
          name: 'Projects',
          data: function() {
            var t
            return {
              cards: [
                {
                  title: '24HrPaintingServices Business Site',
                  src: e(334),
                  code:
                    'https://github.com/filrey/Nuxt-Applications/tree/24hrpainting',
                  live: 'https://24hrpaintingservices.com/',
                  lg: 6,
                  sm: 12
                },
                {
                  title: 'CSUN Scholarship (HELIX)',
                  src: e(335),
                  live: 'https://www.csun.edu/faculty/scholarship',
                  lg: 6,
                  sm: 12
                },
                {
                  title: 'Instant Insanity Solver',
                  src: e(336),
                  code: 'https://github.com/filrey/InstantInsanitySolver',
                  live: 'https://filrey-instant-insanity.netlify.com',
                  lg: 6,
                  sm: 12
                },
                {
                  title: 'Unity Tetris',
                  src: e(337),
                  code: 'https://github.com/filrey/Tetris-Unity',
                  live: 'https://filrey-unity-tetris.netlify.com/',
                  lg: 6,
                  sm: 12
                },
                ((t = {
                  title: 'Fictional Octopath Succotash (FOS)',
                  src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
                }),
                Object(n.a)(t, 'src', e(338)),
                Object(n.a)(
                  t,
                  'code',
                  'https://github.com/filrey/fictional-octo-succotash'
                ),
                Object(n.a)(t, 'live', 'https://filrey-fos.netlify.com'),
                Object(n.a)(t, 'lg', 6),
                Object(n.a)(t, 'sm', 12),
                t)
              ],
              overlay: !1
            }
          }
        },
        c = (e(339), e(30)),
        l = e(37),
        v = e.n(l),
        f = e(310),
        d = e(313),
        h = e(312),
        m = e(304),
        y = e(306),
        _ = e(178),
        w = e(125),
        k = e(305),
        x = e(352),
        component = Object(c.a)(
          r,
          function() {
            var t = this,
              o = t.$createElement,
              e = t._self._c || o
            return e(
              'div',
              [
                e(
                  'v-container',
                  { staticClass: 'pa-3 width-80', attrs: { fluid: '' } },
                  [
                    e(
                      'v-row',
                      { attrs: { align: 'center', justify: 'center' } },
                      t._l(t.cards, function(o) {
                        return e(
                          'v-col',
                          {
                            key: o.title,
                            attrs: { cols: o.flex, lg: 4, sm: 6, xs: 12 }
                          },
                          [
                            e(
                              'v-card',
                              [
                                e(
                                  'v-img',
                                  {
                                    staticClass: 'white--text',
                                    attrs: {
                                      src: o.src,
                                      height: '200px',
                                      gradient:
                                        'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
                                    }
                                  },
                                  [
                                    e('v-card-title', {
                                      staticClass: 'fill-height align-end',
                                      domProps: { textContent: t._s(o.title) }
                                    })
                                  ],
                                  1
                                ),
                                t._v(' '),
                                e(
                                  'v-card-actions',
                                  [
                                    e('div', { staticClass: 'flex-grow-1' }),
                                    t._v(' '),
                                    o.code
                                      ? e(
                                          'v-tooltip',
                                          {
                                            attrs: { top: '' },
                                            scopedSlots: t._u(
                                              [
                                                {
                                                  key: 'activator',
                                                  fn: function(n) {
                                                    var r = n.on
                                                    return [
                                                      e(
                                                        'v-btn',
                                                        t._g(
                                                          {
                                                            attrs: {
                                                              dark: '',
                                                              icon: '',
                                                              href: o.code,
                                                              target: 'blank'
                                                            }
                                                          },
                                                          r
                                                        ),
                                                        [
                                                          e(
                                                            'font-awesome-icon',
                                                            {
                                                              attrs: {
                                                                icon: [
                                                                  'fas',
                                                                  'laptop-code'
                                                                ],
                                                                size: 'lg'
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              !0
                                            )
                                          },
                                          [
                                            t._v(' '),
                                            e('span', [t._v('Source Code')])
                                          ]
                                        )
                                      : e(
                                          'v-tooltip',
                                          {
                                            attrs: { top: '' },
                                            scopedSlots: t._u(
                                              [
                                                {
                                                  key: 'activator',
                                                  fn: function(o) {
                                                    var n = o.on
                                                    return [
                                                      e(
                                                        'v-btn',
                                                        t._g(
                                                          {
                                                            attrs: {
                                                              dark: '',
                                                              icon: ''
                                                            },
                                                            on: {
                                                              click: function(
                                                                o
                                                              ) {
                                                                t.overlay = !t.overlay
                                                              }
                                                            }
                                                          },
                                                          n
                                                        ),
                                                        [
                                                          e(
                                                            'font-awesome-icon',
                                                            {
                                                              attrs: {
                                                                icon: [
                                                                  'fas',
                                                                  'laptop-code'
                                                                ],
                                                                size: 'lg'
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              !0
                                            )
                                          },
                                          [
                                            t._v(' '),
                                            e('span', [t._v('Source Code')])
                                          ]
                                        ),
                                    t._v(' '),
                                    o.live
                                      ? e(
                                          'v-tooltip',
                                          {
                                            attrs: { top: '' },
                                            scopedSlots: t._u(
                                              [
                                                {
                                                  key: 'activator',
                                                  fn: function(n) {
                                                    var r = n.on
                                                    return [
                                                      e(
                                                        'v-btn',
                                                        t._g(
                                                          {
                                                            attrs: {
                                                              dark: '',
                                                              icon: '',
                                                              href: o.live,
                                                              target: 'blank'
                                                            }
                                                          },
                                                          r
                                                        ),
                                                        [
                                                          e(
                                                            'font-awesome-icon',
                                                            {
                                                              attrs: {
                                                                icon: [
                                                                  'fa',
                                                                  'globe'
                                                                ],
                                                                size: 'lg'
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              !0
                                            )
                                          },
                                          [t._v(' '), e('span', [t._v('Live')])]
                                        )
                                      : e(
                                          'v-tooltip',
                                          {
                                            attrs: { top: '' },
                                            scopedSlots: t._u(
                                              [
                                                {
                                                  key: 'activator',
                                                  fn: function(o) {
                                                    var n = o.on
                                                    return [
                                                      e(
                                                        'v-btn',
                                                        t._g(
                                                          {
                                                            attrs: {
                                                              dark: '',
                                                              icon: ''
                                                            },
                                                            on: {
                                                              click: function(
                                                                o
                                                              ) {
                                                                t.overlay = !t.overlay
                                                              }
                                                            }
                                                          },
                                                          n
                                                        ),
                                                        [
                                                          e(
                                                            'font-awesome-icon',
                                                            {
                                                              attrs: {
                                                                icon: [
                                                                  'fa',
                                                                  'globe'
                                                                ],
                                                                size: 'lg'
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              !0
                                            )
                                          },
                                          [t._v(' '), e('span', [t._v('Live')])]
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
                      }),
                      1
                    ),
                    t._v(' '),
                    e(
                      'div',
                      {
                        on: {
                          click: function(o) {
                            t.overlay = !t.overlay
                          }
                        }
                      },
                      [
                        e(
                          'v-overlay',
                          { attrs: { value: t.overlay } },
                          [
                            e(
                              'v-btn',
                              {
                                staticClass: 'mt-12',
                                attrs: { color: 'primary' }
                              },
                              [
                                t._v(
                                  '\n          Coming Soon or Private Repo\n        '
                                )
                              ]
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
      o.default = component.exports
      v()(component, {
        VBtn: f.a,
        VCard: d.a,
        VCardActions: h.a,
        VCardTitle: h.c,
        VCol: m.a,
        VContainer: y.a,
        VImg: _.a,
        VOverlay: w.a,
        VRow: k.a,
        VTooltip: x.a
      })
    }
  }
])
