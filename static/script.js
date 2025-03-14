document.addEventListener("DOMContentLoaded", function () {
    const aboutSchool = document.getElementById("about-school");
    const forStudents = document.getElementById("for-students");
    const forParents = document.getElementById("for-parents"); 
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const mainContainer = document.querySelector(".main-container");

    aboutSchool.addEventListener("click", function (event) {
        event.stopPropagation();
        const dropdown = aboutSchool.querySelector(".dropdown");
        const arrow = aboutSchool.querySelector(".arrow");
        dropdown.classList.toggle("show");
        arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    });

    forStudents.addEventListener("click", function (event) {
        event.stopPropagation();
        const dropdown = forStudents.querySelector(".dropdown");
        const arrow = forStudents.querySelector(".arrow");
        dropdown.classList.toggle("show");
        arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    });

    forParents.addEventListener("click", function (event) {
        event.stopPropagation();
        const dropdown = forParents.querySelector(".dropdown");
        const arrow = forParents.querySelector(".arrow");
        dropdown.classList.toggle("show");
        arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    });

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        menuIcon.classList.toggle("open");
        sidebar.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("open");
            menuIcon.classList.remove("open");
        }
    });

    setTimeout(() => {
        mainContainer.classList.add("show");
    }, 300);

    function updateMainContent(title, content) {
        mainContainer.innerHTML = `<h1>${title}</h1><div class="content">${content}</div>`;
    }

    document.querySelector(".school-name a").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("Главная", "<p>Добро пожаловать в 20 школу города Волжский!</p>");
    });

    document.getElementById("child-safety").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("Информационная безопасность детей", "<p>Текст про информационную безопасность детей...</p>");
    });

    document.getElementById("anti-drugs").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("Профилактика употребления психоактивных веществ", "<p>Текст о предотвращении потребления...</p>");
    });

    document.getElementById("prevention").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("Профилактика", "<p>Текст о профилактике...</p>");
    });

    document.getElementById("legal-procedures").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("Правоприменительные процедуры", `
            <p>Под правоприменительными процедурами (действиями) понимается совокупность последовательно осуществляемых юридически значимых действий с участием детей либо в их интересах, 
            требующих документального оформления и реализуемых уполномоченными на то государственными органами, органами местного самоуправления и (или) их должностными лицами, 
            а также подведомственными названным органам организациями (учреждениями).</p>
            <p>Информация о предоставленной помощи и проведении социальной реабилитации детей, с участием которых или в интересах которых осуществлялись правоприменительные процедуры (действия).</p>
        `);
    });

    document.getElementById("vsosh").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("ВСОШ", `
            <p><strong>Порядок проведения ВСОШ</strong></p>
            <ul>
                <li>Методические рекомендации</li>
                <li>Изменение в порядок проведения ВСОШ</li>
                <li>Приказ управления образования на 2024-2025 уч. год</li>
                <li>Приказ 674 от 09.10.2024 о проведении муниципального этапа 2024-2025</li>
                <li>Изменение в приказ управления образования</li>
                <li>Заявление на обработку персональных данных</li>
                <li>Приказ на установление количества баллов</li>
            </ul>
        `);
    });

    document.getElementById("pdd").addEventListener("click", function (event) {
        event.preventDefault();
        updateMainContent("ПДД", `
            <p>В Волжском проводится профилактическое мероприятие «Ребенок-пассажир».</p>
            <p>В 2022 году в городе Волжском 23 ребенка получили травмы в ДТП в качестве пассажиров легкового транспорта, из них 15 детей - пассажиры в возрасте до 12 лет. 
            В трех ДТП нарушили правила перевозки родители – водители. 1 ребенок перевозился без детского удерживающего устройства на руках у матери.</p>
            <p>В январе в городе Волжском проводится профилактическое мероприятие «Ребенок-главный пассажир», направленное на соблюдение требований к перевозке несовершеннолетних пассажиров. 
            Сотрудники ГИБДД разъясняют водителям правила перевозки детей – пассажиров и проводят беседы о необходимости и важности использования детских удерживающих устройств.</p>
            <p><strong>ГИБДД напоминает:</strong> Ребенок в салоне автомашины полностью зависит от водителя. Пренебрежение мерами безопасности может закончиться трагично.</p>
            <p><strong>Родители! ПРЕЖДЕ ЧЕМ ОТПРАВИТЬСЯ С РЕБЕНКОМ НА АВТОМАШИНЕ ПОБЕСПОКОЙТЕСЬ О ЕГО БЕЗОПАСНОСТИ:</strong></p>
            <ol>
                <li>Приобретите детское удерживающее устройство согласно весу и росту ребенка.</li>
                <li>Строго следуйте инструкции от производителя автомобиля.</li>
            </ol>
            <p><strong>ОГИБДД Управления МВД России по городу Волжскому</strong></p>
        `);
    });
});
