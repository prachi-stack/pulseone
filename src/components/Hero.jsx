import "./hero.css"
export default function HeroSection() {
  return (
    <div className="header-welcome2">
      <div className="header-banner2"><img
        src="https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves.png"
        loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 97vw, 100vw"
        srcSet="https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-500.png 500w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-800.png 800w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-1080.png 1080w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-1600.png 1600w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-2000.png 2000w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves-p-2600.png 2600w, https://cdn.prod.website-files.com/5e7dd8d070cf6c6a828d95b4/62a89739d88f2c4a82de3d9f_Green%20waves.png 2744w"
        alt="" className="green-wave-bg" />
        <div className="header-banner-div banner-info">
          <div className="header-banner-txt-div">
            <h1 className="home-header-nav">The <span className="circle-txt">Future</span> Of <br className="" />Healthcare <br className="" />Access</h1>
            <h2 className="heading-7">We're building a connected <br className="" />system of care</h2>
            <p className="paragraph-6">At PulseOne, we believe that quality healthcare should not <br /> depend on where you live, or how much money you have.</p>
            <div>
              <button className="btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="header-banner-div"><img
          src="/heroimg.png"
          loading="lazy" sizes="(max-width: 767px) 83vw, (max-width: 991px) 560px, (max-width: 1279px) 434px, 536px"
          alt="" className="header-banner-img2" /></div>
      </div>
    </div>
  );
}
