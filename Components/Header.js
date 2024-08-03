let headerData = [
    { menu: "|", link: "#" },
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
    { menu: "services", link: "/pages/services.html" },
    {
        menu: "Commercial",
        link: "/pages/commercial.html",
        submenu: [
            { menu: "Hospitality", link: "/product/hospitality.html" },
            {
                menu: "Workplace Interior",
                link: "/product/workplace-interior.html",
            },
            {
                menu: "Event and rental furniture",
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
        menu: "Residential",
        link: "/pages/residential.html",
        submenu: [
            { menu: "Living Room", link: "/product/living-room.html" },
            { menu: "Dining Room", link: "/product/dining-room.html" },
            { menu: "Kitchen", link: "/product/kitchen.html" },
            { menu: "Bedrooms", link: "/product/bedroom.html" },
            { menu: "Bathrooms", link: "/pages/bathroom.html" },
            { menu: "Laundary Rooms", link: "/product/laundary-room.html" },
            { menu: "Drawer", link: "/product/drawer.html" },
            { menu: "Wardrobe", link: "/product/wardrobe.html" },
        ],
    },
    {
        menu: "Interiors",
        link: "/pages/interior.html",
        submenu: [
            { menu: "Coffee Table", link: "/product/coffee-table.html" },
            { menu: "Console", link: "/product/console.html" },
            { menu: "Lights", link: "/pages/lights.html" },
            { menu: "Flooring", link: "/product/flooring.html" },
            { menu: "Carpets", link: "/product/carpet.html" },
            { menu: "Panels", link: "/product/panel.html" },
            { menu: "Faucets", link: "/product/faucet.html" },
            { menu: "Bathroom", link: "/product/bathroom.html" },
            { menu: "Wellness Luxe", link: "/pages/wellness-lux.html" },
            { menu: "Chairs", link: "/product/chair.html" },
            { menu: "Accessories", link: "/product/accessories.html" },
        ],
    },
    {
        menu: "Artifacts",
        link: "/pages/artifacts.html",
        submenu: [
            { menu: "Home Decor", link: "/product/home-decor.html" },
            { menu: "Sculpture", link: "/product/sculpture.html" },
            {
                menu: "Experiential Designs",
                link: "/product/experiential-art.html",
            },
            { menu: "Artworks", link: "/product/artwork.html" },
        ],
    },
    { menu: "project", link: "/pages/projects.html" },
    { menu: "contact us", link: "/pages/contact.html" },
    { menu: "|", link: "#" },
];

let Header = `
<header>
    <div class="backdrop-blur text-white z-[999] fixed w-full lg:hidden">
        <ul class="flex flex-row justify-between items-center px-5">
            <li class="text-2xl uppercase py-2 h-10">
                <a href="/">
                    <img loading="eager" class="h-full scale-125" src="https://res.cloudinary.com/daimmar0j/image/upload/v1721676892/logo_hd91rh_yg6ee7.png" alt="urbanface-logo" />
                </a>
            </li>
            <li id="menu_toggle_btn" class="font-WorkSans400 text-2xl uppercase py-2">
             <img loading="eager" class=" w-6 " src="/media/images/hamburger.png" alt="urbanface-logo" />
            </li>
        </ul>
    </div>

    <div id="mob_header" class="h-screen w-full bg-purple-600 z-30 fixed hidden duration-700 ease-in-out">
        <span id="close_btn" class="fixed z-40 top-10 right-10 text-white">X</span>
    </div>

    <div class="lg:flex-row backdrop-blur-sm lg:bg-gradient-to-b lg:from-black/85 fixed w-full z-20 text-white py-5 pl-10 pr-0 justify-between items-baseline hidden lg:flex ">
        <div id="logo-img" class="font-bold text-3xl h-9">
            <a href="/">
                <img loading="eager" class="h-full scale-125" src="https://res.cloudinary.com/daimmar0j/image/upload/v1721676892/logo_hd91rh_yg6ee7.png" alt="urbanface-logo" />
            </a>
        </div>
        <div>
            <ul class="flex flex-row gap-x-5 uppercase px-20">
                ${headerData
                    .map(
                        (data, index) => `
                    <li id="menu-item" class="relative group">
                        <a href="${
                            data.link
                        }" class="no-underline font-FigtreeMedium hover:underline hover:underline-offset-4 hover:text-yellow-500 hover:font-bold nav-item ${
                            data.submenu ? "group-hover:text-yellow-500" : ""
                        }">
                            ${data.menu}
                        </a>
                        ${
                            data.submenu
                                ? `
                            <ul class="submenu absolute hidden bg-black/50 min-w-fit w-72  text-white p-2 left-0  rounded shadow-lg opacity-0 transition duration-300 transform  group-hover:block group-hover:opacity-100">
                                ${data.submenu
                                    .map(
                                        (sub) => `
                                    <li>
                                        <a href="${sub.link}" class="block px-4    text-[16px] leading-7 sm:text-base sm:leading-9 hover:text-yellow-400">${sub.menu}</a>
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
    </div>
</header>`;
