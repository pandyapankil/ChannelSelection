import Vue from "vue";
import {Data} from "./data";

new Vue({
    el: '#app',
    data: {
        search_query: '',
        channels: {
            rows: Data.getChannels()
        },
        cart: {
            rows: [
            ]
        },
        cart_active: false,
        is_ascending: false,
        sort_column: '',
        current_page: 1,
        elements_per_page: 15,
        cart_duplicate: {
            rows: [
                {name: "", price: 0}
            ]
        },
        channels_duplicate: {
            rows: [
                {name: "", price: 0}
            ]
        },
        data_length: 0
    },
    methods: {
        "sort_columns" : function (col: string) {
            if (this.sort_column === col) {
                this.is_ascending = !this.is_ascending;
            } else {
                this.is_ascending = true;
                this.sort_column = col;
            }

            let isAscending = this.is_ascending;
            let data = (this.cart_active ? this.cart_duplicate : this.channels_duplicate).rows;
            data.sort((a: any, b: any) => {
                if (a[col] > b[col]) {
                    return isAscending ? 1 : -1;
                } else if (a[col] < b[col]) {
                    return isAscending ? -1 : 1;
                }
                return 0;
            });
        },
        "num_pages": function num_pages() {
            return Math.ceil(this.data_length / this.elements_per_page);
        },
        "get_rows": function get_rows() {
            let data: any[] = (this.cart_active ? this.cart_duplicate : this.channels_duplicate).rows;
            const search_query = this.search_query && this.search_query.toLowerCase();
            data = data.filter(function (row) {
                return Object.keys(row).some(function (key) {
                    return row[key].toString().toLowerCase().indexOf(search_query) > -1
                })
            });

            this.data_length = data.length;

            let start = (this.current_page-1) * this.elements_per_page;
            let end = start + this.elements_per_page;
            return data.slice(start, end);;
        },
        "change_page": function change_page(page: number) {
            this.current_page = page;
        },
        "activate": function (activateCart: boolean) {
            const case1 = activateCart && !this.cart_active;
            const case2 = (!activateCart && this.cart_active);
            if (case1 || case2) {
                this.is_ascending = false;
                this.sort_column = '';
                this.cart_active = !this.cart_active;
                if (case1) {
                    this.channels_duplicate = this.channels;
                } else {
                    this.cart_duplicate = this.cart;
                }
            }
        }
    },
    beforeMount() {
        this.channels_duplicate = this.channels;
        this.cart_duplicate = this.cart;
        this.data_length = (this.cart_active ? this.cart_duplicate : this.channels_duplicate).rows.length;
    },
    computed: {
        "columns": function columns() {
            if (this.channels.rows.length == 0) {
                return [];
            }
            return Object.keys(this.channels.rows[0]);
        },
    }
});

