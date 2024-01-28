// Obtener el idioma de la URL si existe y ejecutar la función "changeLanguage"
const querystring = window.location.search; // Si la URL es: https://miweb.es?lang=es, retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtener el archivo json correspondiente
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  // Cambiar los textos
  document.getElementById('txt_header_menu').innerHTML = data.txt_header_menu;
  document.getElementById('txt_header_productoEspecial').innerHTML = data.txt_header_productoEspecial;
  document.getElementById('txt_header_pedido').innerHTML = data.txt_header_pedido;

  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;

  // Nuevos cambios
  document.getElementById('txt_BebidaRefrescanteProducto').innerHTML = data.txt_BebidaRefrescanteProducto;
  document.getElementById('txt_BebidaRefrescanteProductoDesc').innerHTML = data.txt_BebidaRefrescanteProductoDesc;
  document.getElementById('txt_opciones').innerHTML = data.txt_opciones;
  document.getElementById('txt_conHielo').innerHTML = data.txt_conHielo;
  document.getElementById('txt_sinHielo').innerHTML = data.txt_sinHielo;
  document.getElementById('addToCart').innerHTML = data.addToCart;
}
