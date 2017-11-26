$(document).ready(function() {
  $('#typing').typeIt({
   speed: 50,
   loop: true
  })
  .tiType("Happy Birthday Zach!")
  .tiPause(3500)
  .tiDelete(5)
  .tiPause(1000)
  .tiType("Kirby!")
  .tiPause(2400)
  .tiSettings({speed: 80})
  .tiDelete(6)
  .tiPause(1000)
  .tiType("The Kirb Man!")
  .tiPause(2900)
  .tiSettings({speed: 95})
  .tiDelete(13)
  .tiSettings({speed: 10})
  .tiType(". . . ")
  .tiPause(1500)
  .tiSettings({speed: 50})
  .tiDelete(6)
  .tiType("WDD Master!")
  .tiPause(3000)
  .tiDelete();
});
