const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '' && this.inputValue.trim().length !== 0) {
                this.notes.push(this.inputValue)
                this.inputValue = '';
                this.placeholderString = 'Введите название заметки'
            } else {
                this.placeholderString = 'Введите текст пж'

            }

            
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        
    },
    
}


const app = Vue.createApp(App)

app.mount('#app')