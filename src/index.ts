import Vue from "vue";

new Vue({
    el: '#app',
    data: {
        channels: {
            rows: [
                {id: 1, name: "Chandler Bing", phone: '305-917-1301', profession: 'IT Manager'},
                {id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist'},
                {id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
                {id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef'},
                {id: 5, name: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor'},
                {id: 6, name: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse'}
            ]
        },
        cart: {
            rows: [
                {id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist'},
                {id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
                {id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef'},
            ]
        },
        cartActive: false,
        isAscending: false,
        sortColumn: '',
        currentPage: 1,
        elementsPerPage: 3
    },
    methods: {
        "sortColumns" : function (cartOrChannels: string, col: string) {
            if (this.sortColumn === col) {
                this.isAscending = !this.isAscending;
            } else {
                this.isAscending = true;
                this.sortColumn = col;
            }

            let isAscending = this.isAscending,
                data: any = this.channels;
            if (cartOrChannels.toLowerCase() == 'cart') {
                data = this.cart;
            }
            data.rows.sort((a: any, b: any) => {
                if (a[col] > b[col]) {
                    return isAscending ? 1 : -1;
                } else if (a[col] < b[col]) {
                    return isAscending ? -1 : 1;
                }
                return 0;
            });
        },
        "num_pages": function num_pages(cartOrChannels: string) {
            let data = cartOrChannels == 'cart' ? this.cart : this.channels;
            return Math.ceil(data.rows.length / this.elementsPerPage);
        },
        "get_rows": function get_rows(cartOrChannels: string) {
            let start = (this.currentPage-1) * this.elementsPerPage;
            let end = start + this.elementsPerPage;
            let data = cartOrChannels == 'cart' ? this.cart : this.channels;
            return data.rows.slice(start, end);
        },
        "change_page": function change_page(page: number) {
            this.currentPage = page;
        }
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

