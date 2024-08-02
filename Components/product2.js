let Product = (title, desc, imgUrls) => `
<div class="h-[100vh] pb-[10vh] pt-[35vh] bg-black text-white flex flex-col justify-between items-center">
    <div class="flex flex-col justify-center items-center">
        <div id="product-title" class="font-PlayfairDisplay px-5 text-center md:leading-[90px] text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            ${title}
        </div>
        <p id="product-desc" class="my-3 font-Raleway text-base sm:text-lg lg:text-xl px-5 text-center">
            ${desc}
        </p>
    </div>
    <div id="product-scroll-down" class="w-32 flex flex-col justify-center items-center">
        <img class="w-1/2" src="https://res.cloudinary.com/dgebxxagb/image/upload/v1719851978/URBANFACE/scrolldown_xzqd4p.gif" alt="">
        <p class="w-full text-center font-Raleway text-sm">Scroll Down</p>
    </div>
</div>

<div class="swiper-container racesWrapper">
    <div class="swiper-wrapper">
        ${imgUrls
            .map(
                (imgUrl) => `
            <div class="swiper-slide">
                <img class="w-full h-full object-cover sm:object-contain" src="${imgUrl}" alt="">
            </div>
        `
            )
            .join("")}
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Navigation -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div class="h-[20vh]"></div>
`;

// Initialize Swiper
const initSwiper = () => {
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

// Call initSwiper function to initialize Swiper carousel
initSwiper();
