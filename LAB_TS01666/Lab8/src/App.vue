<template>
  <div id="app">
    <!-- Navbar ngang dính đầu -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">MyBlog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" :class="{ active: $route.path === '/' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blogs" :class="{ active: $route.path === '/blogs' }">Blogs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" :class="{ active: $route.path === '/profile' }">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard" :class="{ active: $route.path === '/dashboard' }">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active bg-success text-white rounded px-3" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Nội dung chính, offset cho fixed navbar -->
    <main class="pt-5 pb-5"> <!-- pt-5 = padding-top 3rem cho navbar height -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Navbar custom */
.navbar-brand {
  font-size: 1.5rem;
  color: #42b983 !important;
}

.nav-link {
  color: rgb(25, 2, 2) !important;
  padding: 10px 20px !important;
  border-radius: 6px;
  transition: all 0.2s;
  margin: 0 5px;
}

.nav-link:hover {
  background-color: rgba(225, 131, 209, 0.982);
}

.nav-link.active {
  background-color: #e147c2 !important;
}

/* Main content */
main {
  min-height: 100vh;
}
</style>