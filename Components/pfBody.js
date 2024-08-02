let PfBody = (data) => `
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
                                class="w-full hover:scale-105 hover:duration-700 "
                                src="${item.img2}"
                                alt="Sunset in the mountains"
                            />
                            
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
    </section>`;
