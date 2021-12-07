import styles from './Categories.module.css';

export default function Categories() {
    return (
        <ul className="list-unstyled ps-0 ">
            <li className="mb-1">
                        <button id={styles.pyramids}className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#pyramids-collapse" aria-expanded="false">
                            Pyramids
                        </button>
                        <div className="collapse" id="pyramids-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                                <li><a href="#" className="link-dark rounded">Item 4</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className=" mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#cubes-collapse" aria-expanded="false">
                            Cubes
                        </button>
                        <div className="collapse" id="cubes-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                                <li><a href="#" className="link-dark rounded">Item 4</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                                <li><a href="#" className="link-dark rounded">Item 4</a></li>
                            </ul>
                        </div>
                    </li>                    
                    <li className=" mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#spheres-collapse" aria-expanded="false">
                            Spheres
                        </button>
                        <div className="collapse" id="spheres-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#cylinders-collapse" aria-expanded="false">
                            Cylinders
                        </button>
                        <div className="collapse" id="cylinders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#prisms-collapse" aria-expanded="false">
                            Prisms
                        </button>
                        <div className="collapse" id="prisms-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                                <li><a href="#" className="link-dark rounded">Item 4</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#nsided-collapse" aria-expanded="false">
                            N-sided
                        </button>
                        <div className="collapse" id="nsided-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Item 1</a></li>
                                <li><a href="#" className="link-dark rounded">Item 2</a></li>
                                <li><a href="#" className="link-dark rounded">Item 3</a></li>
                                <li><a href="#" className="link-dark rounded">Item 4</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed " data-bs-toggle="collapse"
                            data-bs-target="#other-collapse" aria-expanded="false">
                            Others
                        </button>
                        <div class="collapse" id="other-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Item 1</a></li>
                                <li><a href="#" class="link-dark rounded">Item 2</a></li>
                                <li><a href="#" class="link-dark rounded">Item 3</a></li>
                                <li><a href="#" class="link-dark rounded">Item 4</a></li>
                                <li><a href="#" class="link-dark rounded">Item 1</a></li>
                                <li><a href="#" class="link-dark rounded">Item 2</a></li>
                                <li><a href="#" class="link-dark rounded">Item 3</a></li>
                                <li><a href="#" class="link-dark rounded">Item 4</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
    ) 
}