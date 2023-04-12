import React  from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({currentPage, handlePageChange}) {
  return (
    <>
    <div className="">
      <h3 className="m-3 display-5">Kevin Hernandez</h3>
    </div>
    <div className=" d-flex justify-content-end">
        <nav className=" navbar navbar-expand-lg navbar-light ">
  <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="pb-2 menu-icon navbar-toggler-icon"></span>
  </button>
  <div className="navbar collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="text-center h3 navbar-nav w-100">
    <a onClick={() => handlePageChange('about')}  className={currentPage === 'about' ? 'nav-item nav-link active' : 'nav-link'} href="#about"><i class="fa-solid fa-user"></i>About</a>
    <a onClick={() => handlePageChange('portfolio')}  className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio"><i class="fa-solid fa-diagram-project"></i>Portfolio</a>
    <a onClick={() => handlePageChange('resume')}  className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} href="#resume"><i class="fa-solid fa-id-card"></i>Resume</a>
    <a onClick={() => handlePageChange('contact')}  className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} href="#contact"><i class="fa-sharp fa-solid fa-address-card"></i>Contact</a>
    </div>
  </div>
</nav>
    </div>
</>
  );
}

export default Header;
