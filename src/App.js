import './App.css';
import Header from './components/Header';
import Aside from './components/Aside'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div class="row">
            <Aside/>
      
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
