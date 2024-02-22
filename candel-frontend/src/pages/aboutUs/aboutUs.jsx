import HomeNavbar from "../component/HomeNavbar.jsx";

const AboutUs = () =>{
    return(
        <>
            <HomeNavbar/>
            <h1 className={"font-bold size-240px"}>About Us</h1>
            <section className="overflow-hidden">
                <div className="mx-auto max-w-5xl px-5 py-24">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                        <img
                            alt="Nike Air Max 21A"
                            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                            src="https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                                Nike
                            </h2>
                            <h1 className="my-4 text-3xl font-semibold text-black">Nike Air Max 21A</h1>
                            <div className="my-4 flex items-center">
          <span className="flex items-center space-x-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
            >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="ml-3 inline-block text-xs font-semibold">
              4 Reviews
            </span>
          </span>
                            </div>
                            <p className="leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem
                                amet repudiandae neque adipisci eum enim, natus illo inventore totam?
                            </p>
                            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                                <div className="ml-auto flex items-center">
                                    <span className="mr-3 text-sm font-semibold">Customize</span>
                                    <div className="relative">
                                        <select
                                            className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                            <option>8 UK</option>
                                            <option>9 UK</option>
                                            <option>10 UK</option>
                                        </select>
                                        <span
                                            className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
          <span className="title-font text-xl font-bold text-gray-900">
            ₹47,199
          </span>
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default AboutUs