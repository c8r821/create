<template>
  <section class="hero is-light is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <div class="title">
                Credidate
              </div>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                <b-icon pack="fas" icon="info-circle" size="is-small" style="margin-right: 0.75em"></b-icon>Info
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <form action="">
          <b-field>
            <b-input placeholder="Card Number" size="is-large" icon-pack="far" icon="credit-card">
            </b-input>
          </b-field>
        </form>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        <div class="container">
          <div class="panel">
            <div class="panel-heading">
              &copy; 2018 Carter Grimmeisen. Made for the APCSP Create PT with Node.js and
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      card_number: null
    }
  }

</script>
