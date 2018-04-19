<template>
  <section class="hero is-light is-fullheight">
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
              <a class="navbar-item" @click="viewInfo = true">
                <b-icon pack="fas" icon="info-circle" size="is-small" style="margin-right: 0.75em"></b-icon>Info
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <b-field :type="card_number.length > 0 ? type ? valid ? 'is-success' : 'is-warning' : 'is-danger' : ''">
          <b-input v-model="card_input" placeholder="Card Number" v-cleave="{ creditCard: true }" size="is-large" icon="credit-card"></b-input>
        </b-field>
        <b-collapse :open.sync="card_number.length > 0">
          <article :class="type ? valid ? 'message is-success' : 'message is-warning' : 'message is-danger'">
            <div class="message-body">
              <article class="media">
                <div class="media-left">
                  <figure class="image">
                    <span v-if="type !== null" class="icon is-large">
                      <i :class="`fab fa-5x fa-cc-${type.class}`"></i>
                    </span>
                    <span v-else class="icon is-large">
                      <i class="fas fa-5x fa-credit-card"></i>
                    </span>
                  </figure>
                  <br>
                  <strong>{{ type ? type.name : 'Invalid Card Number' }}</strong>
                  <br>
                  <small class="has-text-link" v-if="type !== null">
                    <a :href="type.url">Website</a>
                  </small>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="subtitle" v-if="valid">Valid {{ type.name }} card number!</p>
                    <p class="subtitle" v-else>Invalid card number!</p>
                    <table v-if="details !== null" class="table">
                      <thead>
                        <tr>
                          <th>Card Type</th>
                          <th>{{ type && type.name }} Brand</th>
                          <th>Prepaid?</th>
                          <th>Country</th>
                          <th>Bank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ details.type || 'Unknown' }}</td>
                          <td>{{ details.brand || 'Unknown' }}</td>
                          <td>{{ details.prepaid === null ? 'Unknown' : details.prepaid ? 'True' : 'False' }}</td>
                          <td>{{ details.country.name && `${details.country && details.country.emoji} ${details.country && details.country.name}` || 'Unknown' }}</td>
                          <td>
                            <a :href="`https://${details.bank.url}`" target="_blank">{{ details.bank && details.bank.name || 'Unknown' }}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <b-loading v-else :is-full-page="false" :active.sync="details"></b-loading>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </b-collapse>
      </div>
    </div>

    <b-modal :active.sync="viewInfo">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="@/assets/qr.png" alt="Image">
              </figure>
            </div>
            <div class="media-content" style="overflow: hidden">
              <p class="title is-4">The Creator</p>
              <p class="subtitle is-6" style="margin-bottom: 0!important;padding-bottom: 0!important">@MeTheCreator</p>
            </div>
          </div>

          <div class="content">
            <p class="title">credidate</p>
            <p class="subtitle">An online credit card validator</p>
            Made for the APCSP Create PT with
            <a href="https://nodejs.org"><span class="tag is-link">Node.js</span></a> 
            <a href="https://vuejs.org"><span class="tag is-link">Vue.js</span></a> 
            <a href="https://buefy.github.io"><span class="tag is-link">Buefy</span></a> 
            <a href="https://binlist.net"><span class="tag is-link">BinList</span></a> 
            and ❤️
            <br>
            <small>&copy; 2018 The Creator of This Application</small>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import { getType, isValid } from "../lib/ccard.js";
export default {
  data() {
    return {
      /* Input By User */
      card_input: "",

      /* Computed Card Information */
      type: null,
      valid: null,

      /* Retrieved from https://binlist.net */
      details: null,

      /* Used to determine when to show content */
      viewInfo: false
    };
  },
  methods: {
    async getCardInfo(number) {
      try {
        const response = await this.axios.get(
          `https://lookup.binlist.net/${number.slice(0, 6)}`,
          {
            headers: { "Accept-Version": "3", "X-Client": "Node.js 2.0.1" }
          }
        );
        return response.data;
      } catch (e) {}
    }
  },
  watch: {
    /* Validates the card number everytime the input is changed */
    card_number: async function() {
      if (this.card_number) 
        this.type = getType(this.card_number);

      if (this.type) 
        this.valid = isValid(this.card_number, this.type);

      if (this.valid)
        this.details = await this.getCardInfo(this.card_number);
      else
        this.details = null;
    },
  },
  computed: {
    /* Takes the raw input from the text box and removes whitespace */
    card_number() {
      return this.card_input.replace(/ /g, "");
    }
  }
};
</script>
