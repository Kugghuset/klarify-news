'use strict'

import Vue from 'vue';
import template from './news-table.template.html'
import newsService from '../../services/news.service.js';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';
import moment from 'moment';
import _ from 'lodash';

Vue.use(VueResource);

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

const NewsTable = Vue.extend({
    template,
    props: {
        connectionOk: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    data: function() {

        newsService.getAllNews().then(function () {
            let news = storage.get('allNews');
            this.news = news;
        }.bind(this))
        .catch( err => {console.log(err)});

        let news = storage.get('allNews') || [];

        return {
            news: news,
        }
    },
    method: {
        getdate: function(value) {
            return moment(new Date(value)).isValid();
        },
    }
});

Vue.component('news-table', NewsTable)

export default NewsTable;