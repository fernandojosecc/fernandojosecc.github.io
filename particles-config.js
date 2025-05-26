
tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    fpsLimit: 30,
    background: { color: "#FFFFFF" },
    particles: {
      number: {
        value: 6,
        density: { enable: true, area: 800 }
      },
      color: {
        value: ["#FFFFFF", "#FAE5D1"],
        animation: {
          enable: true,
          speed: 20,
          sync: false
        }
      },
      shape: { type: "triangle" },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false
        }
      },
      
      size: {
        value: { min: 200, max: 700 },
        animation: { enable: true, speed: 5, sync: false }
      },
      rotate: {
        value: 0,
        direction: "random",
        animation: { enable: true, speed: 5, sync: false }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "random",
        random: false,
        straight: false,
        outModes: { default: "none" },
        trail: {
          enable: true,
          length: 100,
          delay: 0.1
        },
        gravity: { enable: false },
        vibrate: false,
        spin: { enable: true }
      },
      links: {
        enable: true,
        distance: 100,
        opacity: 0.2
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: false },
        onClick: { enable: false }
      },
      modes: {
        connect: {
          distance: 100,
          radius: 50,
          links: { opacity: 0.2 }
        },
        grab: {
          distance: 100,
          links: { opacity: 0.2 }
        },
        bubble: {
          distance: 100,
          size: 40,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 1.2
        },
        push: { quantity: 4 },
        remove: { quantity: 4 },
        trail: { delay: 0.1, quantity: 10 }
      }
    }
  });
  