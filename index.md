<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- STYLES -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
    />
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/main.css" rel="stylesheet" />
    <title>NEROS Pharmaceuticals Ltd</title>
  </head>
  <body>
    <!-- Header section -->

    <header class="fixed-top">
      <section>
        <!-- Support line section -->

        <div class="text-white py-1 support-section">
          <div class="container">
            <div class="row d-flex align-items-center justify-content-between">
              <div>
                <span class="font-weight-bold mr-2">Support line:</span
                >(+234)1-7414013 | 8924746 | 803 328 7447
              </div>
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link p-0 mr-3" href="#"
                    ><i class="fab fa-facebook-f text-white"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0 mr-3" href="#">
                    <i class="fab fa-twitter text-white"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0 mr-3" href="#">
                    <i class="fab fa-linkedin-in text-white"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="#">
                    <i class="fab fa-instagram text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <!-- Navbar section -->

        <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-white">
          <div class="container p-0">
            <a class="navbar-brand" href="index.html"
              ><img
                src="assets/images/brand-logo.png"
                width="200"
                alt="Brand logo"
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto text-dark">
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold mr-4" href="index.html"
                    >Home <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mr-4 text-dark" href="#"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mr-4 text-dark" href="#"
                    >Our Products</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mr-4 text-dark" href="#"
                    >Research & Development</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mr-4 text-dark" href="#"
                    >Media</a
                  >
                  <!-- This can have CSR, Blogs and Events -->
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold mr-4 text-dark" href="#"
                    >Careers</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold text-dark" href="#"
                    >Contact Us</a
                  >
                </li>
                <!-- <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li> -->
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>

    <main>
      <!-- Carousel section -->

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/images/banner.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="display-4">Welcome</h3>
              <p class="lead">
                NEROS Pharmaceuticals Ltd. is one of the fastest growing
                pharmaceutical companies in Nigeria, incorporated as a limited
                liability company, on the 5th of August, 1986.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/banner-2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                Second slide label
                <div class="dropdown-divider"></div>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/banner.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- Info section -->

      <section>
        <div class="container px-0 py-5">This is the information section</div>
      </section>

      <!-- Subscription section -->

      <section class="subscription">
        <div class="container px-0 py-5">
          <h2 class="text-center mb-3">Subscribe for our newsletter</h2>
          <form class="row">
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-center">
                <p class="mr-3">
                  Get the latest from <strong>NEROS</strong> right to your
                  inbox.
                </p>
                <div class="form-group mr-3">
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn text-dark">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>

    <!-- Footer section -->

    <footer>
      <div class="container px-0 py-5">
        <div class="row">
          <div class="col-md-3">
            <h6 class="mb-4">Contact us</h6>
            <hr class="divider" />
            <div class="row d-flex text-muted">
              <div class="col-2 pr-0">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="col-10 pl-0">
                <p>
                  NEROS Pharmaceuticals Limited <br />
                  36, Akin Adesola Street, <br />
                  Victoria Island,<br />
                  P.O Box: 7888, <br />
                  Marina, <br />
                  Lagos. <br />
                  Nigeria.
                </p>
              </div>
            </div>
            <div class="row d-flex text-muted">
              <div class="col-2 pr-0">
                <i class="fas fa-phone"></i>
              </div>
              <div class="col-10 pl-0">
                <p>(+234)1-7414013, 8924746, 8033287447</p>
              </div>
            </div>
            <div class="row d-flex text-muted">
              <div class="col-2 pr-0">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="col-10 pl-0">
                <p>
                  <a class="text-muted" href="mailto:info@nerospharma.com"
                    >info@nerospharma.com</a
                  >
                  <br />
                  <a class="text-muted" href="mailto:polyneros@yahoo.com"
                    >polyneros@yahoo.com</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <h6 class="mb-4">Links</h6>
            <hr class="divider" />
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a class="nav-link active disabled" href="index.html">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#">About Us</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#">Our Products</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#">Our Products</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#"
                  >Research & Development</a
                >
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#">Media</a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-muted" href="#">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h6 class="mb-4">News and Updates</h6>
            <hr class="divider" />
            <p class="text-muted">
              There are no updates at the moment. Subscribe for our newsletter
              to get the latest from us right to your inbox.
            </p>
          </div>
          <div class="col-md-3">
            <h6 class="d-flex justify-content-end mb-4">Connect with us</h6>
            <hr class="divider" />
            <ul class="nav d-flex justify-content-end social-links">
              <li class="nav-item">
                <a class="nav-link p-0 mr-3" href="#"
                  ><i class="fab fa-facebook-square text-muted"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 mr-3" href="#">
                  <i class="fab fa-twitter text-muted"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 mr-3" href="#">
                  <i class="fab fa-linkedin-in text-muted"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0" href="#">
                  <i class="fab fa-instagram text-muted"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid pb-3">
        <hr class="line" />
        <div class="row d-flex justify-content-center">
          <div class="text-muted">
            <i class="far fa-copyright mr-1"></i
            ><span id="copyright" class="mr-1"></span>NEROS Pharmaceuticals Ltd.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>

    <!-- SCRIPTS -->
    <script type="text/javascript" src="assets/js/main.js"></script>

    <!-- JQuery -->
    <script type="text/javascript" src="assets/js/jquery-3.5.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="assets/js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
  </body>
</html>
