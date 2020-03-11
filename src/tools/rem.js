function Rem () {
  // 拿到当前的html元素的宽度 
  let width = document.documentElement.clientWidth;
  let fontSize = width / 10 ;
  document.documentElement.style = `font-size:${fontSize}px`
}

Rem();