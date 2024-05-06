function changeLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');

    elements = Array.from(elements);
    console.log('Changing language to:', lang);

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var key = element.getAttribute('data-lang');
        switch (lang) {
            case 'es':
                element.textContent = language.es[key];
                break;
            case 'en':
                element.textContent = language.en[key];
                break;
            case 'ca':
                element.textContent = language.ca[key];
                break;
            default:
                break;
        }
    }
}
var language = {
    es: {
        personal_info: 'Información Personal',
        experience: 'Experiencia Laboral',
        education: 'Formación Académica',
        skills: 'Habilidades',
        projects: 'Proyectos Realizados',
        social: 'Redes Sociales y Perfiles Profesionales',
        communicative: 'Comunicativo',
        teamwork: 'Trabajo en Equipo',
        versatile: 'Versátil',
        problem_solving: 'Resolución de Problemas',
        organization: 'Organización',
        name: 'Nombre: Eduard García Fernández',
        profession: 'Profesión: Estudiante de Ingeniería Informática',
        contact: 'Contacto: eduard.garcia@gracia.lasalle.cat | +34 628 833 102',
        languages: 'Idiomas: B1 Inglés | Castellano | Catalán',
        education: 'Formación Académica',
        experience: 'Experiencia Laboral',
        projects: 'Proyectos Realizados',
        job_title: 'Prácticas Laborales - Clicko Informática Seguridad y Redes',
        location: 'Lugar',
        date: 'Fecha',
        windows_config: 'Configuración de Equipos con Windows',
        computer_maintenance: 'Mantenimiento de Equipos Informáticos',
        warehouse_assistant: 'Asistente en el Almacén - La Daurada Club',
        project_name1: '🥅 Tiros de Penalti 🥅',
        project_name2: '🍔 Sitio web de la Hamburguesa 🍔',
        description: 'Descripción',
        link: 'Enlace',
        primary_education: 'Educación Primaria - Escuela Volerany',
        secondary_education: 'ESO - Instituto Manuel de Cabanyes',
        vocational_training: 'F.P.G.M. Sistemas Microinformáticos y Redes - IES Joaquim Mir',
        higher_degree: 'Grado Superior de Aplicaciones Web (DAW) - La Salle Gràcia',
        copyright: '© 2024 Eduard García Fernandez - Todos los derechos reservados.'
    },
    en: {
        personal_info: 'Personal Information',
        experience: 'Work Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        social: 'Social Media and Professional Profiles',
        communicative: 'Communicative',
        teamwork: 'Teamwork',
        versatile: 'Versatile',
        problem_solving: 'Problem Solving',
        organization: 'Organization',
        name: 'Name: Eduard García Fernández',
        profession: 'Profession: Computer Engineering Student',
        contact: 'Contact: eduard.garcia@gracia.lasalle.cat | +34 628 833 102',
        languages: 'Languages: B1 English | Spanish | Catalan',
        education: 'Education',
        experience: 'Work Experience',
        projects: 'Projects',
        job_title: 'Internship - Clicko Computer Security and Networks',
        location: 'Location',
        date: 'Date',
        windows_config: 'Windows Systems Configuration',
        computer_maintenance: 'Computer Equipment Maintenance',
        warehouse_assistant: 'Warehouse Assistant - La Daurada Club',
        project_name1: '🥅 Penalty Shootout 🥅',
        project_name2: '🍔 BurgerWebSite 🍔',
        description: 'Description',
        link: 'Link',
        primary_education: 'Primary Education - Volerany School',
        secondary_education: 'High School - Manuel de Cabanyes Institute',
        vocational_training: 'Vocational Training - IES Joaquim Mir',
        higher_degree: 'Higher Degree in Web Applications (DAW) - La Salle Gràcia',
        copyright: '© 2024 Eduard García Fernandez - All Rights Reserved.'
    },
    ca: {
        personal_info: 'Informació Personal',
        experience: 'Experiència Laboral',
        education: 'Formació Acadèmica',
        skills: 'Habilitats',
        projects: 'Projectes Realitzats',
        social: 'Xarxes Socials i Perfils Professionals',
        communicative: 'Comunicatiu',
        teamwork: 'Treball en Equip',
        versatile: 'Versàtil',
        problem_solving: 'Resolució de Problemes',
        organization: 'Organització',
        name: 'Nom: Eduard García Fernández',
        profession: 'Professió: Estudiant Enginyeria Informàtica',
        contact: 'Contacte: eduard.garcia@gracia.lasalle.cat | +34 628 833 102',
        languages: 'Idiomes: B1 Anglès | Castellà | Català',
        education: 'Formació Acadèmica',
        experience: 'Experiència Laboral',
        projects: 'Projectes Realitzats',
        job_title: 'Pràctiques Laborals - Clicko Informàtica Seguretat i Xarxes',
        location: 'Lloc',
        date: 'Data',
        windows_config: 'Configuració d\'equips amb Windows',
        computer_maintenance: 'Manteniment d\'equips informàtics',
        warehouse_assistant: 'Assistent i ajudant a l\'almagatzem - La Daurada Club',
        project_name1: '🥅 Penals 🥅',
        project_name2: '🍔 Lloc web de la Hamburguesa 🍔',
        description: 'Descripció',
        link: 'Enllaç',
        primary_education: 'Educació Primària - Escola Volerany',
        secondary_education: 'ESO - Institut Manuel de Cabanyes',
        vocational_training: 'F.P.G.M. Sistemes Microinformàtics i Xarxes - IES Joaquim Mir',
        higher_degree: 'Grau Superior d\'Aplicacions Web (DAW) - La Salle Gràcia',
        copyright: '© 2024 Eduard García Fernandez - Tots els drets reservats.'
      
    }

};
