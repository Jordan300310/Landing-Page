export function estaAbierto(horario, ahora = new Date()) {
  const partes = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Lima",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(ahora);

  const hora = Number(partes.find((p) => p.type === "hour").value);
  const minuto = Number(partes.find((p) => p.type === "minute").value);
  const minutosAhora = hora * 60 + minuto;

  const [horaApertura, minutoApertura] = horario.apertura.split(":").map(Number);
  const [horaCierre, minutoCierre] = horario.cierre.split(":").map(Number);

  const minutosApertura = horaApertura * 60 + minutoApertura;
  let minutosCierre = horaCierre * 60 + minutoCierre;
  if (minutosCierre <= minutosApertura) minutosCierre += 24 * 60;

  return minutosAhora >= minutosApertura && minutosAhora < minutosCierre;
}
