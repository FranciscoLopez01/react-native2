import "./App.css";
import { Button } from "react-bootstrap";

export default function App() {
  return (
    <header class="d-flex justify-content-center py-3">
      <nav>
        <div class="container">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}
