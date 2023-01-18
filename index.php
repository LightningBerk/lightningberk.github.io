<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Asa Fasching" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
    <meta
      name="keywords"
      content="Blender, Photography, Unity, Art, 3d Art, Hard-surface Modeling"
    />
    <meta name="description" content="About me page" />
    <title>Home</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <header>
      <section class="pb-4">
        <nav class="navbar bg-dark navbar-dark navbar-expand-sm">
          <div class="container-fluid">
            <a href="index.php" class="navbar-brand"
              ><img src="images/logo.png" alt="Site Logo" width="100" height="100" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
              <div class="navbar-nav nav-pills ms-auto">
                <a href="index.php" class="nav-link nav-item active"> Home</a>
                <a href="pages/about.php" class="nav-link nav-item">
                  My Work</a
                >
                <a href="pages/contact.php" class="nav-link nav-item">
                  Contact</a
                >
                <a href="pages/resume.php" class="nav-link nav-item">
                  Resume</a
                >
              </div>
            </div>
          </div>
        </nav>
      </section>
    </header>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="images/gigachad.JPG"
            class="d-block mx-lg-auto img-fluid img-thumbnail"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">About Me</h1>
          <p class="lead">
            Hello, my name is Asa Fasching. I am currently a senior in high
            school enrolled in the Computer Animation and Web Design second year
            program at the Essex Technical Center. I enjoy doing 3D
            modeling/texturing in Blender and Substance Painter, game design in
            Unreal Engine, and programming with Python and Lua. I've done 3D art
            for
            <a
              target="_blank"
              href="https://steamcommunity.com/id/LSDevAccount/myworkshopfiles/?appid=107410"
              >Legion Studios</a
            >, who develop a Star Wars mod for the game ARMA 3. Their mod
            currently has over 40,000 users. In 2022, a classmate and I won the
            SkillsUSA game design competition with a VR exploration game we made
            called Folia. We went on to earn 7th place at the national
            competition in Atlanta, Georgia. Some of my other hobbies include
            backcountry and alpine skiing, mountain biking, gaming, photography
            and working on my car
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              <a class="text-decoration-none text-white" href="pages/about.php"
                >My Work</a
              >
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              <a class="text-decoration-none text-dark" href="pages/resume.php"
                >Resume</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <?php include 'php/footer.php';?>
  </body>
</html>
