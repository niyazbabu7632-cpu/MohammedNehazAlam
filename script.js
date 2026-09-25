document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;

  const preloader = document.getElementById("preloader");
  const themeToggle = document.getElementById("themeToggle");

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const scrollProgress =
    document.getElementById("scrollProgress");

  const backTop =
    document.getElementById("backTop");

  const serviceGrid =
    document.getElementById("serviceGrid");

  const serviceSearch =
    document.getElementById("serviceSearch");

  const serviceCount =
    document.getElementById("serviceCount");

  const copyEmail =
    document.getElementById("copyEmail");

  const contactForm =
    document.getElementById("contactForm");

  const toast =
    document.getElementById("toast");

  const year =
    document.getElementById("year");

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* =========================
     YEAR
  ========================= */

  year.textContent =
    new Date().getFullYear();


  /* =========================
     PRELOADER
  ========================= */

  window.addEventListener("load", () => {

    setTimeout(() => {

      preloader.classList.add("hide");

    }, 600);

  });


  /* =========================
     THEME
  ========================= */

  const savedTheme =
    localStorage.getItem("mna-theme");

  if (
    savedTheme === "dark" ||
    savedTheme === "light"
  ) {
    root.dataset.theme = savedTheme;
  }

  updateThemeIcon();


  themeToggle.addEventListener(
    "click",
    () => {

      const newTheme =
        root.dataset.theme === "dark"
          ? "light"
          : "dark";

      root.dataset.theme =
        newTheme;

      localStorage.setItem(
        "mna-theme",
        newTheme
      );

      updateThemeIcon();

    }
  );


  function updateThemeIcon() {

    themeToggle.textContent =
      root.dataset.theme === "dark"
        ? "☼"
        : "☾";

  }


  /* =========================
     MOBILE MENU
  ========================= */

  menuToggle.addEventListener(
    "click",
    () => {

      const opened =
        navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(opened)
      );

    }
  );


  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });


  /* =========================
     SCROLL PROGRESS
  ========================= */

  function handleScroll() {

    const top =
      window.scrollY;

    const max =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      max > 0
        ? (top / max) * 100
        : 0;

    scrollProgress.style.width =
      `${percentage}%`;


    backTop.classList.toggle(
      "show",
      top > 650
    );

  }

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  handleScroll();


  /* =========================
     BACK TO TOP
  ========================= */

  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


  /* =========================
     REVEAL ANIMATION
  ========================= */

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: .12
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      revealObserver.observe(
        element
      );

    });


  /* =========================
     ACTIVE NAV
  ========================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navItems =
    document.querySelectorAll(
      ".nav-link"
    );


  const sectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting)
            return;

          navItems.forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );

          const current =
            document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );

          if (current) {
            current.classList.add(
              "active"
            );
          }

        });

      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );


  sections.forEach(section => {

    sectionObserver.observe(
      section
    );

  });


  /* =========================
     SERVICES
  ========================= */

  const services = [

    ["Business Website","Professional digital presence for modern businesses.","01","⌘"],
    ["Cyber Cafe & CSC Website","Clean website for digital and online services.","02","⌘"],
    ["Digital Service Center","Structured website for digital service providers.","03","⌁"],
    ["Personal Portfolio Website","A memorable home for your work and identity.","04","◈"],
    ["Professional Portfolio Website","Premium presentation for your professional profile.","05","◈"],
    ["Web Developer Portfolio","Technical identity with modern frontend craft.","06","〈/〉"],
    ["Agency Website","High-impact website for creative and digital agencies.","07","✦"],
    ["Startup Website","Sharp product storytelling for modern startups.","08","↗"],
    ["Company Website","Professional corporate digital presence.","09","▦"],
    ["School Website","Clear information architecture for institutions.","10","⌂"],
    ["Coaching Institute Website","Programs, courses and admission presentation.","11","◎"],
    ["Online Course Website","Course-focused learning experience.","12","▶"],
    ["Restaurant Website","Premium menu, atmosphere and reservation presentation.","13","✦"],
    ["Hotel Website","Elegant hospitality and room presentation.","14","⌂"],
    ["E-Commerce Website","Modern product discovery and shopping interface.","15","◫"],
    ["Online Store Website","Focused storefront for products and collections.","16","◫"],
    ["Product Catalogue Website","Clean browsing experience for product collections.","17","▤"],
    ["Landing Page","Focused page built around one clear objective.","18","↗"],
    ["Product Landing Page","Product-first visual storytelling.","19","◈"],
    ["App Landing Page","Modern landing page for mobile applications.","20","▣"],
    ["Blog Website","Editorial layout designed for comfortable reading.","21","≡"],
    ["News Website","Information-rich content architecture.","22","▤"],
    ["NGO Website","Mission, stories and community information.","23","♡"],
    ["Community Website","People, topics and resources in one place.","24","◉"],
    ["Event Website","Event details, schedule and registration experience.","25","✦"],
    ["Wedding Website","Elegant digital storytelling for special moments.","26","♡"],
    ["Healthcare Website","Clear and approachable health service presentation.","27","+"],
    ["Clinic Website","Services, contact and appointment-focused design.","28","+"],
    ["Real Estate Website","Property browsing and detail-focused interface.","29","⌂"],
    ["Travel Website","Destination storytelling and travel information.","30","↗"],
    ["Booking Website","Simple journeys for dates, services and reservations.","31","□"],
    ["Local Business Website","Strong local identity and essential information.","32","⌖"],
    ["Service Provider Website","Service-focused website for enquiries.","33","✦"],
    ["Custom Website","Unique visual direction for a specific idea.","34","⌘"],
    ["Website Redesign","Modern refresh for an existing website.","35","↻"],
    ["Website Maintenance","Keep website content and frontend details polished.","36","⌁"],
    ["Website Deployment Support","Practical support preparing a website for launch.","37","↑"]

  ];


  function renderServices(
    query = ""
  ) {

    const cleanQuery =
      query.trim().toLowerCase();


    serviceGrid.innerHTML = "";


    const filtered =
      services.filter(service => {

        return (
          service[0]
            .toLowerCase()
            .includes(cleanQuery)
        );

      });


    filtered.forEach(
      ([title, description, number, icon]) => {

        const card =
          document.createElement("article");

        card.className =
          "service-card reveal visible tilt";


        card.innerHTML = `

          <span class="number">
            ${number}
          </span>

          <span class="icon">
            ${icon}
          </span>

          <h3>
            ${title}
          </h3>

          <p>
            ${description}
          </p>

        `;


        serviceGrid.appendChild(
          card
        );

      }
    );


    serviceCount.textContent =
      `${filtered.length} service${filtered.length === 1 ? "" : "s"}`;


    activateTilt();

  }


  renderServices();


  serviceSearch.addEventListener(
    "input",
    () => {

      renderServices(
        serviceSearch.value
      );

    }
  );


  /* =========================
     COUNTER
  ========================= */

  const counter =
    document.querySelector(
      "[data-count]"
    );


  if (counter) {

    const observer =
      new IntersectionObserver(
        entries => {

          if (!entries[0].isIntersecting)
            return;


          const target =
            Number(
              counter.dataset.count
            );


          if (reducedMotion) {

            counter.textContent =
              target;

            observer.disconnect();

            return;

          }


          let current = 0;

          const step =
            Math.max(
              1,
              Math.ceil(target / 35)
            );


          const timer =
            setInterval(() => {

              current += step;

              if (
                current >= target
              ) {

                current = target;

                clearInterval(timer);

              }

              counter.textContent =
                current;

            }, 35);


          observer.disconnect();

        },
        {
          threshold: .7
        }
      );


    observer.observe(
      counter
    );

  }


  /* =========================
     COPY EMAIL
  ========================= */

  const email =
    "mdnehazalam7632@gmail.com";


  copyEmail.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard.writeText(
          email
        );

        showToast(
          "Email copied successfully"
        );

      } catch {

        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value =
          email;

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

        showToast(
          "Email copied successfully"
        );

      }

    }
  );


  /* =========================
     CONTACT FORM
  ========================= */

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const data =
        new FormData(
          contactForm
        );


      const name =
        String(
          data.get("name") || ""
        ).trim();


      const sender =
        String(
          data.get("email") || ""
        ).trim();


      const project =
        String(
          data.get("project") || ""
        ).trim();


      const message =
        String(
          data.get("message") || ""
        ).trim();


      const subject =
        `Website Project Inquiry — ${project}`;


      const body = [
        "Hello Mohammed Nehaz Alam,",
        "",
        `Name: ${name}`,
        `Email: ${sender}`,
        `Project: ${project}`,
        "",
        "Project Details:",
        message
      ].join("\n");


      window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    }
  );


  /* =========================
     SOCIAL ICON FALLBACK
  ========================= */

  document
    .querySelectorAll(
      ".social img"
    )
    .forEach(img => {

      const fallback =
        img.parentElement.querySelector(
          "b"
        );


      function showFallback() {

        img.style.display =
          "none";

        if (fallback) {

          fallback.style.display =
            "block";

        }

      }


      img.addEventListener(
        "error",
        showFallback
      );


      img.addEventListener(
        "load",
        () => {

          if (fallback) {

            fallback.style.display =
              "none";

          }

        }
      );


      if (
        img.complete &&
        img.naturalWidth === 0
      ) {

        showFallback();

      }

    });


  /* =========================
     TOAST
  ========================= */

  function showToast(message) {

    toast.textContent =
      message;

    toast.classList.add(
      "show"
    );


    clearTimeout(
      window.toastTimer
    );


    window.toastTimer =
      setTimeout(() => {

        toast.classList.remove(
          "show"
        );

      }, 1800);

  }


  /* =========================
     3D TILT
  ========================= */

  function activateTilt() {

    if (
      reducedMotion ||
      !window.matchMedia(
        "(pointer:fine)"
      ).matches
    ) {
      return;
    }


    document
      .querySelectorAll(
        ".tilt"
      )
      .forEach(card => {

        if (
          card.dataset.tiltReady
        ) {
          return;
        }

        card.dataset.tiltReady =
          "true";


        card.addEventListener(
          "pointermove",
          event => {

            const rect =
              card.getBoundingClientRect();


            const x =
              (event.clientX -
                rect.left) /
              rect.width;


            const y =
              (event.clientY -
                rect.top) /
              rect.height;


            const rotateX =
              (0.5 - y) * 4;


            const rotateY =
              (x - 0.5) * 4;


            card.style.transform =
              `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-3px)
              `;

          }
        );


        card.addEventListener(
          "pointerleave",
          () => {

            card.style.transform =
              "";

          }
        );

      });

  }


  activateTilt();


  /* =========================
     CURSOR GLOW
  ========================= */

  if (
    !reducedMotion &&
    window.matchMedia(
      "(pointer:fine)"
    ).matches
  ) {

    window.addEventListener(
      "pointermove",
      event => {

        root.style.setProperty(
          "--mouse-x",
          `${event.clientX}px`
        );

        root.style.setProperty(
          "--mouse-y",
          `${event.clientY}px`
        );

      },
      {
        passive: true
      }
    );

  }

});