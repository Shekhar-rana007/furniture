// import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-10  md:block">
      <div className="container">
        <div className="footer-contain-section border-b border-ruby-gamma border-dashed pb-6 mb-8">
          <div className="furniture-rental mb-6">
            <h2 className="text-xl leading-8 font-medium text-ruby-alpha mb-2">Furniture Rental: An Affordable and Flexible Option</h2>
            <p className="text-base leading-6 font-normal text-ruby-beta">Are you looking for a cost-effective and flexible way to furnish your home or office? Furniture rental may be the solution you have been searching for. Leelu Chacha, a leading furniture rental company, offers a wide range of home and office furniture for rent online, through their user-friendly furniture rental app.</p>
          </div>

          <div>
            <a id="show-more">Show More</a>
            <a id="show-less" className="hidden">Show Less</a>
          </div>
        </div>
        <div className="footer-hyperlinks flex flex-wrap justify-between border-b border-ruby-gamma border-dashed pb-6">
          <div className="Categories flex flex-wrap basis-[220px] content-start">
            <h2 className="text-lg leading-6 font-medium text-ruby-alpha mb-4 w-full">Categories</h2>
            <ul className="w-full">
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="All" target="_self" rel="noopener">All</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="Home Furniture" target="_self" rel="noopener">Home Furniture</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="Appliances" target="_self" rel="noopener">Appliances</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="Office Furniture" target="_self" rel="noopener">Office Furniture</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="Combos" target="_self" rel="noopener">Combos</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" aria-label="Furniture Sale" rel="noopener">Furniture Sale</a>
              </li>
            </ul>
          </div>
          <div className="Cityfurnish flex flex-wrap basis-[220px] content-start">
            <h2 className="text-lg leading-6 font-medium text-ruby-alpha mb-4 w-full">Cityfurnish</h2>
            <ul className="w-full">
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="About Us" rel="noopener">About Us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Refer a Friend" rel="noopener">Refer a Friend</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Career" rel="noopener">Career</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Contact Us" rel="noopener">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="Information flex flex-wrap basis-[220px] content-start">
            <h2 className="text-lg leading-6 font-medium text-ruby-alpha mb-4 w-full">Information</h2>
            <ul className="w-full">
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Blog" rel="noopener">Blog</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="FAQ" rel="noopener">FAQ</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Sample Rental Agreement" rel="noopener">Sample Rental Agreement</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Benefits" rel="noopener">Benefits</a>
              </li>
            </ul>
          </div>
          <div className="Policies flex flex-wrap basis-[220px] content-start">
            <h2 className="text-lg leading-6 font-medium text-ruby-alpha mb-4 w-full">Policies</h2>
            <ul className="w-full">
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Privacy Policy" rel="noopener">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-base leading-6 font-normal text-ruby-beta hover:text-pearl-alpha" target="_self" aria-label="Terms &amp; Conditions" rel="noopener">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="Need-help flex flex-wrap basis-[286px] content-start">
            <h2 className="text-lg leading-6 font-medium text-ruby-alpha mb-4 w-full">Need Help</h2>
            <ul className="w-full">
              <li className="mb-4">
                <a href="telephone no " className="flex items-center text-base leading-6 font-medium text-ruby-alpha hover:text-pearl-alpha">
                  <span className="material-symbols-outlined mr-1.5">call</span>
                  <span>080-5241700 (09AM to 09PM)</span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-base leading-6 font-medium text-ruby-alpha hover:text-pearl-alpha">
                  <span className="material-symbols-outlined mr-1.5">mail</span>
                  <span>hello@leeluchahcha.com</span>
                </a>
              </li>
              <li className="mb-4">
                <ul className="flex items-center justify-between">
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Facebook" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/facebook.svg)' }}></a>
                  </li>
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Youtube" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/youtube.svg)' }}></a>
                  </li>
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Instagram" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/instagram.svg)' }}></a>
                  </li>
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Linkedin" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/linkedin.svg)' }}></a>
                  </li>
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Twitter" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/twitter.svg)' }}></a>
                  </li>
                  <li>
                    <a href="#" className="bg-no-repeat bg-contain w-8 h-8 inline-block" aria-label="Pinterest" rel="noopener" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/pinterest.svg)' }}></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer