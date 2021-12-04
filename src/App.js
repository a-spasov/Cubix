import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

          <img src="cubixLogo.jpg" alt="cubixlogo" />


          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
        </header>
        <div class="row">
          <div class="col-2">
            <h4 class="fw-semibold">Categories</h4>

            <ul class="list-unstyled ps-0">
              <li class="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed border-bottom" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                  Pyramids
                </button>
                <div class="collapse" id="home-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Subcategory 1</a></li>
                    <li><a href="#" class="link-dark rounded">Subcategory 2</a></li>
                    <li><a href="#" class="link-dark rounded">Subcategory 3</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed border-bottom" data-bs-toggle="collapse" data-bs-target="#cubes-collapse" aria-expanded="false">
                  Cubes
                </button>
                <div class="collapse" id="cubes-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Subcategory 1</a></li>
                    <li><a href="#" class="link-dark rounded">Subcategory 2</a></li>
                    <li><a href="#" class="link-dark rounded">Subcategory 3</a></li>
                  </ul>
                </div>
              </li>
              <li class=" mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed border-bottom" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Spheres
                </button>
                <div class="collapse" id="dashboard-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Overview</a></li>
                    <li><a href="#" class="link-dark rounded">Weekly</a></li>
                    <li><a href="#" class="link-dark rounded">Monthly</a></li>
                    <li><a href="#" class="link-dark rounded">Annually</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed border-bottom" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                  Orders
                </button>
                <div class="collapse" id="orders-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">New</a></li>
                    <li><a href="#" class="link-dark rounded">Processed</a></li>
                    <li><a href="#" class="link-dark rounded">Shipped</a></li>
                    <li><a href="#" class="link-dark rounded">Returned</a></li>
                  </ul>
                </div>
              </li>
              <li class="border-top my-3"></li>
            </ul>
            <h4 class=" fw-semibold">Tags</h4>
            <div class="container">
              <div class="row">
              <a class="btn btn-primary" href="#" role="button">Pyramids</a>
              <a class="btn btn-primary" href="#" role="button">Cubes</a>

              </div>
              <div class="row">

                <button type="button" class="btn btn-outline-secondary">Cylinders</button>
                <button type="button" class="btn btn-outline-secondary">Spheres</button>
                <button type="button" class="btn btn-outline-secondary">Shapeshifting</button>

              </div>

            </div>
            <div class="row">
              <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Search for puzzle by name..." aria-label="Search" />
              </form>
              <p>If you have a puzzle but don't know its name, then you can look at the
                <button type="button" class="btn btn-outline-secondary">Graphical overview</button>
              </p>
            </div>
          </div>
          <div class="col-9 offset-1">
            <h1>Sidebar #08</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
