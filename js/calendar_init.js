function calendar_init() {
    var calendar = new CalendarUI("hello-akilar");
    calendar.message.add({
      delay: 800,
      content: "Hi, 欢迎来到Bramber&Calendar's Home🎉🎉🎉🎉🎉🎉"
    }).then(function() {
      calendar.message.add({
        delay: 1100,
        content: "我是这里的小主人Calendar~"
      }).then(function() {
        calendar.message.add({
          delay: 1100,
          content: "୧(๑•̀⌄•́๑)૭快来和我聊天吧！"
        }).then(function() {
          calendar.action.button({
            delay: 1100,
            action: [{
              text: "好呀好呀，我们来聊天吧！",
              value: "sure"
            }, {
              text: "我还是去找你妈妈吧。再见！",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        calendar.message.add({
          delay: 600,
          content: "o(*////▽////*)q 聊天功能正在完善中哦~"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        calendar.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！妈妈很忙的嘛！"
        })
      }
  }