<template>
  <div class="container mt-5">
    <div data-aos="zoom-in-right">
      <h1 class="py-4 text-end">=Projects=</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      
      <div v-for="project in projects" :key="project.id" class="col">
        <div class="zoom">
          <div data-aos="zoom-in-right">
            <div class="card bg-custom text-white position-relative h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                
                <!-- INI YANG DIUBAH: tag dibungkus div -->
                <div class="d-flex flex-wrap gap-1 mb-2">
                  <button 
                    v-for="tag in project.tags" 
                    :key="tag" 
                    type="button" 
                    class="btn btn-purple text-nowrap btn-sm"
                  >
                    {{ tag }}
                  </button>
                </div>
                
                <p class="card-text mt-2">{{ project.desc }}</p>
                
                <!-- INI YANG DIUBAH: hapus mb-5 dari class -->
                <a 
                  v-if="project.demo" 
                  class="me-3" 
                  :href="project.demo" 
                  target="_blank" 
                  role="button"
                >
                  View Project 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </a>
                
                <!-- INI YANG DIUBAH: hapus mb-5 ms-1 dari class -->
                <a 
                  v-if="project.repo" 
                  :href="project.repo" 
                  target="_blank" 
                  role="button"
                >
                  Repository
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" class="bi bi-github" style="margin-bottom: 5;" viewBox="0 0 16 16"> 
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/> 
  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Admin Barbershop',
    image: '/photo1.PNG',
    tags: ['HTML', 'Javascript', 'PHP', 'Bootstrap', 'CSS'],
    desc: 'A website admin dashboard for with CRUD using PHP for my thesis.',
    demo: null,
    repo: 'https://github.com/reynato25/Barbershop'
  },
  {
    id: 2,
    title: 'Weather App',
    image: '/photo2.PNG',
    tags: ['HTML', 'Javascript', 'CSS', 'Bootstrap', 'API'],
    desc: 'A website weather app for assignment collage using API from OpenWeatherMap.',
    demo: 'https://web-weather-reynato.vercel.app/',
    repo: 'https://github.com/reynato25/Web-Weather'
  },
  {
    id: 3,
    title: 'Web Barbershop',
    image: '/photo3.PNG',
    tags: ['Javascript', 'React', 'Bootstrap', 'CSS'],
    desc: 'A website barbershop.',
    demo: 'https://customer-barbershop.vercel.app/',
    repo: 'https://github.com/reynato25/Customer-Barbershop'
  },
  {
    id: 4,
    title: 'iMOVIES Website Streaming',
    image: '/capture5.PNG',
    tags: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'Vue.js', 'Axios', 'API'],
    desc: 'A streaming website for movies with database API from OMDb API.',
    demo: 'https://i-movie-website-watch-videos-online.vercel.app/',
    repo: 'https://github.com/reynato25/iMOVIE-Website-Watch-Videos-Online'
  },
  {
    id: 5,
    title: 'Web News',
    image: '/Capture4.PNG',
    tags: ['HTML', 'CSS'],
    desc: 'A website news for my assigment collage.',
    demo: 'https://websitenews-reynato.vercel.app/',
    repo: 'https://github.com/reynato25/websitenews-reynato'
  },
  
]
</script>


<style scoped>
.card-img-top {
  height: 350px; 
  object-fit: cover;
  width: 100%;
}


.card-text {
  min-height: 72px; 
}

.tag-wrapper {
  min-height: 60px;
}
</style>