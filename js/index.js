const app = new Vue({
        el: "#app",
        data() {
            return {
                inputText: '',
                lists: [],
                isDisplay: false,
            }
        },
        methods: {
            onAdd() {
                if(this.inputText) {
                    this.lists.push({
                        name: this.inputText,
                    });
                    this.isDisplay = true;
                }
                this.inputText = '';
            },
            onDelete (index) {
                this.lists.splice(index, 1);
                if(this.lists.length === 0) {
                    this.isDisplay = false;
                }
            }
        }
    }
);