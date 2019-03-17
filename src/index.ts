import Vue from "vue";

new Vue({
    el: '#app',
    data: {
        search_query: '',
        channels: {
            rows: [
                {name: "Aaj Tak", price: 0, res: "SD"},
                {name: "ABP news", price: 0, res: "SD"},
                {name: "DD Loksabha", price: 0, res: "SD"},
                {name: "DD News", price: 0, res: "SD"},
                {name: "DD Rajyasabha", price: 0, res: "SD"},
                {name: "India News", price: 0, res: "SD"},
                {name: "India tv", price: 0, res: "SD"},
                {name: "News 24", price: 0, res: "SD"},
                {name: "News Nation", price: 0, res: "SD"},
                {name: "Sadhana Plus", price: 0, res: "SD"},
                {name: "ZeeHindustan", price: 0, res: "SD"},
                {name: "Zee News", price: 0, res: "SD"},
                {name: "Dabang", price: 0, res: "SD"},
                {name: "Dangal TV", price: 0, res: "SD"},
                {name: "DD Hindi Bihar", price: 0, res: "SD"},
                {name: "DD Hindi UP", price: 0, res: "SD"},
                {name: "DD Hindi Rajasthan", price: 0, res: "SD"},
                {name: "DD Hindi MP", price: 0, res: "SD"},
                {name: "DD Kisan", price: 0, res: "SD"},
                {name: "Digishala", price: 0, res: "SD"},
                {name: "IBC 24", price: 0, res: "SD"},
                {name: "News State", price: 0, res: "SD"},
                {name: "News18 Bihar", price: 0, res: "SD"},
                {name: "News18 Uttar Pradesh/Uttarakhand", price: 0, res: "SD"},
                {name: "Sangeet Bhojpuri", price: 0, res: "SD"},
                {name: "Gulistan News", price: 0, res: "SD"},
                {name: "B4U Movies", price: 0, res: "SD"},
                {name: "Cinema TV", price: 0, res: "SD"},
                {name: "Enterr10", price: 0, res: "SD"},
                {name: "Housefull Action", price: 0, res: "SD"},
                {name: "Housefull Movies", price: 0, res: "SD"},
                {name: "Maha Movie", price: 0, res: "SD"},
                {name: "Manoranjan Movies", price: 0, res: "SD"},
                {name: "Movie House", price: 0, res: "SD"},
                {name: "Sky Star", price: 0, res: "SD"},
                {name: "Sony Wah", price: 0, res: "SD"},
                {name: "Star Utsav Movies", price: 0, res: "SD"},
                {name: "WOW Cinema", price: 0, res: "SD"},
                {name: "Zee Anmol Cinema", price: 0, res: "SD"},
                {name: "A1 TV", price: 0, res: "SD"},
                {name: "Big Magic", price: 0, res: "SD"},
                {name: "DD Bharati", price: 0, res: "SD"},
                {name: "DD India", price: 0, res: "SD"},
                {name: "DD National", price: 0, res: "SD"},
                {name: "Rishtey TV", price: 0, res: "SD"},
                {name: "Sony Pal", price: 0, res: "SD"},
                {name: "Star Bharat", price: 0, res: "SD"},
                {name: "Star Utsav", price: 0, res: "SD"},
                {name: "Zee Anmol", price: 0, res: "SD"},
                {name: "Bhojpuri Cinema", price: 0, res: "SD"},
                {name: "Channel WIN", price: 0, res: "SD"},
                {name: "DD Urdu", price: 0, res: "SD"},
                {name: "DD Kashir", price: 0, res: "SD"},
                {name: "ABP Ananda", price: 0.5, res: "SD"},
                {name: "ABP Majha", price: 0.5, res: "SD"},
                {name: "The History Channel", price: 4, res: "SD"},
                {name: "FY1 TV18", price: 1, res: "SD"},
                {name: "FY1 TV18 (HD)", price: 1, res: "HD"},
                {name: "History TV18 HD", price: 9, res: "HD"},
                {name: "Asianet", price: 19, res: "SD"},
                {name: "Asianet Plus", price: 5, res: "SD"},
                {name: "Asianet Movies", price: 15, res: "SD"},
                {name: "Suvarna Plus", price: 5, res: "SD"},
                {name: "Star Suvarna HD", price: 19, res: "HD"},
                {name: "Asianet HD", price: 19, res: "HD"},
                {name: "Star Suvarna", price: 19, res: "SD"},
                {name: "AATH", price: 4, res: "SD"},
                {name: "SONY Marathi", price: 4, res: "SD"},
                {name: "BBC World News", price: 1, res: "SD"},
                {name: "Zoom", price: 1, res: "SD"},
                {name: "Romedy Now", price: 8, res: "SD"},
                {name: "MN +", price: 10, res: "HD"},
                {name: "Mirror Now", price: 3, res: "SD"},
                {name: "ET NOW", price:3, res: "SD"},
                {name: "Times Now", price: 5, res: "SD"},
                {name: "Romedy Now HD", price: 10, res: "HD"},
                {name: "Movies Now HD", price: 15, res: "HD"},
                {name: "MNX HD", price: 10, res: "HD"},
                {name: "MNX", price: 8, res: "HD"},
                {name: "Times Now HD", price: 7, res: "HD"},
                {name: "BTVi", price: 3, res: "SD"},
                {name: "Travel XP HD", price: 9, res: "HD"},
                {name: "Travel XP Tamil", price: 1.5, res: "SD"},
                {name: "JAN TV PLUS", price: 50, res: "SD"},
                {name: "Animal Planet", price: 2, res: "SD"},
                {name: "Discovery Channel", price: 4, res: "SD"},
                {name: "Discovery Channel - Tamil", price: 4, res: "SD"},
                {name: "Discovery Kids Channel", price: 3, res: "SD"},
                {name: "Discovery Science", price: 1, res: "SD"},
                {name: "Discovery Turbo", price: 1, res: "SD"},
                {name: "Discovery Jeet", price: 1, res: "SD"},
                {name: "Discovery HD World", price: 6, res: "HD"},
                {name: "Animal Planet HD World", price: 3, res: "HD"},
                {name: "TLC HD world", price: 3, res: "HD"},
                {name: "Discovery Jeet HD", price: 2, res: "HD"},
                {name: "TLC", price: 2, res: "SD"},
                {name: "D sport", price: 4, res: "SD"},
                {name: "Disney Junior", price: 4, res: "SD"},
                {name: "UTV Movies", price: 2, res: "SD"},
                {name: "Marvel HQ (Disney XD)", price: 4, res: "SD"},
                {name: "Disney International HD", price: 12, res: "HD"},
                {name: "Hungama TV", price: 6, res: "SD"},
                {name: "The Disney Channel", price: 8, res: "SD"},
                {name: "UTV HD", price: 8, res: "HD"},
                {name: "ETV", price: 17, res: "SD"},
                {name: "ETV Andhra Pradesh", price: 1, res: "SD"},
                {name: "ETV - Telangana", price: 1, res: "SD"},
                {name: "ETV Cinema", price: 6, res: "SD"},
                {name: "ETV Life", price: 1, res: "SD"},
                {name: "ETV Plus", price: 7, res: "SD"},
                {name: "ETV Abhiruchi", price: 2, res: "SD"},
                {name: "ETV HD", price: 19, res: "HD"},
                {name: "ETV Plus HD", price: 10, res: "HD"},
                {name: "ETV Cinema HD", price: 10, res: "HD"},
                {name: "ETV Abhiruchi HD", price: 4, res: "HD"},
                {name: "ETV Life HD", price: 3, res: "HD"},

            ]
        },
        cart: {
            rows: [
                {name: "", price: 0}
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

