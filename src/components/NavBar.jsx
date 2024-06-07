import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">AddStudent</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Search">SearchStudent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Delete">DeleteStudent</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/ViewAll" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ViewStudent
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            <div className="container">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Anjalee</h5>
                                        <p class="card-text"></p>
                                        <a href="#" class="btn btn-primary">Click here</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="data:image/jpeg;base64,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"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Anna</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Click here</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE16u6vDpc_jzd5wyr9DFbRllQ8ezdRlSm8A&s"
                                        class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Harshitha</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Click here</a>
                                    </div>
                                </div>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWBDerVZ8eUeoVIRI4wv8KCYWHkuMr01Y8A&s" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Sneha</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dH-LDC74WqzULrbl7_EhSioGkt3aXX0Vew&s" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Theres</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Click here</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNkMJ8Ju6sWhNZEoqJK70NLlNjCw9JfW3jw&s" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Minna</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Click here</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
	
