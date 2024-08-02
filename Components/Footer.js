let footerData1 = [
    { menu: "commercials", link: "/pages/commercial.html" },
    { menu: "RESIDENTIAL", link: "/pages/residential.html" },
    { menu: "Interiors", link: "/pages/interior.html" },
    { menu: "artifacts", link: "/pages/artifacts.html" },
];
let footerData2 = [
    { menu: "About us", link: "/pages/about.html" },
    { menu: "projects", link: "/pages/projects.html" },
    { menu: "contacts", link: "/pages/contact.html" },
    { menu: "services", link: "/pages/services.html" },
];
let footerData3 = [
    {
        menu: "commercials",

        submenu: [
            { menu: "Hospitality", link: "/product/hospitality.html" },
            {
                menu: "Workplace Interior",
                link: "/product/workplace-interior.html",
            },
            {
                menu: "Event and Rental Furniture",
                link: "/product/event-rental.html",
            },
            {
                menu: "Outdoor Furniture",
                link: "/product/outdoor-furniture.html",
            },
            { menu: "Games Room", link: "/product/game.html" },
        ],
    },
    {
        menu: "RESIDENTIAL",

        submenu: [
            {
                menu: "Living Room",
                link: "/product/living-room.html",
            },
            { menu: "Dining Room", link: "/product/dining-room.html" },
            { menu: "Kitchen", link: "/product/kitchen.html" },
            { menu: "Bedrooms", link: "/product/bedroom.html" },
            { menu: "Bathrooms", link: "/pages/bathroom.html" },
            {
                menu: "Laundary Rooms",
                link: "/product/laundary-room.html",
            },
            { menu: "Drawer", link: "/product/drawer.html" },
            { menu: "Wardrobe", link: "/product/wardrobe.html" },
        ],
    },
    {
        menu: "Interiors",

        submenu: [
            { menu: "Coffee table", link: "/product/coffee-table.html" },
            { menu: "Console", link: "/product/console.html" },
            { menu: "Lights", link: "/pages/lights.html" },
            { menu: "Flooring", link: "/product/flooring.html" },
            { menu: "Carpets", link: "/product/carpet.html" },
            { menu: "Panels", link: "/product/panel.html" },
            { menu: "Faucets", link: "/product/faucet.html" },
            { menu: "Bathroom", link: "/product/bathroom.html" },
            { menu: "Wellness luxe", link: "/pages/wellness-lux.html" },
            { menu: "Chairs", link: "/product/chair.html" },
            { menu: "Accessories", link: "/product/accessories.html" },
        ],
    },
    {
        menu: "artifacts",

        submenu: [
            { menu: "Home decor", link: "/product/home-decor.html" },
            { menu: "Sculpture", link: "/product/sculpture.html" },
            {
                menu: "Experiential design",
                link: "/product/experiential-art.html",
            },
            { menu: "Artwork", link: "/product/artwork.html" },
        ],
    },
    {
        menu: "About us",
        link: "/pages/about.html",
        submenu: [
            { menu: "Why us ?", link: "/pages/why.html" },
            { menu: "Who we are ?", link: "/pages/who.html" },
            { menu: "What we do ?", link: "/pages/what.html" },
            { menu: "How we do ?", link: "/pages/how.html" },
        ],
    },
];

let Footer = `
<footer id="footer" class="relative">
    <div class="container mx-auto px-4 h-screen">
        <div class="flex flex-col justify-center items-center text-left h-[100vh] sm:flex sm:items-center">
            <video id="footer-video" autoplay loop muted class="absolute z-[-1] w-full h-full object-cover  ">
                <source src="https://urbanfacevideos.s3.ap-south-1.amazonaws.com/sand_video_olli8w_uclzsk.mp4"
                    type="video/mp4" />
            </video>
            <div class="w-full px-4 mb-0">
                <div class="flex flex-wrap  sm:flex-nowrap sm:flex sm:flex-row-reverse items-top py-6 text-white">
                    <div id="footer-logo" class="w-full ml-auto  mb-7 ms-3  text-3xl h-8 md:text-5xl md:h-16 ">
                        <a href="/">
                            <img loading="lazy" class="h-full scale-150 "
                                src="https://res.cloudinary.com/daimmar0j/image/upload/v1721761994/logo_q3jyzh_hpit8f.png"
                                alt="urbanface-logo">
                        </a>
                    </div>
                    <div class="w-full ml-auto">
                        <ul class="list-unstyled uppercase font-FigtreeMedium ">
                            ${footerData1
                                .map(
                                    (item) => `
                            <li>
                                <a id="footer-menu"
                                    class=" font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="${item.link}">
                                    ${item.menu}
                                </a>
                            </li>
                            `
                                )
                                .join("")}

                        </ul>
                    </div>
                    <div class="w-full">
                        <ul class="list-unstyled uppercase font-FigtreeMedium">
                            ${footerData2
                                .map(
                                    (item) => `
                            <li>
                                <a id="footer-menu"
                                    class="font-FigtreeMedium  block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="${item.link}">
                                    ${item.menu}
                                </a>
                            </li>
                            `
                                )
                                .join("")}

                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 my-10 sm:flex sm:flex-row sm:justify-between">
                <div class="lg:mb-0 flex flex-nowrap ">
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://wa.me/+918802955060" taget="_blank">
                            <i class="fa-brands fa-whatsapp text-black text-lg "></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.facebook.com/share/nZa5Fq7K89bQtSS2/?mibextid=LQQJ4d" taget="_blank">
                            <i class="fa-brands fa-facebook text-black text-lg "></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.instagram.com/urbanface.official?igsh=MTU1Y3RuaXJhbXo1cg==" taget="_blank">
                            <i class="fa-brands fa-instagram text-black text-lg "></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://in.pinterest.com/Urbanfaceofficial/" target="_blank">
                            <i class="fa-brands fa-pinterest text-black text-lg"></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.linkedin.com/company/urbanfaceofficial/?viewAsMember=true" target="_blank">
                            <i class="fa-brands fa-linkedin text-black text-lg"></i>
                        </a>
                    </button>


                </div>
                <div id="footer-copyright" class="text-white my-5 font-FigtreeMedium">
                    Copyright 2024 - Urbanface
                </div>
            </div>
        </div>
    </div>
</footer>
`;
let Footer2 = `
<footer id="footer" class="relative overflow-scroll ">
    <div class="container mx-auto  px-4 ">
        <div
            class="flex flex-col justify-start items-center text-left h-[100vh] overflow-y-scroll sm:flex sm:items-center">
            <video id="footer-video" autoplay loop muted class="absolute z-[-1] w-full h-full object-cover">
                <source src="https://urbanfacevideos.s3.ap-south-1.amazonaws.com/sand_video_olli8w_uclzsk.mp4"
                    type="video/mp4" />
            </video>
            <div class="w-full px-4 mb-0 mt-16  overflow-y-visible ">
                <div class="flex flex-wrap sm:flex-nowrap sm:flex sm:flex-row-reverse items-top py-6 text-white">
                    
                    <div class="w-full ml-auto">
                        <ul class="list-none uppercase font-FigtreeMedium  overflow-y-scroll ">
                            ${footerData3
                                .map(
                                    (item, index) => `
                            <li class="relative group hover:text-yellow-500">
                                <a id="footer-menu-3"
                                    class="font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="#">
                                    ${item.menu}
                                </a>
                                ${
                                    item.submenu
                                        ? `
                                <ul id="submenu-${index}"
                                    class=" hidden group-hover:block  text-white p-2 left-0 mt-1 rounded shadow-lg  ">
                                    ${item.submenu
                                        .map(
                                            (sub) => `
                                    <li>
                                        <a href="${sub.link}"
                                            class="block px-4 py-2 hover:bg-gray-700 text-xs leading-7 sm:text-base sm:leading-9 hover:text-yellow-400 ">${sub.menu}</a>
                                    </li>
                                    `
                                        )
                                        .join("")}
                                </ul>
                                `
                                        : ""
                                }
                            </li>
                            `
                                )
                                .join("")}
                        </ul>
                    </div>
                    <div class="w-full">
                        <ul class="list-none uppercase font-FigtreeMedium">
                            ${footerData2
                                .filter((item) => item.menu !== "About us")
                                .map(
                                    (item) => `
                            <li>
                                <a id="footer-menu"
                                    class="font-FigtreeMedium block pb-2 text-xs leading-7 sm:text-base sm:leading-9"
                                    href="${item.link}">
                                    ${item.menu}
                                </a>
                            </li>
                            `
                                )
                                .join("")}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 my-10 sm:flex sm:flex-row sm:justify-between">
                <div class="lg:mb-0 flex flex-nowrap ">
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://wa.me/+918802955060" target="_blank">
                            <i class="fa-brands fa-whatsapp text-black text-lg"></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.facebook.com/share/nZa5Fq7K89bQtSS2/?mibextid=LQQJ4d" target="_blank">
                            <i class="fa-brands fa-facebook text-black text-lg"></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.instagram.com/urbanface.official?igsh=MTU1Y3RuaXJhbXo1cg=="
                            target="_blank">
                            <i class="fa-brands fa-instagram text-black text-lg"></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://in.pinterest.com/Urbanfaceofficial/" target="_blank">
                            <i class="fa-brands fa-pinterest text-black text-lg"></i>
                        </a>
                    </button>
                    <button
                        class="footer-icons my-1 bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-5"
                        type="button">
                        <a href="https://www.linkedin.com/company/urbanfaceofficial/?viewAsMember=true" target="_blank">
                            <i class="fa-brands fa-linkedin text-black text-lg"></i>
                        </a>
                    </button>
                </div>
                <div id="footer-copyright" class="text-white my-5 font-FigtreeMedium">
                    Copyright 2024 - Urbanface
                </div>
            </div>
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#footer-menu-3").forEach((menu, index) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            const currentSubmenu = document.getElementById(`submenu-${index}`);
            const openSubmenu = document.querySelector(".submenu-open");

            if (openSubmenu && openSubmenu !== currentSubmenu) {
                openSubmenu.classList.add("hidden");
                openSubmenu.classList.remove("submenu-open");
            }

            currentSubmenu.classList.toggle("hidden");
            currentSubmenu.classList.toggle("submenu-open");
        });

        menu.addEventListener("touchstart", (e) => {
            e.preventDefault();
            const currentSubmenu = document.getElementById(`submenu-${index}`);
            const openSubmenu = document.querySelector(".submenu-open");

            if (openSubmenu && openSubmenu !== currentSubmenu) {
                openSubmenu.classList.add("hidden");
                openSubmenu.classList.remove("submenu-open");
            }

            currentSubmenu.classList.toggle("hidden");
            currentSubmenu.classList.toggle("submenu-open");
        });
    });
});
