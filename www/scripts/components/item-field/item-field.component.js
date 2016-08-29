'use strict'

import Vue from 'vue';
import template from './item-field.template.html';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const ItemField = Vue.extend({
  template,
  props: {
    content: {
      type: null,
    },
    item: {
      type: Object,
    },
    fieldtype: {
      type: String,
    },
    dateTo: {
      type: null,
    },
    dateFrom: {
      type: null,
    },
  },
  methods: {
    update: function (event) {
      console.log(this.item);
      let url = '/api/news/update/' + this.item.ID;
      Vue.http.put(url, this.item).then((response) => {
        this.connectionOk = true;
      }, (response) => {
        this.connectionOk = false;
      });
    },
  },
});

Vue.component('item-field', ItemField)

export default ItemField;