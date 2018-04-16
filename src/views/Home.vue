<template>
  <section class="hero is-light is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <div class="title" style="font-weight: bold;letter-spacing: 2px;">
                credidate
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
        <b-field>
          <b-input v-model="card_number" placeholder="Card Number" v-cleave="{ creditCard: true }" size="is-large" icon-pack="far" icon="credit-card"></b-input>
        </b-field>
        <b-collapse :open.sync="hasInfo">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <b-icon pack="fab" icon="cc-amex" v-show="type == 'American Express'"></b-icon>
                  <b-icon pack="fab" icon="cc-visa" v-show="type == 'VISA'"></b-icon>
                  <b-icon pack="fab" icon="cc-diners-club" v-show="type == 'Diners Club'"></b-icon>
                  <b-icon pack="fab" icon="cc-mastercard" v-show="type == 'MasterCard'"></b-icon>
                  <b-icon pack="fab" icon="cc-jcb" v-show="type == 'JCB'"></b-icon>
                  <b-icon pack="fab" icon="cc-discover" v-show="type == 'Discover'"></b-icon>
                  <b-icon pack="fas" icon="credit-card" v-show="!type"></b-icon>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong>
                    <small>@johnsmith</small>
                    <small>31m</small>
                    <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" aria-label="reply">
                      <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                      <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="like">
                      <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </b-collapse>
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
import { getType, isValid } from "../lib/ccard.js";
export default {
  data() {
    return {
      card_number: null,
      type: null,
      hasInfo: false
    };
  },
  watch: {
    card_number: function() {
      if (this.card_number) this.type = getType(this.card_number);

      this.hasInfo = this.type && !!this.card_number;
      console.log(`${this.type}: ${this.card_number}`);
    }
  }
};
</script>
