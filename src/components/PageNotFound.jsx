import React from "react";
import "./stylesheet/PageNotFound.css";
function PageNotFound() {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg"></div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>The page you are looking for not avaible!</p>

                  <a href="http://ibeto.excelmec.org/" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageNotFound;
