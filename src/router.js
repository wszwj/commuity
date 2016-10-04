import $ from 'zepto'

export default function (router) {
  router.map({
    // '*': {
    //   component (resolve) {
    //     require(['./views/welcome'], resolve)
    //   }
    // },
    '/': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/regist': {
      component (resolve) {
        require(['./views/regist'], resolve)
      }
    },
    '/login': {
      component (resolve) {
        require(['./views/login'], resolve)
      }
    },
    '/initial': {
      component (resolve) {
        require(['./views/initial'], resolve)
      }
    },

    '/home': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/list': {
      component (resolve) {
        require(['./views/list'], resolve)
      }
    },
    '/rank': {
      component (resolve) {
        require(['./views/rank'], resolve)
      }
    },
    '/user': {
      component (resolve) {
        require(['./views/user'], resolve)
      }
    },
    '/about': {
      component (resolve) {
        require(['./views/about'], resolve)
      }
    },
    '/follow': {
      component (resolve) {
        require(['./views/follow'], resolve)
      }
    },
    '/collect': {
      component (resolve) {
        require(['./views/collect'], resolve)
      }
    },
    '/say': {
      component (resolve) {
        require(['./views/say'], resolve)
      }
    },
    '/answer': {
      component (resolve) {
        require(['./views/answer'], resolve)
      }
    },
    '/active': {
      component (resolve) {
        require(['./views/active'], resolve)
      }
    },
    '/other': {
      component (resolve) {
        require(['./views/other'], resolve)
      }
    },
    '/search': {
      component (resolve) {
        require(['./views/search'], resolve)
      }
    },
    '/setup': {
      component (resolve) {
        require(['./views/setup'], resolve)
      }
    },
    '/add': {
      component (resolve) {
        require(['./views/add'], resolve)
      }
    },
    '/message': {
      component (resolve) {
        require(['./views/message'], resolve)
      }
    },
    '/gamehome': {
      component (resolve) {
        require(['./views/gamehome'], resolve)
      }
    },
    '/ask': {
      component (resolve) {
        require(['./views/ask'], resolve)
      }
    },
    '/blacklist': {
      component (resolve) {
        require(['./views/blacklist'], resolve)
      }
    },
    '/test': {
      component (resolve) {
        require(['./views/test'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log(`to: ${toPath} from: ${fromPath}`)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
      router.app.isIndex = depath ? 0 : 1
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
  })
}
