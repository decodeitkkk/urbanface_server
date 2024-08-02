let PfHead = (hData) => `
${hData.map(
    (item) => `


<div class="h-screen sm:h-screen sm:block">
<div id="bgImg"
    class="bg-[url('${item.image}')] h-full w-full bg-center bg-cover flex flex-row items-end"
>
    <div
        class="text-xl sm:text-5xl sm:px-14 sm:leading-8 leading-7 text-white font-WorkSans400 uppercase mt-0 align-text-bottom bg-gradient-to-t from-black /20 w-full py-2 sm:py-6"
    >
        <div
            class="text-center font-bold text-3xl sm:px-14 sm:text-5xl"
        >
            ${item.head}
        </div>

        <div
            class="px-5 py-6 sm:flex sm:flex-row sm:gap-x-2 sm:justify-between"
        >
            ${item.desc}   
        </div>
    </div>
</div>
</div>`
)}`;

/*

<button
                class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
            >
                <a href="#"> architectural design</a>
            </button>
            <button
                class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
            >
                <a href="#"> residential INTERIOR</a>
            </button>
            <button
                class="uppercase font-WorkSans200 text-lg font-medium px-8 py-2 my-4 sm:mx-2 w-full underline underline-offset-8"
            >
                <a href="#"> commercial interior</a>
            </button>
             */
