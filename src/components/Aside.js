import Categories from "./Categories";

export default function aside() {
    return (
        <div class="col-2 border-end ">
                <h4 class="fw-semibold my-4 text-center">Categories</h4>
                <Categories/>
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
    )
}