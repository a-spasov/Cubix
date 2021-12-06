import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div class="row">

           
            <div class="col-2 border-end ">
                <h4 class="fw-semibold my-4 text-center">Categories</h4>
                <ul class="list-unstyled ps-0 ">
                    <li class=" mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#cubes-collapse" aria-expanded="false">
                            Cubes
                        </button>
                        <div class="collapse" id="cubes-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                <li><a href="#" class="link-dark rounded">Weekly</a></li>
                                <li><a href="#" class="link-dark rounded">Monthly</a></li>
                                <li><a href="#" class="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#pyramids-collapse" aria-expanded="false">
                            Pyramids
                        </button>
                        <div class="collapse" id="pyramids-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class=" mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#spheres-collapse" aria-expanded="false">
                            Spheres
                        </button>
                        <div class="collapse" id="spheres-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                <li><a href="#" class="link-dark rounded">Weekly</a></li>
                                <li><a href="#" class="link-dark rounded">Monthly</a></li>
                                <li><a href="#" class="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#cylinders-collapse" aria-expanded="false">
                            Cylinders
                        </button>
                        <div class="collapse" id="cylinders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#prisms-collapse" aria-expanded="false">
                            Prisms
                        </button>
                        <div class="collapse" id="Prisms-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#other-collapse" aria-expanded="false">
                            Other
                        </button>
                        <div class="collapse" id="other-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="row border-bottom">
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" class="form-control form-control-dark my-2"
                            placeholder="Search..." aria-label="Search" />
                    </form>
                    <p class="fst-italic fw-light my-2 text-center">If you have a puzzle but don't know its name, then you can look at the
                        <button type="button" class="btn btn-outline-secondary my-3 mx-auto">Graphical overview</button>
                    </p>
                </div>
                <div class="row border-bottom">
                    <h4 class="fw-semibold mt-4 mb-4 text-center">Cubix in numbers</h4>
                    <ul id="statistic" class="list-unstyled ps-0 pb-1">
                        <li>
                            <button type="button" class="btn">
                                Puzzles<span class="badge bg-secondary ms-2">264</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">
                                Solutions<span class="badge bg-secondary ms-2">113</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">
                                Collections<span class="badge bg-secondary ms-2">48</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">
                                Items for sale<span class="badge bg-secondary ms-2">64</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">
                                Users <span class="badge bg-secondary ms-2">77</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="row border-bottom">
                    <h4 class="fw-semibold mt-4 mb-4 text-center">Contact us</h4>
                    <form class="mt-1 mb-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text" ><i class="fas fa-at"></i></span>
                            <input type="text" class="form-control" placeholder="e-mail..." aria-label="e-mail" />
                        </div>
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text fs-7"><i class="fas fa-align-justify"></i></span>
                            <textarea rows="4" class="form-control" aria-label="With textarea" placeholder="Your text..."></textarea>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" class="btn btn-secondary text-end">Send</button>
                        </div>
                    </form>                  
                </div>               
            </div>
            
            <div class="col-10 ">
                
                <div class="mt-4 p-5 position-relative overflow-hidden bg-secondary text-white rounded">
                    <i id="puzzle" class="fas fa-dice-d20"></i>

                    <div class="row">
                        <div class="col-2 mb-3">
                            <h1 class="border-bottom">Puzzles</h1>
                        </div>
                    </div>                        
                    <div id="puzzles" class="row d-flex justify-content-around ">
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ids.si.edu/ids/deliveryService?id=NMAH-2006-21156&max=1000" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Megaminx</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center  ">
                            <img src="https://ae01.alicdn.com/kf/HTB1zR_sPmzqK1RjSZPcq6zTepXa2/iPiggy-Mirror-Cube-3x3-Speed-Cube-Unequal-Puzzle-Silver-Black-57mm.jpg_Q90.jpg_.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Mirror cube</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://i.ebayimg.com/images/g/YowAAOSw~6BevxDU/s-l400.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Babylon tower</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ids.si.edu/ids/deliveryService?id=NMAH-2006-21156&max=1000" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Megaminx</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ae01.alicdn.com/kf/HTB1zR_sPmzqK1RjSZPcq6zTepXa2/iPiggy-Mirror-Cube-3x3-Speed-Cube-Unequal-Puzzle-Silver-Black-57mm.jpg_Q90.jpg_.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Mirror cube</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center">
                            <img src="https://i.ebayimg.com/images/g/YowAAOSw~6BevxDU/s-l400.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Babylon tower</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ids.si.edu/ids/deliveryService?id=NMAH-2006-21156&max=1000" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Megaminx</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ae01.alicdn.com/kf/HTB1zR_sPmzqK1RjSZPcq6zTepXa2/iPiggy-Mirror-Cube-3x3-Speed-Cube-Unequal-Puzzle-Silver-Black-57mm.jpg_Q90.jpg_.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Mirror cube</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://i.ebayimg.com/images/g/YowAAOSw~6BevxDU/s-l400.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Babylon tower</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        <div class="col-2 card bg-light text-dark p-0 text-wrap mt-4 mx-2 border-dark align-items-center ">
                            <img src="https://ae01.alicdn.com/kf/HTB1zR_sPmzqK1RjSZPcq6zTepXa2/iPiggy-Mirror-Cube-3x3-Speed-Cube-Unequal-Puzzle-Silver-Black-57mm.jpg_Q90.jpg_.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Mirror cube</h5>
                              <p class="card-text fst-italic text-secondary">Category name</p>
                              <a href="#" class="btn btn-primary bottom">Details</a>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
           
            <button onclick="topFunction()" id="goTop" type="button" class="btn btn-outline-danger fw-bold" >
                <i class="fas fa-chevron-up"></i>TOP
            </button>
        </div>


      </div>
    </div>
  );
}

export default App;
