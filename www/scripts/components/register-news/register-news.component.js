'use strict'

import Vue from 'vue';
import template from './register-news.template.html';
import newsService from '../../services/news.service.js';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);


// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

const RegisterNews = Vue.extend({
  template,
  props: {
    allnews: {
      type: Array,
    },
  },
  data: function() {
    return {
        news: '',
        name: '',
        date: new Date(),
    }
  },
  methods: {
    post: function (event) {
      let item = {
        "Name(s)": this.name,
        "Good News": this.news,
        "Date": this.date,
        "isDeleted": false
      };
      let url = '/api/news/create/';
      Vue.http.put(url, item).then((response) => {
        this.connectionOk = true;
        item.ID = response.data.ID;
        this.allnews.push(item);
        this.$data = initialState()
      }, (response) => {
        this.connectionOk = false;
      });
    }
  },
});

// outside of the component:
function initialState (){
  return {
    name: '',
    news: '',
    date: new Date(),
  }
}

Vue.component('register-news', RegisterNews)

export default RegisterNews;