const guests = [
  { id: "1", name: "Srita. Regina López", passes: 1 },
  { id: "2", name: "Hrnos. Adriana y Rodrigo Chacon Sandoval", passes: 2 },
  { id: "3", name: "Hrnas. Millie y Luisa De La Cruz", passes: 2 },
  { id: "4", name: "Hrnas. Regina, Andrea y Ximena Escobar", passes: 3 },
  { id: "5", name: "Hrnos. Jorge y Diego Arreaga", passes: 2 },
  { id: "6", name: "Joven Jose Anibal Martínez", passes: 1 },
  { id: "7", name: "Hrnos. Mariana y Santiago Godoy", passes: 2 },
  { id: "8", name: "Srita. Camila Fernandez", passes: 2 },
  { id: "9", name: "Joven Luis Ruben Rodriguez", passes: 1 },
  { id: "10", name: "Srita. Ivana Melgar", passes: 1 },
  { id: "11", name: "Srita. Alice Alvarez", passes: 1 },
  { id: "12", name: "Srita. Renata Escobedo", passes: 1 },
  { id: "13", name: "Srita. Eleana Mejia", passes: 2 },
  { id: "14", name: "Joven Marco Coca", passes: 1 },
  { id: "15", name: "Joven Daniel Davila", passes: 1 },
  { id: "16", name: "Srita. Luisa Trigueros", passes: 1 },
  { id: "17", name: "Joven Iker Ugarte", passes: 1 },
  { id: "18", name: "Joven Juan Diego Boy", passes: 1 },
  { id: "19", name: "Hrnos. Martin y Mathias Moran Cordón", passes: 2 },
  { id: "20", name: "Srita. Mia Aresti", passes: 1 },
  { id: "21", name: "Srita. Lili Matheu", passes: 1 },
  { id: "22", name: "Srita. Sofia Samayoa", passes: 1 },
  { id: "23", name: "Srita. Mia Folgar", passes: 1 },
  { id: "24", name: "Joven Enrique Gordillo", passes: 1 },
  { id: "25", name: "Srita. Daniela Cordoba", passes: 1 },
  { id: "26", name: "Hrnos. Camila y Santiago Aguilón", passes: 2 },
  { id: "27", name: "Srita. Camila Morfin", passes: 1 },
  { id: "28", name: "Srita. Stefy Colon", passes: 1 },
  { id: "29", name: "Hrnos. Sebastian e Isabela Cahueque", passes: 2 },
  { id: "30", name: "Srita. Barbara Cuesta", passes: 1 },
  { id: "31", name: "Srita. Abril Calderon", passes: 1 },
  { id: "32", name: "Srita. Isa Brolo", passes: 1 },
  { id: "33", name: "Joven Rodrigo Celada", passes: 1 },
  { id: "34", name: "Srita. Maria Andrea Férnandez", passes: 1 },
  { id: "35", name: "Srita. Fátima Argueta", passes: 1 },
  { id: "36", name: "Srita. Mia Valentina Orozco González", passes: 1 },
  { id: "37", name: "Srita. Maria Andrea Serra", passes: 1 },
  { id: "38", name: "Srita. Nicolle Casero", passes: 1 },
  { id: "39", name: "Sr. Salvador Moran y Sra.", passes: 2 },
  { id: "40", name: "Sr. Gabriel Motta y Familia", passes: 4 },
  { id: "41", name: "Sra. Ana Carolina Moran y Familia", passes: 5 },
  { id: "42", name: "Sr. Jose Carlos Moran y Familia", passes: 4 },
  { id: "43", name: "Sr. Jose Javier Moran y Familia", passes: 3 },
  { id: "44", name: "Sra. Angelina Moran", passes: 1 },
  { id: "45", name: "Sr. Jose Santiago Molina y Sra.", passes: 5 },
  { id: "46", name: "Sr. Rodrigo Molina, Sra. e hija", passes: 3 },
  { id: "47", name: "Sr. Jose Antonio Moran y Sra.", passes: 2 },
  { id: "48", name: "Sr. Jose Francisco Villatoro, Sra. e hijos", passes: 4 },
  { id: "49", name: "Sr. Jose Francisco Moran", passes: 2 },
  { id: "50", name: "Sr. Roberto Matheu, Sra. e hija", passes: 3 },
  { id: "51", name: "Sr. Juan Pablo Moran y Sra.", passes: 2 },
  { id: "52", name: "Sr. Martin Guzman y Sra.", passes: 2 },
  { id: "53", name: "Sr. Carlos Galvez y Sra.", passes: 2 },
  { id: "54", name: "Sra. Maria Del Carmen Moran", passes: 1 },
  { id: "55", name: "Sr. Diego Galvez y Sra.", passes: 2 },
  { id: "56", name: "Sra. Rosa De Serrano", passes: 1 },
  { id: "57", name: "Sr. Vinicio Serrano y Sra.", passes: 2 },
  { id: "58", name: "Sr. Carlos Miguel Abascal y Sra.", passes: 2 },
  { id: "59", name: "Sr. Mynor Moscosso y Sra.", passes: 2 },
  { id: "60", name: "Sra. Natalia Serrano", passes: 1 },
  { id: "61", name: "Sr. Rulito Serrano", passes: 2 },
  { id: "62", name: "Sr. Javier y Rosarito", passes: 2 },
  { id: "63", name: "Sr. Rafael Sánchez y Sra.", passes: 3 },
  { id: "64", name: "Sra. Brenda Solis", passes: 1 },
  { id: "65", name: "Sr. Jose Rene Lira", passes: 2 },
  { id: "66", name: "Sra. Sandra Solis", passes: 1 },
  { id: "67", name: "Sr. Luis Pablo Noriega y Familia", passes: 4 },
  { id: "68", name: "Sr. Carlos Hernández, Dharma Maldonado e hijo", passes: 3 },
  { id: "69", name: "Sr. Alan Hernández", passes: 2 },
  { id: "70", name: "Srta. Sara Rosell", passes: 1 },
  { id: "71", name: "Sr. Rudy Ceballos y Familia", passes: 0 },
  { id: "72", name: "Sr. Arturo Martinez y Sra.", passes: 3 },
  { id: "73", name: "Sr. Francisco Quevedo y Sra.", passes: 2 },
  { id: "74", name: "Sr. Mike España y Sra.", passes: 2 },
  { id: "75", name: "Sr. Jose David Rueda", passes: 2 },
  { id: "76", name: "Sr. Rudy Herman y Sra.", passes: 2 },
  { id: "77", name: "Sr. Luis Guillermo Perez y Sra.", passes: 2 },
  { id: "78", name: "Sr. Andreas Lanz y Sra.", passes: 3 },
  { id: "79", name: "Sr. Guillermo Kuhsie y novia", passes: 2 },
  { id: "80", name: "Sr. Rafael Anleu y Sra.", passes: 2 },
  { id: "81", name: "Sr. Angel Ovalle, Sra. e hijos", passes: 5 },
  { id: "82", name: "Sr. Jose Antonio Sr. Samayoa y Sra.", passes: 2 },
  { id: "83", name: "Sr. Jorge Celada y Sra.", passes: 2 },
  { id: "84", name: "Sr. Jose Antonio Jr. Samayoa y Sra.", passes: 2 },
  { id: "85", name: "Sr. Roberto Samayoa y Sra.", passes: 2 },
  { id: "86", name: "Sr. Fabian Luarca y Sra.", passes: 2 },
  { id: "87", name: "Sr. Luis Pedro Sandoval, Sra. e hijos", passes: 4 },
  { id: "88", name: "Sr. Roger Cifuentes y Sra.", passes: 2 },
  { id: "89", name: "Sr. Jose Guillermo Gonzalez y Sra.", passes: 2 },
  { id: "90", name: "Sr. Jose Luis Rueda y Sra", passes: 2 },
  { id: "91", name: "Sr. Carlos Alvarez y Sra.", passes: 2 },
  { id: "92", name: "Sra. Maria Eugenia Cuellar", passes: 1 },
  { id: "93", name: "Sra. Idalia de Gonzales", passes: 1 },
  { id: "94", name: "Padre Anacleto Gaytan", passes: 1 },
  { id: "95", name: "Sr. William Mazariegos y Sra.", passes: 2 },
  { id: "96", name: "Sr. Ajax Martinez y Sra.", passes: 2 },
  { id: "97", name: "Sr. Enrique Arevalo y Sra.", passes: 2 },
  { id: "98", name: "Sr. Alejandro Colon, Sra.", passes: 2 },
  { id: "99", name: "Sr. Jose Fernando Diez y Sra.", passes: 2 },
  { id: "100", name: "Sr. Eduardo Gonzáles y Sra.", passes: 2 },
  { id: "101", name: "Sr. Oscar Herrera y Sra.", passes: 2 }
];

  
document.addEventListener("DOMContentLoaded", () => {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent((value || '').replace(/\+/g, ' '));
    }
    return params;
  }

  const queryParams = getQueryParams();
  const guestId = queryParams.id;
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    const isFeminine = guest.name.toLowerCase().includes("srita") || guest.name.toLowerCase().includes("hrnas") || guest.name.toLowerCase().includes("sra");

    let invitationText = "";

    if (guest.passes > 1) {
      invitationText = isFeminine
        ? `¡${guest.name}, están invitadas!`
        : `¡${guest.name}, están invitados!`;
    } else {
      invitationText = isFeminine
        ? `¡${guest.name}, estás invitada!`
        : `¡${guest.name}, estás invitado!`;
    }

    document.getElementById('guest-name').textContent = invitationText;
    document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'persona' : 'personas'}`;
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }
});

  