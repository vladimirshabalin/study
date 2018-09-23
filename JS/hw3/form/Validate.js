'use strict';

class Validate {
    constructor(form, name, email, tel, commit) {
        this.form = form;
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.commit = commit;
        this.result = null;
        this.btn = {
            name: null,
            email: null,
            tel: null,
            commit: null
        };
        this._validate();
    }

    _validate() {
        this._result();
        this._checkName();
        this._checkEmail();
        this._checkTel();
        this._checkCommit();

        document.getElementById('myform').addEventListener('keyup', event => {
            if (this.btn.name == true
                &&
                this.btn.email == true
                &&
                this.btn.tel == true
                &&
                this.btn.commit == true
            ) {
                document.getElementById('btn').setAttribute('style', 'display: block')
            } else {
                document.getElementById('btn').setAttribute('style', 'display: none')
            }
        })
    }

    _checkName() {
        document.getElementById(`${this.name}`).addEventListener('keyup', event => {
            event.preventDefault();
            let userName = document.getElementById(`${this.name}`);
            let result = this.result;
            if (/^[a-zа-я\-]{1,30}$/i.test(userName.value)) {
                result.innerHTML = `<i class="fas fa-check true"></i><span>Имя введено верно</span> `;
                userName.setAttribute('style', 'border: 1px solid green');
                this.btn.name = true;
            } else {
                result.innerHTML = `<i class="fas fa-times false"></i><span>Имя может содержать только буквы и "-"</span>`
                userName.setAttribute('style', 'border: 1px solid red');
                this.btn.name = false;
            }
        });
    }

    _checkEmail() {
        document.getElementById(`${this.email}`).addEventListener('keyup', event => {
            event.preventDefault();
            let email = document.getElementById(`${this.email}`);
            let result = this.result;
            if (/^[a-z\@]{1,30}\.[rucom]{2,3}$/.test(email.value)) {
                result.innerHTML = `<i class="fas fa-check true"></i><span>Email введен верно</span> `;
                email.setAttribute('style', 'border: 1px solid green');
                this.btn.email = true;
            } else {
                result.innerHTML = `<i class="fas fa-times false"></i><span>Email должен располагаться в домменых зонах .ru и .com</span>`
                email.setAttribute('style', 'border: 1px solid red');
                this.btn.email = false;
            }
        });
    }

    _checkTel() {
        document.getElementById(`${this.tel}`).addEventListener('keyup', event => {
            event.preventDefault();
            let tel = document.getElementById(`${this.tel}`);
            let result = this.result;
            if (/^\+[7]\([\d]{3}\)[\d]{3}\-[\d]{4}$/.test(tel.value)) {
                result.innerHTML = `<i class="fas fa-check true"></i><span>Телефон введен верно</span> `;
                tel.setAttribute('style', 'border: 1px solid green');
                this.btn.tel = true;
            } else {
                result.innerHTML = `<i class="fas fa-times false"></i><span>Телефон должен соответсвовать шаблону +7(999)123-1234</span>`
                tel.setAttribute('style', 'border: 1px solid red');
                this.btn.tel = false;
            }
        });
    }

    _checkCommit() {
        document.getElementById(`${this.commit}`).addEventListener('keyup', event => {
            event.preventDefault();
            let commit = document.getElementById(`${this.commit}`);
            let result = this.result;
            if (/^.{1,200}$/.test(commit.value)) {
                result.innerHTML = `<i class="fas fa-check true"></i><span>Текст введен верно</span> `;
                commit.setAttribute('style', 'border: 1px solid green');
                this.btn.commit = true;
            } else {
                result.innerHTML = `<i class="fas fa-times false"></i><span>Текст должен содержать не более 200 символов</span>`
                commit.setAttribute('style', 'border: 1px solid red');
                this.btn.commit = false;
            }
        });
    }

    _result() {
        let resultDiv = document.createElement('div');
        resultDiv.setAttribute('id', 'result');
        let script = document.querySelector('script');
        document.body.insertBefore(resultDiv, script);
        this.result = document.getElementById(`result`);
    }
}