let Contact = `
<div class="md:flex md:flex-row md:items-center   ">
    <div class="pt-8 md:pt-24 md:my-20"></div>
    <div class="px-5 py-10 mb-6 md:w-1/2 md:mt-20">
        <div id="contact-title"
            class="text-2xl sm:text-3xl md:text-3xl sm:px-14   text-white uppercase font-LibreBaskervilleRegular  mb-5 mt-0">
            We'll call you back, answer your questions, and find solutions for any task.
        </div>
        <div id="contact-desc"
            class="text-lg sm:text-xl md:text-2xl sm:px-14 sm:leading-6 sm:font-normal leading-6 font-medium text-white font-SourceSans3Regular ">
            Discussing your project comes with no obligation: we'll share our sourcing and procurement expertise,
            explore implementation options for your ideas, and you can decide on cooperation.
        </div>
        <div class="mx-[10%]">
            <form id="contactForm" action="" method="post" class="my-5 flex flex-col space-y-5 w-auto mx-auto ">
                <input class="bg-transparent focus:outline-none my-2 py-2 px-4 border border-b-2 border-t-0 border-x-0"
                    type="text" name="from_name" id="from_name" placeholder="Your Name" required>
                <input class="bg-transparent focus:outline-none my-2 py-2 px-4 border border-b-2 border-t-0 border-x-0"
                    type="email" name="from_email" id="from_email" placeholder="Your Email Address" required>
                <input class="bg-transparent focus:outline-none my-2 py-2 px-4 border border-b-2 border-t-0 border-x-0"
                    type="tel" name="from_contact" id="from_contact" placeholder="Your Phone" minlength="10" required
                    title="Please enter a valid phone number with at least 10 digits">
                <button type="submit" class="text-left font-SourceSans3Regular hover:text-green-600 ">Send
                    Message</button>
            </form>
        </div>
        <div id="office"
            class="hidden sm:flex sm:flex-wrap md:flex-nowrap md:flex-col lg:flex-wrap lg:flex-col lg:ps-6  sm:items-baseline  md:items-start md:ps-14 sm:justify-start ms-10 sm:py-10 sm:px-4  ">
            <div id="contact-head-office" class="mb-5  ">
                <div class="text-lg sm:text-xl md:text-2xl sm:w-full my-3  text-white font-SourceSans3Regular uppercase">
                    Head Office
                </div>
                <div
                    class="text-base sm:text-lg sm:w-full  sm:font-normal   text-white font-SourceSans3Regular ">
                    Rm no. 13-A, 
                    Wing Kin Square No. 29, 
                    Jian she 6th Road, <br />
                    Guangzhou, China  <br />
                    +86 188 1880 5422, 
                    info@urbanface.in
                </div>
            </div>
            <div id="contact-india-office" class="mb-5">
                <div class="text-lg sm:text-xl md:text-2xl sm:w-full my-3  text-white font-SourceSans3Regular uppercase">
                    India Office
                </div>
                <div class="text-base sm:text-lg sm:w-full  sm:font-normal  text-white font-SourceSans3Regular">
                    46 Mahipalpur,
                    Delhi, India  <br />
                    +918802955060, 
                    info@urbanface.in
                </div>
            </div>
        </div>
    </div>
    <div id="contact-img" class="md:w-1/2 h-[100%] hidden md:flex  ">
        <img loading="lazy"
            src="https://res.cloudinary.com/daimmar0j/image/upload/v1721676899/contact_sbpzft_h3cagf.jpg"
            class="h-[100%] w-full object-cover  " alt="" />
    </div>
</div>
<!-- Mobile Mode -->
<section id="office" class="sm:hidden  ">
    <div class="px-5 mb-4  ">
        <div class="text-base sm:text-5xl sm:w-full sm:leading-[60px]  text-white font-SourceSans3Regular uppercase">
            Head Office
        </div>
        <div
            class="text-base sm:text-3xl sm:w-2/3 sm:leading-10 sm:font-normal leading-6 font-medium text-white font-SourceSans3Regular  ">
            Rm no. 13-A, 
            Wing Kin Square No. 29, <br />
            Jian she 6th Road, 
            Guangzhou, China  <br />
            +86 188 1880 5422,
            info@urbanface.in   
        </div>
    </div>
    <div class="px-5 mb-4">
        <div class="text-base sm:text-5xl sm:w-full sm:leading-[60px]  text-white font-SourceSans3Regular  uppercase">
            India Office
        </div>
        <div
            class="text-base sm:text-3xl sm:w-full sm:leading-10 sm:font-normal leading-6 font-medium text-white font-SourceSans3Regular ">
            46, Mahipalpur, 
            Delhi, India <br />
            +918802955060, 
            info@urbanface.in
        </div>
    </div>
</section>
`;