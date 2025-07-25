<template>
    <nav class="navbar navbar-expand-lg bg-body-transparance text-white">
    <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
     <ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#certificate">Certificate</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="d-flex justify-content-center">
  <button class="btn btn-transparent d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
  </button>
</div>
<div class="offcanvas-lg offcanvas-end bg-dark text-white" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Menu</h5>
    <div style="border-right:2px solid #fff; height:500px; margin-left:12px;"></div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link text-white" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#certificate">Certificate</a>
      </li>
    </ul>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
</div>
</nav>
</template>

<style scoped>
.navbar,
.navbar .nav-link,
.navbar .nav-link.active,
.navbar .nav-link.disabled {
    color: #fff !important;
}

/* nav underline */
.nav-underline .nav-link.active,
.nav-underline .nav-link:focus,
.nav-underline .nav-link:hover {
    color: #fff !important;
    border-bottom: 2px solid #8b0ec5 !important;
}
</style>