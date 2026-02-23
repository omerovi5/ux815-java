document.addEventListener("DOMContentLoaded", function () {

  const sr1 = ScrollReveal();
  sr1.reveal('#img1', {
    origin: 'left',
    distance: '100px',
    duration: 800,
    delay: 200
  });

  const sr2 = ScrollReveal();
  sr2.reveal('#img2', {
    origin: 'right',
    distance: '150px',
    duration: 1000,
    delay: 400,
    scale: 0.8
  });

  const sr3 = ScrollReveal();
  sr3.reveal('#img3', {
    origin: 'top',
    distance: '80px',
    duration: 600,
    rotate: { x: 20, y: 0, z: 0 }
  });

  const sr4 = ScrollReveal();
  sr4.reveal('#img4', {
    origin: 'bottom',
    distance: '120px',
    duration: 900,
    opacity: 0,
    easing: 'ease-in-out'
  });

  const sr5 = ScrollReveal();
  sr5.reveal('#img5', {
    distance: '0px',
    duration: 700,
    scale: 0.5,
    delay: 300,
    reset: true
  });

});