var ranBlock = ['\u2580','\u2581','\u2582','\u2583','\u2584','\u2585','\u2586','\u2587','\u2588','\u2589','\u258A','\u258B','\u258C','\u258D','\u258E','\u258F','\u2590','\u2591','\u2592','\u2593','\u2594','\u2595','\u2596','\u2597','\u2598','\u2599','\u259A','\u259B','\u259C','\u259D','\u259E','\u259F']


loop1()
function loop1() {
  setTimeout(loop2, 500)
}
             
function loop2() {
  var comp = ''
  for (let i = 0; i < 20; i++) {
      comp=comp + ranBlock[Math.floor(Math.random() * ranBlock.length)]
    }
    document.getElementById("horse").innerHTML=comp
  setTimeout(loop1, 500)
}

/*var comp = ''
  for (let i = 0; i < 20; i++) {
      comp=comp + ranBlock[Math.floor(Math.random() * ranBlock.length)]
    }
    document.getElementById("horse").innerHTML=comp*/
