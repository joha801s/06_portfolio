// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  console.log("toggleMenu");
  // 1. Toggle en klasse på nav vha. classList.toggle
  nav.classList.toggle("shown");
  // 2. Toggle en klasse, der hedder "shown"

  // 1. Lav en variabel, der hedder menuShown
  const menuShown = nav.classList.contains("shown");
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    btn.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);

/*LOGO LINK*/
{
  /* <button onclick="location.href = 'www.yoursite.com';" id="myButton" class="float-left submit-button" >Home</button> */
}
