class Mail {
    constructor(name, email, msg, url) {
        this.message = ''
        this.name = name
        this.email = email
        this.msg = msg
        this.url = url
        this.data = this.createForm()
        this.init(this.data)
    }

    createForm() {
        const formData = new FormData()
        formData.append('name', this.name)
        formData.append('email', this.email)
        formData.append('message', this.msg)
        return formData
    }
    
    init(data) {
        fetch(this.url, {
            method: 'POST',
            body: data
        }).then(response => {
            if(response.status == 200) {
                this.success()
                const msg = document.querySelector('.alert-message')
                msg.textContent = this.message
                msg.classList.add('success')
                msg.classList.add('show')
                setTimeout(() => {
                    msg.classList.remove('show')
                }, 2000)
            } else {
                this.error()
                const msg = document.querySelector('.alert-message')
                msg.textContent = this.message
                msg.classList.add('error')
                msg.classList.add('show')
                setTimeout(() => {
                    msg.classList.remove('show')
                }, 2000)
            }
        })
    }

    success() {
        this.message = 'Mensagem enviada com sucesso!'
    }

    error() {
        this.message = 'Oops algo de errado ocorreu!'
    }
}