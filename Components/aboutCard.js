let aboutData = [
    {
        image: "/media/images/01.jpg",
        heading: "Who We Are ?",
        subHead:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, perferendis.",
    },
    {
        image: "/media/images/02.jpg",
        heading: "What we do ?",
        subHead:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, perferendis.",
    },
    {
        image: "/media/images/about_02.jpg",
        heading: "How we do ?",
        subHead:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, perferendis.",
    },
    {
        image: "/media/images/04.jpg",
        heading: "Why us ?",
        subHead:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum, perferendis.",
    },
];

let AboutCard = `
    ${aboutData
        .map(
            (item) => `
        <div 
        
        class="sm:h-screen sm:bg-[url('${item.image}')] sm:bg-cover sm:flex sm:flex-row sm:items-center bg-black bg-opacity-50 sm:relative"
    >
        <div class="sm:absolute sm:inset-0 sm:bg-black sm:opacity-50"></div>
        <img loading="lazy" src="${item.image}" class="sm:hidden" alt="" />
        <div class="px-5 py-6 sm:py-4 sm:px-20 z-10">
            <div
                class="text-xl sm:text-5xl sm:w-2/3 sm:leading-[60px] leading-7 text-white font-WorkSans400 uppercase mb-3 mt-0 hover:text-yellow-600 "
            >
                ${item.heading}
            </div>
            <div
                class="text-sm sm:text-3xl sm:w-2/3 sm:leading-10 sm:font-normal leading-6 font-medium text-white font-WorkSans200"
            >
                ${item.subHead}
            </div>
        </div>
    </div>
        `
        )
        .join("")}


`;
