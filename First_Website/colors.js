function LinksSetColor(color) {
  var alist = document.querySelectorAll("a");
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
var Body = {
  SetColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color); //★★jQuery Library★★
  },
  SetBackgroundColor: function (color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.SetBackgroundColor("black");
    Body.SetColor("white");
    self.value = "day";

    LinksSetColor("powderblue");
  } else {
    Body.SetBackgroundColor("white");
    Body.SetColor("black");
    self.value = "night";

    LinksSetColor("blue");
  }
}
