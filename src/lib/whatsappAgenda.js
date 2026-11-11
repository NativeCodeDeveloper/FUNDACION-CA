/**
 * Enlace de "Agendar hora" (WhatsApp del centro).
 *
 * El numero no vive aqui: cada componente lo lee de los datos de empresa del
 * backend (contactoWhatsapp, con contactoTelefono como respaldo), igual que lo
 * hacen los iconos sociales de portada y footer. Esta utilidad solo normaliza
 * y arma el enlace, para que ningun boton lo construya a mano y se
 * desincronicen entre si.
 *
 * El parametro ?text= de wa.me solo PRELLENA el mensaje: el paciente puede
 * borrarlo antes de enviar. Igual mecanismo que construirUrlSoporte().
 */

export const MENSAJE_AGENDA = "Hola, quisiera agendar una hora";

export function normalizarNumeroWhatsApp(numero) {
  return String(numero || "").replace(/[^\d]/g, "");
}

// Devuelve "" si el centro no tiene numero configurado: cada boton decide
// entonces su respaldo (aqui se usa volver al agendamiento en linea).
export function construirUrlWhatsApp(numero, mensaje = MENSAJE_AGENDA) {
  const limpio = normalizarNumeroWhatsApp(numero);
  if (!limpio) return "";
  return `https://wa.me/${limpio}?text=${encodeURIComponent(mensaje)}`;
}
