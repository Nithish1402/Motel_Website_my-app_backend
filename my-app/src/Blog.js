import React from "react";
import "./Blog.css";

function blog() {
  return (
    <div id="blogBody">
      <header>
        <h1 class="header">FACTS ABOUT MOTEL</h1>
      </header>
      <main>
        <div class="trapezoidal-box box1">
          <div class="emoji">🚗</div>
          <h2>Did You Know?</h2>
          <p>
            Motels originated in the 1920s as a convenient lodging option for
            motor travelers.
          </p>
        </div>

        <div class="trapezoidal-box box2">
          <div class="emoji">🏨</div>
          <h2>Fun Fact</h2>
          <p>
            Many motels feature distinctive mid-century modern designs with
            vibrant colors.
          </p>
        </div>

        <div class="trapezoidal-box box3">
          <div class="emoji">🚪</div>
          <h2>Travel Tip</h2>
          <p>
            Look for motels that allow you to park right outside your room for
            added convenience.
          </p>
        </div>

        <div class="trapezoidal-box box4">
          <div class="emoji">💵</div>
          <h2>Budget Friendly</h2>
          <p>
            Motels offer affordable lodging options without compromising
            comfort.
          </p>
        </div>

        <div class="trapezoidal-box box5">
          <div class="emoji">🏠</div>
          <h2>Local Charm</h2>
          <p>
            Many motels are family-owned, providing a unique and personalized
            experience.
          </p>
        </div>
      </main>
    </div>
  );
}

export default blog;