let headImg23 = "/media/images/service_banner.png";
let mytagline = "57 apartments and penthouse";
let mysubhead =
    " loremLorem ipsum, dolor sit amet consectetur adipisicing elit. ";
let mydata = [
    {
        img: "/media/images/portfolio_062.jpg",
        img2: "/media/images/pf_dp_01.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Veritatis asperiores similique unde, suscipit non accusamus beatae aut cupiditate qui neque?",
    },
    {
        img: "/media/images/portfolio_082.jpg",
        img2: "/media/images/pf_dp_02.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Veritatis asperiores similique unde, suscipit non accusamus beatae aut cupiditate qui neque?",
    },
    {
        img: "/media/images/portfolio_062.jpg",
        img2: "/media/images/pf_dp_01.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Veritatis asperiores similique unde, suscipit non accusamus beatae aut cupiditate qui neque?",
    },
    {
        img: "/media/images/portfolio_082.jpg",
        img2: "/media/images/pf_dp_02.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Veritatis asperiores similique unde, suscipit non accusamus beatae aut cupiditate qui neque?",
    },
];

let Portfolio = (
    heading,
    subhead = "subhead",
    tagline = "mytagline",
    data = mydata,
    headImg = headImg23
) =>
    `
<div class="sm:hidden pb-5">
            
            <div
                class="px-5 py-6 sm:flex sm:flex-row sm:gap-x-2 sm:justify-between hidden"
            >
                <button
                    class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
                >
                    architectural design
                </button>
                <button
                    class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
                >
                    residential INTERIORs
                </button>
                <button
                    class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
                >
                    commercial interiors
                </button>
            </div>
        </div>
        <div class="h-screen sm:h-screen sm:block">
            <div
                class="bg-[url('${headImg}')] h-full w-full bg-center flex flex-row items-end"
            >
                <div
                    class="text-xl sm:text-5xl sm:px-14 sm:leading-8 leading-7 text-white font-WorkSans400 uppercase mt-0 align-text-bottom bg-gradient-to-t from-black /20 w-full py-2 sm:py-6"
                >
                    <div
                        class="text-center font-bold text-3xl sm:px-14 sm:text-5xl"
                    >
                        ${heading}
                    </div>

                    <div
                        class="px-5 py-6 sm:flex sm:flex-row sm:gap-x-2 sm:justify-between font-WorkSans200 text-lg font-bold "
                    >   ${subhead}
                        
                    </div>
                </div>
            </div>
        </div>
       
        
        <section>
        <div class="max-w-screen-xl mx-auto p-5 ">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10"
            >
                <!-- CARD 1 -->
                ${data
                    .map(
                        (item) => `
                    <div class="rounded overflow-hidden flex flex-col">
                    <a href="#"></a>
                    <div class="relative">
                        <a href="#">
                            <img
                                class="w-full"
                                src="${item.img2}"
                                alt="Sunset in the mountains"
                            />
                            <div
                                class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
                            ></div>
                        </a>
                    </div>
                    <div class="px-6 py-4 mb-auto">
                        <a
                            href="#"
                            class="font-medium text-lg inline-block hover:text-white transition duration-500 ease-in-out inline-block mb-2 font-WorkSans200  "
                            > ${item.desc} </a
                        >
                        <p class="text-gray-500 text-sm"></p>
                    </div>
                </div>
                    `
                    )
                    .join("")}
                

                

                
            </div>
        </div>
    </section>
            
        </section>
`;
